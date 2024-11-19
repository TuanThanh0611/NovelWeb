import {Component, inject, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import {lastValueFrom, of} from 'rxjs';

import {injectMutation} from '@tanstack/angular-query-experimental';
import {ToastService} from '../../../shared/toast/toast.service';
import {AdminNovelService} from '../../admin-novel.service';
import {CreateGenreFormContent, NovelGenre} from '../../model/novel.model';
import {NgxControlError} from 'ngxtension/control-error';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxControlError],
  styleUrls: ['./create-genre.component.scss']
})
export class CreateGenreComponent {
  formBuilder = inject(FormBuilder);
  novelService = inject(AdminNovelService);
  toastService = inject(ToastService);
  router = inject(Router);

  name = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  public createForm =
    this.formBuilder.nonNullable.group<CreateGenreFormContent>({
      name: this.name,
    });

  loading = false;

  createMutation = injectMutation(() => ({
    mutationFn: (genreToCreate: NovelGenre) =>
      lastValueFrom(this.novelService.createGenre(genreToCreate)),
    onSettled: () => this.onCreationSettled(),
    onSuccess: () => this.onCreationSuccess(),
    onError: () => this.onCreationError(),
  }));

  create(): void {
    const genreToCreate: NovelGenre = {
      name: this.createForm.getRawValue().name,
    };

    this.loading = true;
    this.createMutation.mutate(genreToCreate);
  }

  private onCreationSettled(): void {
    this.loading = false;
  }

  private onCreationSuccess(): void {
    this.toastService.show('Category created', 'SUCCESS');
    this.router.navigate(['/admin/genres/list']);
  }

  private onCreationError(): void {
    this.toastService.show('Issue when creating category', 'ERROR');
  }


}
