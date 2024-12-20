import {Inject, inject, Injectable, OnInit, PLATFORM_ID} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom, Observable, of } from 'rxjs';
import {ConnectedUser, ShowUser} from '../../shared/model/user.model';
import {CreateQueryResult, injectQuery} from "@tanstack/angular-query-experimental";
import {isPlatformBrowser} from "@angular/common";
import {environment} from '../../../environtments/environtment';
const BASE_URL = "http://localhost:8080";
@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private readonly tokenKey = 'authToken';
  introspectForm!: FormGroup;
  notConnected = 'NOT_CONNECTED';
  connectedUserQuery: CreateQueryResult<ConnectedUser> | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // Lưu token vào localStorage
  saveToken(token: string): void {
    if (isPlatformBrowser(this.platformId))
      localStorage.setItem(this.tokenKey, token);
    alert(token);
  }

  // Xóa token khỏi localStorage
  deleteToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Lấy token từ localStorage
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId))
      return localStorage.getItem(this.tokenKey);
    else
      return null;
  }

  // Kiểm tra tính hợp lệ của token
  introspect(introspectRequest: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${introspectRequest.token}` // Thêm Bearer Token vào header
    });

    // Sử dụng apiUrl từ environment
    return this.http.post(`${environment.apiUrl}/api/auth/token`, introspectRequest, { headers });
  }

  // Kiểm tra tính hợp lệ của token (dựa trên payload)
  public isTokenValid(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp;
      const currentTime = Math.floor(Date.now() / 1000);
      return exp > currentTime;
    } catch (error) {
      return false;
    }
  }
}
