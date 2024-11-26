import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovelService {
  private apiUrl = 'http://localhost:8080/api/novel';  // API URL

  constructor(private http: HttpClient) {}

  getNovel(publicId: string): Observable<any> {
    const token = localStorage.getItem('authToken');  // Lấy token từ localStorage hoặc nguồn lưu trữ khác
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}` // Thêm token vào header
    });
    return this.http.get(`${this.apiUrl}/${publicId}`, { headers });
  }
}
