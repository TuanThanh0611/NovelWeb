import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NovelService} from '../../services/novel/novel.service';
import {Chapter} from '../../shared/model/chapter.model';
import {ChapterService} from '../../services/chapter/chapter.service';
import {NovelPageInfo} from '../../admin/model/novel.model';
import {CommonModule, DatePipe} from '@angular/common';

@Component({
  selector: 'app-chapter-detail',
  standalone: true,
  imports: [
    DatePipe,CommonModule
  ],
  templateUrl: './chapter-detail.component.html',
  styleUrl: './chapter-detail.component.scss'
})
export class ChapterDetailComponent implements OnInit{
  novelPublicId!: string;
  chapterNumber!: number;
  chapter:Chapter = {
    novelPublicId:"1234",
    id:3,
    chapterNumber: 0,
    title: 'The Beginning',
    content: `
      This is the content of the first chapter. It introduces the main characters and sets up the world.
      The protagonist embarks on a journey filled with mysteries and challenges.
    `,
    publishedDate: 'Nov 29, 2024'
  };


  constructor(private route: ActivatedRoute,private chapterService: ChapterService) {}

  ngOnInit(): void {
    // Lấy tham số 'publicId' từ URL
    this.route.params.subscribe(params => {
      console.log('Received params:', params); // Log để kiểm tra giá trị

      this.novelPublicId = params['novelPublicId'];
      this.chapterNumber = +params['chapterNumber']; // Chuyển thành số nếu cần

      if (!this.novelPublicId || isNaN(this.chapterNumber)) {
        console.error('Invalid URL parameters:', this.novelPublicId, this.chapterNumber);
        return; // Dừng nếu tham số không hợp lệ
      }

      this.loadNovelDetails(this.novelPublicId, this.chapterNumber);
    });
  }

  loadNovelDetails(novelPublicId: string,chapterNumber:number): void {
    this.chapterService.getChapter(novelPublicId,chapterNumber).subscribe({
      next: (data: Chapter | null) => {
        if (data) {
          this.chapter = data;
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
