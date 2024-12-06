import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';


import {List} from "postcss/lib/list";
import {BaseNovel, Novel, NovelGenre} from './model/novel.model';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environtments/environtment';

@Injectable({
  providedIn: 'root',
})
export class AdminNovelService {
  http = inject(HttpClient);

  // Tạo thể loại mới
  createGenre(category: NovelGenre): Observable<NovelGenre> {
    return this.http.post<NovelGenre>(
      `${environment.apiUrl}/api/genres`, // Kết hợp API URL với endpoint
      category
    );
  }

  // Xóa thể loại
  deleteGenre(publicId: string): Observable<string> {
    return this.http.request<string>('delete', `${environment.apiUrl}/api/genres`, {
      body: `"${publicId}"`,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Lấy danh sách thể loại
  findAllGenres(): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.apiUrl}/api/genres` // Kết hợp API URL với endpoint
    );
  }

  // Tạo tiểu thuyết mới
  createNovel(novel: BaseNovel): Observable<any> {
    const token = localStorage.getItem('authToken');

    return this.http.post<BaseNovel>(
      `${environment.apiUrl}/api/author/create-novel`, // Kết hợp API URL với endpoint
      {
        title: novel.title,
        authName: novel.authName,
        description: novel.description,
        genres: novel.genres,
        cover: novel.cover,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json', // Đảm bảo Content-Type là application/json
        }
      }
    ).pipe(
      catchError((error) => {
        console.error('Error during HTTP request:', error);
        return throwError(error);
      })
    );
  }

  // Xóa tiểu thuyết
  deleteNovel(publicId: string): Observable<string> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No authentication token found');
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    return this.http.delete<string>(`${environment.apiUrl}/api/author/${publicId}`, { headers });
  }

  // Lấy danh sách tiểu thuyết
  findAllNovels(): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${environment.apiUrl}/api/author/getalls`, { headers });
  }


}
