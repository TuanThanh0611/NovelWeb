import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { ClickOutside } from 'ngxtension/click-outside';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {AuthService} from '../../auth/service/auth.service';
import {injectQueryParams} from 'ngxtension/inject-query-params';
import {TestService} from '../../auth/service/test.service';
import {JwtService} from '../../auth/service/jwt.service';
import {ConnectedUser} from '../../shared/model/user.model';
import {Observable} from 'rxjs';
import {ModeService} from '../../shared/mode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass, RouterLink, NgOptimizedImage, ClickOutside, NgIf, FaIconComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  isDarkMode = false;
  private router = inject(Router);
  authService=inject(AuthService);
  testService=inject(TestService);
  jwtService=inject(JwtService);
  private navbarS: HTMLElement | null = null;
  private menu:HTMLElement|null=null;
  isUserMenuOpen: boolean = false;
  isOptionMenuOpen:boolean=false;
  userInfo: ConnectedUser | undefined;
  connectedUser$: Observable<ConnectedUser> | undefined;
  private modeService = inject(ModeService);



  constructor() {

  }
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  toggleOptionMenu(){
    this.isOptionMenuOpen=!this.isOptionMenuOpen;
  }
  isAdmin(): boolean {
    // return this.userInfo.role === 'admin';
    return true;
  }




  ngOnInit() {
    // Lấy phần tử .navbar-container trong ngOnInit
    this.navbarS = document.querySelector('.navbar-container');


    // Kiểm tra và áp dụng chế độ dark mode nếu cần
    if (localStorage.getItem('mode') === 'dark') {
      document.body.classList.add('dark-mode');
      this.navbarS?.classList.add('navbar-dark');
      this.isDarkMode = true;
    }
    this.connectedUser$ = this.authService.getAuthenticatedUser();
    this.isDarkMode = this.modeService.getDarkMode();

    // Subscribe để gán thông tin người dùng vào form
    this.connectedUser$.subscribe(
      (user: ConnectedUser) => {
        this.userInfo = user;
      },
      (error) => {
        console.error('Error fetching user information:', error);
      }
    );


  }

  isConnected(): boolean {
    const token = this.jwtService.getToken();
    return token !== null ;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  logout(){
    this.jwtService.deleteToken();
    alert("Logout success");
  }

  logintype(): void {
    this.router.navigate(['/logintype']);
  }
  test():void{
    this.testService.okok();
  }
  notest():void{
    this.testService.notgood();
}

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
    this.navbarS?.classList.toggle('navbar-dark'); // Thay đổi lớp dark mode cho navbar
    this.modeService.setDarkMode(this.isDarkMode);

    // Lưu chế độ vào localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'dark');
    } else {
      localStorage.setItem('mode', 'light');
    }
  }

  closeDropDownMenu() {
    const bodyElement = document.activeElement as HTMLBodyElement;
    if (bodyElement) {
      bodyElement.blur();
    }
  }

  closeMenu(menu: HTMLDetailsElement) {
    menu.removeAttribute('open');
  }
  navigateToAuthorPage(): void {
    if (this.userInfo?.roles.includes('author')) {
      // Nếu có vai trò 'author', điều hướng đến /author-page
      this.router.navigate(['/author-page']);
    } else {
      // Nếu không, điều hướng đến /apply-author
      this.router.navigate(['/apply-author']);
    }
  }
}
