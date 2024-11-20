import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {AdminNovelService} from '../../admin-novel.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {Router} from '@angular/router';
import {BaseNovel, CreateNovelFormContent, NovelGenre, NovelPicture} from '../../model/novel.model';
import {injectMutation, injectQuery} from '@tanstack/angular-query-experimental';
import {lastValueFrom} from 'rxjs';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-create-novel',
  standalone: true,
  imports: [
    ReactiveFormsModule,CommonModule
  ],
  templateUrl: './create-novel.component.html',
  styleUrl: './create-novel.component.scss'
})
export class CreateNovelComponent {
  public formBuilder = inject(FormBuilder);
  novelService = inject(AdminNovelService);
  toastService = inject(ToastService);
  router = inject(Router);
  public novelGenres = new Array<NovelGenre>();


  // Form controls
  title = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  description = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  genres = new FormControl<Array<NovelGenre>>([], {
    nonNullable: true,
    validators: [Validators.required],
  });
  author = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  picture = new FormControl<NovelPicture | null>(null, {
    nonNullable: true,
    validators: [Validators.required],
  });

  public createForm =
    this.formBuilder.nonNullable.group<CreateNovelFormContent>({
      title: this.title,
      author: this.author,
      genres: this.genres,
      description: this.description,
      picture: this.picture,
    });

  loading = false;

  genresQuery = injectQuery(() => ({
    queryKey: ['genres'],
    queryFn: () => lastValueFrom(this.novelService.findAllGenres()),
  }));

  trackByPublicId(index: number, item: any): any {
    return item.publicId;
  }

  createMutation = injectMutation(() => ({
    mutationFn: (novel: BaseNovel) =>
      lastValueFrom(this.novelService.createNovel(novel)),
    onSettled: () => this.onCreationSettled(),
    onSuccess: () => this.onCreationSuccess(),
    onError: () => this.onCreationError(),
  }));

  create(): void {
    const novelToCreate: BaseNovel = {
      title: this.createForm.getRawValue().title,
      author: this.createForm.getRawValue().author,
      genres: this.createForm.getRawValue().genres,
      description: this.createForm.getRawValue().description,
      picture: this.picture.value,  // Đây là một đối tượng NovelPicture duy nhất
    };

    this.loading = true;
    this.createMutation.mutate(novelToCreate);
  }

  private extractFileFromTarget(target: EventTarget | null): FileList | null {
    const htmlInputTarget = target as HTMLInputElement;
    if (target === null || htmlInputTarget.files === null) {
      return null;
    }
    return htmlInputTarget.files;
  }

  onUploadNewPicture(target: EventTarget | null) {
    const picturesFileList = this.extractFileFromTarget(target);
    if (picturesFileList !== null && picturesFileList.length > 0) {
      const picture = picturesFileList.item(0);  // Lấy ảnh đầu tiên
      if (picture !== null) {
        const novelPicture: NovelPicture = {
          file: picture,
          mimeType: picture.type,
        };
        // Cập nhật lại FormControl pictures với một đối tượng NovelPicture duy nhất
        this.picture.setValue(novelPicture);
      }
    }
  }

  private savePictureToPublicDirectory(picture: File): void {
    const formData = new FormData();
    formData.append('file', picture);

    this.novelService.uploadPicture(formData).subscribe({
      next: () => {
        this.toastService.success('Picture uploaded successfully!');
      },
      error: (err: any) => {
        this.toastService.error('Failed to upload picture.');
        console.error(err);
      },
    });
  }

  // Callback functions for mutation
  private onCreationSettled(): void {
    this.loading = false;
  }

  private onCreationSuccess(): void {
    this.toastService.success('Novel created successfully!');
    this.router.navigate(['/novels']);
  }

  private onCreationError(): void {
    this.toastService.error('Failed to create the novel. Please try again.');
  }
}
