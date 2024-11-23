import { inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';


import {List} from "postcss/lib/list";
import {BaseNovel, Novel, NovelGenre} from './model/novel.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminNovelService {
  http = inject(HttpClient);

  createGenre(category: NovelGenre): Observable<NovelGenre> {
    return this.http.post<NovelGenre>(
      `http://localhost:8080/api/genres`,
      category
    );
  }

  deleteGenre(publicId: string): Observable<string> {
    return this.http.request<string>('delete', `http://localhost:8080/api/genres`, {
      body: `"${publicId}"`,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  findAllGenres(): Observable<any[]> {

    return this.http.get<any[]>(
      `http://localhost:8080/api/genres`
    );
  }

  createNovel(novel: BaseNovel, cover: File): Observable<Novel> {
    const formData = new FormData();
    const token = localStorage.getItem('authToken');

    formData.append('title', novel.title);
    formData.append('author', novel.author);
    formData.append('description', novel.description);
    formData.append('genres', JSON.stringify(novel.genres || []));
    if (cover) {
      formData.append('cover', cover);
    }
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    return this.http.post<Novel>(
      `http://localhost:8080/api/author/create-novel`,
      formData,
      { headers: { 'Authorization': `Bearer ${token}` } }
    ).pipe(
      catchError((error) => {
        console.error('Error during HTTP request:', error);
        return throwError(error);
      })
    );
  }



  deleteNovel(publicId: string): Observable<string> {
    return this.http.request<string>('delete', `http://localhost:8080/api/genres`, {
      body: `"${publicId}"`, // Bao publicId trong dấu ngoặc kép
      headers: { 'Content-Type': 'application/json' }
    });
  }

  findAllNovels(): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`http://localhost:8080/api/novel`,{ headers });
  }

  uploadPicture(formData: FormData): Observable<{ fileName: string }> {
    const url = `http://localhost:8080/api/author/upload-picture`; // Endpoint upload ảnh
    const token = localStorage.getItem('authToken');  // Lấy token từ localStorage nếu cần

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);  // Thêm Authorization header nếu cần

    // Gửi FormData chứa tệp ảnh lên backend
    return this.http.post<{ fileName: string }>(url, formData, { headers });
  }

}
