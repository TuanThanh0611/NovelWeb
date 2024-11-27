import { Injectable } from '@angular/core';
import {Chapter} from '../../shared/model/chapter.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private baseUrl = 'http://localhost:8080/api/chapter';

  constructor(private http: HttpClient) {}
  addChapter(publicId: string, chapterData: any): Observable<any> {
    // Lấy token từ localStorage (hoặc sessionStorage)
    const token = localStorage.getItem('authToken'); // Hoặc lấy từ sessionStorage nếu sử dụng sessionStorage

    // Tạo HttpHeaders với token và Accept header
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'  // Đảm bảo yêu cầu trả về dữ liệu JSON
    });

    // Gửi request với headers
    return this.http.post(`${this.baseUrl}/${publicId}`, chapterData, { headers });
  }}
