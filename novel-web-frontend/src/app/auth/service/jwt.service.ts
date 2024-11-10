import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of,tap} from 'rxjs';
import {ConnectedUser} from "../../shared/model/user.model";
import {AuthService} from './auth.service';


const BASE_URL = ["http://localhost:8080/"]

@Injectable({
    providedIn: 'root'
})
export class JwtService {
    private readonly accessTokenKey = 'access_token';
    private readonly refreshTokenKey = 'refresh_token';

    constructor(private http: HttpClient,private authService:AuthService) { }


    getAccessToken(): string | null {
        return localStorage.getItem(this.accessTokenKey);
    }

    getRefreshToken(): string | null {
        return localStorage.getItem(this.refreshTokenKey);
    }

    refreshAccessToken(): Observable<any> {
        const refreshToken = this.getRefreshToken();
        return this.http.post<any>('/api/auth/refresh-token', { refreshToken }).pipe(
            tap(response => {
                if (response.token) {
                    localStorage.setItem(this.accessTokenKey, response.token);
                }
            })
        );
    }



    register(signRequest: any): Observable<any> {
        return this.http.post('http://localhost:8080/api/auth/regis', signRequest)
    }

    signin(signinRequest: any): Observable<any> {
        return this.http.post('http://localhost:8080/api/auth/signin', signinRequest)
    }
    introspect(introspectRequest:any):Observable<any>{
        return this.http.post('http://localhost:8080/api/auth/token', introspectRequest)
    }
    updateUser(userUpdateRequest: any): Observable<any> {
        const headers=new HttpHeaders(
            {
                'Authorization': `Bearer ${this.authService.getToken()}`,
                'Content-Type': 'application/json'
            }
        )
        return this.http.put('http://localhost:8080/api/auth/update', userUpdateRequest,{headers});
    }

    updatePass(userUpdatePassRequest: any): Observable<any> {
        const headers=new HttpHeaders(
            {
                'Authorization': `Bearer ${this.authService.getToken()}`,
                'Content-Type': 'application/json'
            }
        )
        return this.http.put('http://localhost:8080/api/auth/uppass', userUpdatePassRequest,{headers});
    }

    hello(): Observable<any> {
        const headers = this.createAuhtorizationHeader();
        // Kiểm tra xem headers có tồn tại không
        if (headers) {
            return this.http.get(BASE_URL + 'api/hello', { headers });
        } else {
            console.error("JWT token not found, unable to call /api/hello");
            return of({ error: 'No JWT token found' }); // Trả về observable rỗng hoặc thông báo lỗi
        }
    }

    private createAuhtorizationHeader() {
        const jwtToken = localStorage.getItem('jwt');
        if (jwtToken) {
            console.log("JWT token found in local storage", jwtToken);
            return new HttpHeaders().set(
                "Authorization", "Bearer " + jwtToken
            )
        } else {
            console.log("JWT token not found in local storage");
        }
        return undefined;
    }

}
