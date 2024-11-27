import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ChapterService} from '../../../services/chapter/chapter.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-add-chapter',
  standalone: true,
  imports: [ CommonModule,
    ReactiveFormsModule],
  templateUrl: './add-chapter.component.html',
  styleUrl: './add-chapter.component.scss'
})
export class AddChapterComponent {
  chapterForm: FormGroup;
  novelPublicId:string="";

  constructor(
    private fb: FormBuilder,
    private chapterService: ChapterService,
    private router: Router,
  private route: ActivatedRoute
  ) {

    this.chapterForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      chapterNumber: [1, [Validators.required, Validators.min(1)]],
      novelPublicId: [null, [Validators.required]],
    });
    this.novelPublicId = this.route.snapshot.paramMap.get('publicId') || '';
    this.chapterForm.patchValue({ novelPublicId: this.novelPublicId });
  }


  // Gửi dữ liệu thêm mới chapter
  onSubmit(): void {
    if (this.chapterForm.invalid) {
      return;
    }

    const newChapter = this.chapterForm.value;

    this.chapterService.addChapter(this.novelPublicId,newChapter).subscribe(
      () => {
        alert('Chapter added successfully!');
        this.router.navigate(['/chapters']); // Chuyển hướng sau khi thêm thành công
      },
      (error) => {
        console.error('Error adding chapter:', error);
        alert('Failed to add chapter. Please try again.');
      }
    );
  }
}
