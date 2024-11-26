import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {NovelService} from '../../services/novel/novel.service';

@Component({
  selector: 'app-novel-page',
  standalone: true,
  imports: [
    DecimalPipe,
    NgClass,
    CommonModule,
  ],
  templateUrl: './novel-page.component.html',
  styleUrls: ['./novel-page.component.scss'] // Đúng cú pháp: `styleUrls` (số nhiều)
})
export class NovelPageComponent implements OnInit {
  publicId!: string; // ID của novel từ URL
  genres: string[] = [];
  novel = {
    title: '',
    subtitle: '',
    authName: '',
    ranking: 0,
    star: 0,
    summary: '',
    status: '',
    genres: [],
    readButtonText: 'Read Chapter 1', // Thêm thuộc tính này
    isLibraryDisabled: false, // Thêm thuộc tính này
    bookmarked: 0,
    chapters:0,
    views:0,
    cover:"http://localhost:8080/images/cổ-chân-nhân.jpg",
  };


  constructor(private route: ActivatedRoute,private novelService: NovelService) {}

  ngOnInit(): void {
    // Lấy tham số 'publicId' từ URL
    this.route.params.subscribe(params => {
      this.publicId = params['publicId'];
      this.loadNovelDetails(this.publicId);
    });
  }

  loadNovelDetails(publicId: string): void {
    this.novelService.getNovel(publicId).subscribe((data) => {
      this.novel = data;  // Lưu thông tin tiểu thuyết
      this.genres = data.genres.map((genre: any) => genre.name);  // Lưu danh sách thể loại
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
