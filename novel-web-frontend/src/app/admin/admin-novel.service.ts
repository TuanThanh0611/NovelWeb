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

  createNovel(novel: BaseNovel): Observable<any> {
    const token = localStorage.getItem('authToken');

    return this.http.post<Novel>(
      `http://localhost:8080/api/author/create-novel`,
      {
        title: novel.title,
        authName: novel.authName,
        description: novel.description,
        genres: novel.genres,  // Mảng genres dưới dạng JSON
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



  deleteNovel(publicId: string): Observable<string> {
    return this.http.request<string>('delete', `http://localhost:8080/api/author`, {
      body: `"${publicId}"`, // Bao publicId trong dấu ngoặc kép
      headers: { 'Content-Type': 'application/json' }});
  }

  findAllNovels(): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`http://localhost:8080/api/author/getalls`,{ headers });
  }



}
