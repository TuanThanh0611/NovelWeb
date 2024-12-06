import { Injectable } from '@angular/core';
import {map, Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CardNovelInfo, NovelPageInfo} from '../../admin/model/novel.model';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../environtments/environtment';

@Injectable({
  providedIn: 'root'
})
export class NovelService {
  private apiUrl = environment.apiUrl;  // Lấy URL từ environment

  constructor(private http: HttpClient) {}

  getNovel(publicId: string): Observable<NovelPageInfo> {
    return this.http.get<NovelPageInfo>(`${this.apiUrl}/api/novel/${publicId}`).pipe(
      tap((data) => {
        console.log('Novel data received:', data.description);  // In dữ liệu nhận được
      }),
      catchError((error) => {
        console.error('Error fetching novel details:', error);
        return throwError(() => new Error('Failed to fetch novel details'));
      })
    );
  }

  getAllNovel(): Observable<CardNovelInfo[]> {
    return this.http.get<CardNovelInfo[]>(`${this.apiUrl}/api/author/getalls`).pipe(
      tap((data) => {}),
      catchError((error) => {
        console.error('Error fetching novel details:', error);
        return throwError(() => new Error('Failed to fetch novel details'));
      })
    );
  }

  get12LatestNovels(): Observable<CardNovelInfo[]> {
    return this.http.get<CardNovelInfo[]>(`${this.apiUrl}/api/novel/get-12latest`).pipe(
      map((novels) =>
        novels.map((novel) => ({
          publicId: novel.publicId,
          title: novel.title,
          cover: novel.cover,
          chapterNumber: novel.chapterNumber,
          ranking: novel.ranking,
          rating: novel.rating,
        }))
      )
    );
  }

  get12RatingNovels(): Observable<CardNovelInfo[]> {
    return this.http.get<CardNovelInfo[]>(`${this.apiUrl}/api/novel/get-12toprating`).pipe(
      map((novels) =>
        novels.map((novel) => ({
          publicId: novel.publicId,
          title: novel.title,
          cover: novel.cover,
          chapterNumber: novel.chapterNumber,
          ranking: novel.ranking,
          rating: novel.rating,
        }))
      )
    );
  }

  get12ViewsNovels(): Observable<CardNovelInfo[]> {
    return this.http.get<CardNovelInfo[]>(`${this.apiUrl}/api/novel/get-12topviews`).pipe(
      map((novels) =>
        novels.map((novel) => ({
          publicId: novel.publicId,
          title: novel.title,
          cover: novel.cover,
          chapterNumber: novel.chapterNumber,
          ranking: novel.ranking,
          rating: novel.rating,
        }))
      )
    );
  }

  get12ChapterNumberNovels(): Observable<CardNovelInfo[]> {
    return this.http.get<CardNovelInfo[]>(`${this.apiUrl}/api/novel/get-12topchapternumber`).pipe(
      map((novels) =>
        novels.map((novel) => ({
          publicId: novel.publicId,
          title: novel.title,
          cover: novel.cover,
          chapterNumber: novel.chapterNumber,
          ranking: novel.ranking,
          rating: novel.rating,
        }))
      )
    );
  }
}

