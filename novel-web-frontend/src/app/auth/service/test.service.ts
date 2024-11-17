import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConnectedUser } from '../../shared/model/user.model';
import { tap } from 'rxjs/operators';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {JwtService} from "./jwt.service";

@Injectable({
  providedIn: 'root',
})
export class TestService {
  connectedUser$: Observable<ConnectedUser> | undefined;
  userf: ConnectedUser | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private jwtService: JwtService
  ) {}
  okok():void{
    this.connectedUser$ = this.authService.getAuthenticatedUser();

    // Subscribe để gán thông tin người dùng vào form
    this.authService.getAuthenticatedUser().subscribe(
      (user: ConnectedUser) => {
        this.userf = user;
        alert(this.jwtService.getToken())
      },
      (error) => {
        console.error('Error fetching user information:', error);
      }
    );
    alert(this.userf?.email)

  }
  notgood():void{
    this.connectedUser$ = this.authService.getAuthenticatedUser();

    // Subscribe để gán thông tin người dùng vào form
    this.authService.getAuthenticatedUser().subscribe(
      (user: ConnectedUser) => {
        this.userf = user;
        this.jwtService.deleteToken();
      },
      (error) => {
        console.error('Error fetching user information:', error);
      }
    );
    alert(this.userf?.email)

  }



  // hasAccess(requiredRoles: string[]): boolean {
  //     const user = this.userSubject.getValue();
  //     if (!user) {
  //         alert("User not authenticated or no roles found");
  //         return false;
  //     }
  //     return requiredRoles.some((role) => user.roles.includes(role));
  // }
}
