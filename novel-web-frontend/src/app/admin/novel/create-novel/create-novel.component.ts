import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminNovelService } from '../../admin-novel.service';
import { ToastService } from '../../../shared/toast/toast.service';
import { Router } from '@angular/router';
import { BaseNovel, NovelGenre } from '../../model/novel.model';
import { injectMutation, injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgxControlError } from 'ngxtension/control-error';

@Component({
  selector: 'app-create-novel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxControlError],
  templateUrl: './create-novel.component.html',
  styleUrls: ['./create-novel.component.scss'],
})
export class CreateNovelComponent {
  public formBuilder = inject(FormBuilder);
  public novelService = inject(AdminNovelService);
  public toastService = inject(ToastService);
  public router = inject(Router);

  public title = new FormControl<string>('', { validators: [Validators.required], nonNullable: true });
  public author = new FormControl<string>('', { validators: [Validators.required], nonNullable: true });
  public description = new FormControl<string>('', { validators: [Validators.required], nonNullable: true });
  public genres = this.formBuilder.array<NovelGenre>([], [Validators.required]);


  public createForm = this.formBuilder.group({
    title: this.title,
    author: this.author,
    genres: this.genres,
    description: this.description,
  });
  trackByPublicId(index: number, item: any): any {
    return item.publicId; }

  public loading = false;

  public genresQuery = injectQuery(() => ({
    queryKey: ['genres'],
    queryFn: () => lastValueFrom(this.novelService.findAllGenres()),
  }));

  public createMutation = injectMutation(() => ({
    mutationFn: (novel: BaseNovel) => lastValueFrom(this.novelService.createNovel(novel)),
    onSettled: () => (this.loading = false),
    onSuccess: () => {
      this.toastService.success('Novel created successfully!');
      this.router.navigate(['/novels']);
    },
    onError: () => this.toastService.error('Failed to create the novel. Please try again.'),
  }));

  public onGenreChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const genresArray = this.createForm.get('genres') as FormArray;

    if (target.checked) {
      genresArray.push(this.formBuilder.control(target.value));
    } else {
      const index = genresArray.controls.findIndex((x) => x.value === target.value);
      if (index !== -1) genresArray.removeAt(index);
    }
  }

  public onUploadNewPicture(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input || !input.files) {
      return;
    }

    const file = input.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      this.novelService.uploadPicture(formData).subscribe({
        next: (response: { fileName: string | undefined }) => {
          this.toastService.success('Picture uploaded successfully!');
        },
        error: () => {
          this.toastService.error('Failed to upload picture.');
        },
      });
    }
  }



  public create(): void {
    if (this.createForm.invalid) {
      this.toastService.error('Please fill out all required fields.');
      return;
    }

    const novelToCreate: BaseNovel = {
      title: this.title.value,
      author: this.author.value,
      genres: this.genres.value.filter((g) => g !== null) as NovelGenre[],
      description: this.description.value,
    };

    this.loading = true;
    this.createMutation.mutate(novelToCreate);
  }


}
