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
import {FileDetails} from '../../../shared/model/file-details.model';
import {FileUploadService} from '../../../services/file-upload.service';

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


  public title = new FormControl<string>('', { validators: [Validators.required], nonNullable: true });
  public authName = new FormControl<string|undefined>('', { validators: [Validators.required] });
  public description = new FormControl<string>('', { validators: [Validators.required], nonNullable: true });
  public cover = new FormControl<string>('', { validators: [Validators.required], nonNullable: true });
  public genres = this.formBuilder.array<NovelGenre>([], [Validators.required]);
  constructor(private fileUploadService: FileUploadService, private router: Router) {
  }

  file!: File;
  fileDetails!: FileDetails;
  fileUris: Array<string> = [];
  public createForm = this.formBuilder.group({
    title: this.title,
    authName: this.authName,
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
    mutationFn: (data: { novel: BaseNovel; coverFile: File }) =>
      lastValueFrom(this.novelService.createNovel(data.novel)), // Gọi đúng phương thức với 2 tham số
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

  uploadFile() {
    this.fileUploadService.upload(this.file).subscribe({
      next: (data) => {
        this.fileDetails = data;
        this.fileUris.push(this.fileDetails.fileUri);
        alert("File Uploaded Successfully")
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  selectFile(event: any) {
    this.file = event.target.files.item(0);
    // Lấy tên novel từ form (ví dụ: title)
    const novelTitle = this.title.value?.replace(/\s+/g, '-').toLowerCase();

    if (novelTitle) {
      const fileExtension = this.file.name.split('.').pop(); // Lấy phần mở rộng của file gốc
      const newFileName = `${novelTitle}.${fileExtension}`; // Tạo tên mới cho file

      // Tạo một file mới với tên mới
      const newFile = new File([this.file], newFileName, { type: this.file.type });
      this.file = newFile; // Cập nhật file với tên mới
      this.cover.setValue(newFileName);
    }
  }


  public create(): void {
    if (this.createForm.invalid) {
      this.toastService.error('Please fill out all required fields.');
      return;
    }

    const novelToCreate: BaseNovel = {
      title: this.title.value,
      authName: this.authName.value ?? undefined,
      genres: this.genres.value.filter((g) => g !== null) as NovelGenre[],
      description: this.description.value,
      cover:this.cover.value ?? this.cover.value,
    };

    this.loading = true;

    this.novelService.createNovel(novelToCreate).subscribe({
      next: () => {
        this.toastService.success('Novel created successfully!');
        this.router.navigate(['/novels']);
      },
      error: () => {
        this.loading = false;
        this.toastService.error('Failed to create the novel. Please try again.');
      },
    });
  }


}
