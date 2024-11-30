import {Component, OnInit} from '@angular/core';
import {Chapter} from '../../shared/model/chapter.model';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ChapterService} from '../../services/chapter/chapter.service';
import {CommonModule, DatePipe} from '@angular/common';

@Component({
  selector: 'app-chapter-list',
  standalone: true,
  imports: [
    DatePipe, CommonModule, RouterLink
  ],
  templateUrl: './chapter-list.component.html',
  styleUrl: './chapter-list.component.scss'
})
export class ChapterListComponent implements OnInit{
  chapters: Chapter[] = [];
  errorMessage: string | null = null;
  novelPublicId!: string;

  constructor(private http: HttpClient,private route: ActivatedRoute,private chapterService: ChapterService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.novelPublicId = params['novelPublicId'];
      this.loadChapterList(this.novelPublicId);
    });

  }
  loadChapterList(novelPublicId: string): void {
    this.chapterService.getChapterList(novelPublicId).subscribe({
      next: (data: Chapter[] | null) => {
        if (data) {
          this.chapters = data;
        } else {
          console.error('No data received');
          // Xử lý khi không có dữ liệu (có thể hiển thị thông báo lỗi cho người dùng)
        }
      },
      error: (err) => {
        console.error('Error loading novel details:', err);
        // Xử lý khi có lỗi trong quá trình gọi API
      }
    });
  }

}
