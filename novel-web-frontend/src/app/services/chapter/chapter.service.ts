import { Injectable } from '@angular/core';
import {Chapter} from '../../shared/model/chapter.model';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NovelPageInfo} from '../../admin/model/novel.model';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../environtments/environtment';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private baseUrl = environment.apiUrl;  // apiUrl cố định từ environment

  constructor(private http: HttpClient) {}

  addChapter(publicId: string, chapterData: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    // Dùng apiUrl từ environment và thêm đường dẫn cho chapter
    return this.http.post(`${this.baseUrl}/api/chapter/${publicId}`, chapterData, { headers });
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

    const url = `${this.baseUrl}/api/chapter/get-chapter?novelPublicId=${novelPublicId}&chapterNumber=${chapterNumber}`;
    return this.http.get<Chapter>(url, { headers }).pipe(
      tap((data) => console.log('Novel data received:', data)),
      catchError((error) => {
        console.error('Error fetching novel details:', error);
        return throwError(() => new Error('Failed to fetch novel details'));
      })
    );
  }

  getChapterList(novelPublicId: string): Observable<Chapter[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    });

    const url = `${this.baseUrl}/api/chapter/get-chapter-list?novelPublicId=${novelPublicId}`;
    return this.http.get<Chapter[]>(url, { headers }).pipe(
      tap((data) => {}),
      catchError((error) => {
        console.error('Error fetching novel details:', error);
        return throwError(() => new Error('Failed to fetch novel details'));
      })
    );
  }
}
