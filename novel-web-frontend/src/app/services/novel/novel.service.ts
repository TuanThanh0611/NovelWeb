import { Injectable } from '@angular/core';
import {map, Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CardNovelInfo, NovelPageInfo} from '../../admin/model/novel.model';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NovelService {
  private apiUrl = 'http://localhost:8080/api/novel';  // API URL

  constructor(private http: HttpClient) {}


  getNovel(publicId: string): Observable<NovelPageInfo> {
    return this.http.get<NovelPageInfo>(`${this.apiUrl}/${publicId}`).pipe(
      tap((data) => {

        console.log('Novel data received:', data.description);  // In dữ liệu nhận được
      }),
      catchError((error) => {
        console.error('Error fetching novel details:', error);
        return throwError(() => new Error('Failed to fetch novel details'));
      })
    );
  }
  getAllNovel():Observable<CardNovelInfo[]> {
    return this.http.get<CardNovelInfo[]>(`http://localhost:8080/api/author/getalls`).pipe(
      tap((data) => {
      }),
      catchError((error) => {
        console.error('Error fetching novel details:', error);
        return throwError(() => new Error('Failed to fetch novel details'));
      })
    );
  }


  get12LatestNovels(): Observable<CardNovelInfo[]> {
    // const token = localStorage.getItem('authToken');  // Lấy token từ localStorage hoặc nguồn lưu trữ khác
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${token}` // Thêm token vào header
    // });
    return this.http.get<CardNovelInfo[]>(`${this.apiUrl}/get-12latest`).pipe(
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
