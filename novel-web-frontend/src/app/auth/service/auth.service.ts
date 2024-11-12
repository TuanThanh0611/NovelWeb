

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { ConnectedUser } from '../../shared/model/user.model';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import {JwtService} from './jwt.service';
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

    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  register(registerRequest: any): Observable<any> {
    return this.http.post(`${BASE_URL}/api/auth/regis`, registerRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(`${BASE_URL}/api/auth/login`, loginRequest)
  }
//   checkAuth(): boolean {
//     const token = this.jwtService.getToken();
//     if (!token || !this.jwtService.isTokenValid(token)) {
//       return false;
//     }
//
//     let isAuthenticated = false;
//
//     this.jwtService.introspect({ token }).subscribe(
//       (response) => {
//         isAuthenticated = response?.result?.valid ?? false;
//       },
//       (error) => {
//         console.error('Lỗi introspect:', error);
//         isAuthenticated = false;
//       }
//     );
//
//     return isAuthenticated;
//
// }
//   checkLogin(): Promise<boolean> {
//     return new Promise((resolve) => {
//       const token = this.jwtService.getToken();
//
//       // Gọi introspect API để xác thực token
//       this.jwtService.introspect({ token }).subscribe(
//         (response) => {
//           resolve(response?.result?.valid ?? false); // Trả về true hoặc false dựa trên kết quả
//         },
//         (error) => {
//           console.error('Lỗi introspect:', error);
//           resolve(false); // Trả về false nếu có lỗi
//         }
//       );
//     });
//   }
}
