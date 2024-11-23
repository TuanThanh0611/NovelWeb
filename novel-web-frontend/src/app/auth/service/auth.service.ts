

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { ConnectedUser } from '../../shared/model/user.model';
import {CreateQueryResult, injectQuery} from '@tanstack/angular-query-experimental';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {firstValueFrom, Observable} from 'rxjs';
import {JwtService} from './jwt.service';
import {NavbarComponent} from '../../layout/navbar/navbar.component';
const BASE_URL = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'authToken';
  notConnected = 'NOT_CONNECTED';
  connectedUserQuery: CreateQueryResult<ConnectedUser> | undefined;


  constructor(
    private fb: FormBuilder,
    private http:HttpClient,
    private router: Router,
    private jwtService:JwtService,

    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    const introspectRequest = {
      token: `${this.jwtService.getToken()}`  // Sử dụng backticks để thực hiện interpolation
    };
    this.jwtService.introspect(introspectRequest).subscribe(isValid => {
      if (isValid) {
        console.log('Token hợp lệ');
      } else {
        this.connectedUserQuery=undefined;
      }
    });
  }
  hasAnyRoles(user: ConnectedUser, roles: Array<string> | string): boolean {
    if (!Array.isArray(roles)) {
      roles = [roles];
    }
    return user.roles ? user.roles.some((role) => roles.includes(role)) : false;
  }
  register(registerRequest: any): Observable<any> {
    return this.http.post(`${BASE_URL}/api/auth/regis`, registerRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(`${BASE_URL}/api/auth/login`, loginRequest)
  }
  logout():void{
    this.jwtService.deleteToken();
    this.connectedUserQuery=undefined;
    console.error('Logout Success');
    alert("Logout Success");

  }
  checkAuth(): boolean {
    const token = this.jwtService.getToken();
    let isAuthenticated = false;

    this.jwtService.introspect({ token }).subscribe(
      (response) => {
        isAuthenticated = response?.result?.valid ?? false;
      },
      (error) => {
        console.error('Lỗi introspect:', error);
        isAuthenticated = false;
      }
    );

    return isAuthenticated;

}
  checkLogin(): Promise<boolean> {
    return new Promise((resolve) => {
      const token = this.jwtService.getToken();

      // Gọi introspect API để xác thực token
      this.jwtService.introspect({ token }).subscribe(
        (response) => {
          resolve(response?.result?.valid ?? false); // Trả về true hoặc false dựa trên kết quả
        },
        (error) => {
          console.error('Lỗi introspect:', error);
          resolve(false); // Trả về false nếu có lỗi
        }
      );
    });
  }
  toQueryResult():CreateQueryResult<ConnectedUser>{
    return injectQuery(()=>({
      queryKey:['connected-user'],
      queryFn:()=>firstValueFrom(this.getAuthenticatedUser()),
    }));
  }
  getAuthenticatedUser(): Observable<ConnectedUser> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.jwtService.getToken()}`
    });
    return this.http.get<ConnectedUser>(`${BASE_URL}/api/auth/get-authenticated-user`, { headers });
  }
  async initAuthentication(): Promise<void> {
    const isAuthenticated = await this.checkAuth();
    if (isAuthenticated) {
      console.log('connected');
    } else {
      console.log('not connected');
    }
  }
}
