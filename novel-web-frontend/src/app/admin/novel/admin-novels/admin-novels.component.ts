import {Component, effect, inject} from '@angular/core';
import {AdminNovelService} from '../../admin-novel.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {injectMutation, injectQuery, injectQueryClient} from '@tanstack/angular-query-experimental';
import {FaIconComponent, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {lastValueFrom} from 'rxjs';
import {CommonModule, NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-admin-novels',
  standalone: true,
  imports: [FaIconComponent, NgStyle, RouterLink,CommonModule],
  templateUrl: './admin-novels.component.html',
  styleUrl: './admin-novels.component.scss'
})
export class AdminNovelsComponent {
  novelService = inject(AdminNovelService);
  toastService = inject(ToastService);
  queryClient = injectQueryClient();


  constructor() {

    effect(() => this.handleProductQueryError());
  }

  novelsQuery = injectQuery(() => ({
    queryKey: ['product'],
    queryFn: () =>
      lastValueFrom(this.novelService.findAllNovels()),
  }));

  deleteMutation = injectMutation(() => ({
    mutationFn: (novelPublicId: string) =>
      lastValueFrom(this.novelService.deleteNovel(novelPublicId)),
    onSuccess: () => this.onDeletionSuccess(),
    onError: () => this.onDeletionError(),
  }));

  deleteNovel(publicId: string) {
    this.deleteMutation.mutate(publicId);
  }

  private onDeletionSuccess() {
    this.queryClient.invalidateQueries({ queryKey: ['products'] });
    this.toastService.show('Product deleted', 'SUCCESS');
  }

  private onDeletionError() {
    this.toastService.show('Issue when deleting product', 'ERROR');
  }

  private handleProductQueryError() {
    if (this.novelsQuery.isError()) {
      this.toastService.show(
        'Error failed to load products, please try again',
        'ERROR'
      );
    }
  }
}
