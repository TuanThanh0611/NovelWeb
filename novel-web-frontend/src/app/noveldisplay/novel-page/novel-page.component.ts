import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, NgClass } from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {NovelService} from '../../services/novel/novel.service';
import {NovelPageInfo} from '../../admin/model/novel.model';
import {CommentSectionComponent} from '../comment-section/comment-section.component';

@Component({
  selector: 'app-novel-page',
  standalone: true,
  imports: [
    DecimalPipe,
    NgClass,
    CommonModule,
    CommentSectionComponent
  ],
  templateUrl: './novel-page.component.html',
  styleUrls: ['./novel-page.component.scss'] // Đúng cú pháp: `styleUrls` (số nhiều)
})
export class NovelPageComponent implements OnInit {
  publicId!: string; // ID của novel từ URL
  genres: string[] = [];
  novel:NovelPageInfo|null=null;
  latestChapter: string='1000 ';
  chapterUpdatedTime:string='Nov 27';
  reviewsCount: string='66';
  averageScore: string='4.9';


  constructor(private route: ActivatedRoute,private novelService: NovelService,private router: Router,    ) {}

  ngOnInit(): void {
    // Lấy tham số 'publicId' từ URL
    this.route.params.subscribe(params => {
      this.publicId = params['publicId'];
      this.loadNovelDetails(this.publicId);
    });
  }
  chapter1():void{
    this.router.navigate([`/read/${this.publicId}/1`]);
  }
  chapterlist():void{
    this.router.navigate([`/chapter-list/${this.publicId}`]);
  }

  loadNovelDetails(publicId: string): void {
    this.novelService.getNovel(publicId).subscribe({
      next: (data: NovelPageInfo | null) => {
        if (data) {
          this.novel = data;  // Lưu thông tin tiểu thuyết
          this.genres = data.genres.map((genre: any) => genre.name);  // Lưu danh sách thể loại
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
  onRead(): void {
    console.log('Read button clicked!');
    // Thêm logic xử lý khi bấm nút Read
  }

  onLibrary(): void {
    console.log('Library button clicked!');
    // Thêm logic xử lý khi bấm nút Library
  }
}
