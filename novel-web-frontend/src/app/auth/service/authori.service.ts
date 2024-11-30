import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {BehaviorSubject, catchError, map, Observable} from 'rxjs';
import { ConnectedUser } from '../../shared/model/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  connectedUser$: Observable<ConnectedUser> | undefined;
  userf: ConnectedUser | undefined;



  constructor(private authService: AuthService) {
  }


  hasAdminAccess(): Observable<boolean> {
    this.connectedUser$ = this.authService.getAuthenticatedUser();
    return this.connectedUser$.pipe(
      map((user: ConnectedUser) => {
        this.userf = user;
        return this.userf.roles.some(role => role.toLowerCase() === "admin");
      }),
      catchError((error) => {
        console.error('Error fetching user information:', error);
        return [false];
      })
    );
  }

  hasAuthorAccess(): Observable<boolean> {
    this.connectedUser$ = this.authService.getAuthenticatedUser();
    return this.connectedUser$.pipe(
      map((user: ConnectedUser) => {
        this.userf = user;
        return this.userf.roles.some(role => role.toLowerCase() === "author");
      }),
      catchError((error) => {
        console.error('Error fetching user information:', error);
        return [false];
      })
    );
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
