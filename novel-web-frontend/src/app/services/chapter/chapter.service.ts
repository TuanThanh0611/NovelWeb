import { Injectable } from '@angular/core';
import {Chapter} from '../../shared/model/chapter.model';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NovelPageInfo} from '../../admin/model/novel.model';
import {catchError, tap} from 'rxjs/operators';

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
  }
  getChapter(novelPublicId: string, chapterNumber: number): Observable<Chapter> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Authorization token is missing');
      return throwError(() => new Error('Missing authentication token'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    });

    const url = `${this.baseUrl}/get-chapter?novelPublicId=${novelPublicId}&chapterNumber=${chapterNumber}`;

    return this.http.get<Chapter>(url, { headers }).pipe(
      tap((data) => console.log('Novel data received:', data)),
      catchError((error) => {
        console.error('Error fetching novel details:', error);
        return throwError(() => new Error('Failed to fetch novel details'));
      })
    );
  }
  getChapterList(novelPublicId: string): Observable<Chapter[]> {
    // Lấy token từ localStorage (hoặc sessionStorage)
    const token = localStorage.getItem('authToken'); // Hoặc lấy từ sessionStorage nếu sử dụng sessionStorage

    // Tạo HttpHeaders với token và Accept header
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'  // Đảm bảo yêu cầu trả về dữ liệu JSON
    });

    // Tạo URL với query parameters
    const url = `${this.baseUrl}/get-chapter-list?novelPublicId=${novelPublicId}`;

    return this.http.get<Chapter[]>(url, { headers }).pipe(
      tap((data) => {
      }),
      catchError((error) => {
        console.error('Error fetching novel details:', error);
        return throwError(() => new Error('Failed to fetch novel details'));
      })
    );
  }
}
