

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { ConnectedUser } from '../../shared/model/user.model';
import {CreateQueryResult, injectQuery} from '@tanstack/angular-query-experimental';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {firstValueFrom, map, Observable, of} from 'rxjs';
import {JwtService} from './jwt.service';
import {NavbarComponent} from '../../layout/navbar/navbar.component';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environtments/environtment';
const BASE_URL = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'authToken';
  notConnected = 'NOT_CONNECTED';
  connectedUserQuery: CreateQueryResult<ConnectedUser> | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtService: JwtService
  ) {
    this.initAuthentication();
  }
  hasAnyRoles(user: ConnectedUser, roles: Array<string> | string): boolean {
    if (!Array.isArray(roles)) {
      roles = [roles];
    }
    return user.roles ? user.roles.some((role) => roles.includes(role)) : false;
  }
  toQueryResult(): CreateQueryResult<ConnectedUser> {
    return injectQuery(() => ({
      queryKey: ['connected-user'],
      queryFn: () => firstValueFrom(this.getAuthenticatedUser()),
    }));
  }

  // Đăng ký người dùng mới
  register(registerRequest: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/auth/regis`, registerRequest);  // Sử dụng apiUrl từ environment
  }

  // Đăng nhập
  login(loginRequest: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/auth/login`, loginRequest);  // Sử dụng apiUrl từ environment
  }

  // Đăng xuất
  logout(): void {
    this.jwtService.deleteToken();
    this.connectedUserQuery = undefined;
    console.error('Logout Success');
    alert("Logout Success");
    this.router.navigate(['/login']);  // Có thể điều hướng về trang đăng nhập
  }

  // Kiểm tra tính hợp lệ của token
  checkAuth(): Observable<boolean> {
    const token = this.jwtService.getToken();
    return this.jwtService.introspect({ token }).pipe(
      map((response) => response?.result?.valid ?? false),
      catchError((error) => {
        console.error('Lỗi introspect:', error);
        return of(false);  // Trả về false nếu có lỗi
      })
    );
  }

  // Kiểm tra trạng thái đăng nhập
  checkLogin(): Observable<boolean> {
    return this.checkAuth();
  }

  // Lấy thông tin người dùng đã xác thực
  getAuthenticatedUser(): Observable<ConnectedUser> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.jwtService.getToken()}`
    });
    return this.http.get<ConnectedUser>(`${environment.apiUrl}/api/auth/get-authenticated-user`, { headers });  // Sử dụng apiUrl từ environment
  }

  // Khởi tạo xác thực và kiểm tra trạng thái đăng nhập
  async initAuthentication(): Promise<void> {
    const isAuthenticated = await this.checkLogin().toPromise();
    if (isAuthenticated) {
      console.log('Connected');
    } else {
      console.log('Not connected');
    }
  }
}
