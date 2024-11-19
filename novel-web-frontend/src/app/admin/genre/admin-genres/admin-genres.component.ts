import {Component, effect, inject} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {AdminNovelService} from '../../admin-novel.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {injectMutation, injectQuery, injectQueryClient} from '@tanstack/angular-query-experimental';
import {lastValueFrom} from 'rxjs';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-admin-genres',
  standalone: true,
  imports: [
    FaIconComponent,CommonModule
  ],
  templateUrl: './admin-genres.component.html',
  styleUrl: './admin-genres.component.scss'
})
export class AdminGenresComponent {
  novelAdminService = inject(AdminNovelService);

  toastService = inject(ToastService);
  queryClient = injectQueryClient();

  constructor() {

  }

  genresQuery = injectQuery(() => ({
    queryKey: ['genres'],
    queryFn: () => lastValueFrom(this.novelAdminService.findAllGenres()),
    onError: (error: any) => this.handleCategoriesQueryError(error),
  }));



  trackByPublicId(index: number, item: any): any {
    return item.publicId; }



  deleteMutation = injectMutation(() => ({
    mutationFn: (genrePublicId: string) =>
      lastValueFrom(this.novelAdminService.deleteGenre(genrePublicId)),
    onSuccess: () => this.onDeletionSuccess(),
    onError: () => this.onDeletionError(),
  }));

  private onDeletionSuccess(): void {
    this.queryClient.invalidateQueries({ queryKey: ['genres'] });
    this.toastService.show('Genre deleted', 'SUCCESS');
  }

  private onDeletionError(): void {
    this.toastService.show('Issue when deleting genre', 'ERROR');
  }

  private handleCategoriesQueryError(error: any): void {
    this.toastService.show(
      'Error! Failed to load categories. please try again.',
      'ERROR'
    );
    console.error(error); // Bạn có thể log thêm thông tin chi tiết để dễ dàng debug
  }

  deleteGenre(publicId: string) {
    this.deleteMutation.mutate(publicId);
  }
}
