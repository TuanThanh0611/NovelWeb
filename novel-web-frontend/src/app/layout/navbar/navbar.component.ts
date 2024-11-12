import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { ClickOutside } from 'ngxtension/click-outside';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass, RouterLink, NgOptimizedImage,ClickOutside,NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  isDarkMode = false;
  private router = inject(Router);
  private navbarS: HTMLElement | null = null;

  ngOnInit() {
    // Lấy phần tử .navbar-container trong ngOnInit
    this.navbarS = document.querySelector('.navbar-container');

    // Kiểm tra và áp dụng chế độ dark mode nếu cần
    if (localStorage.getItem('mode') === 'dark') {
      document.body.classList.add('dark-mode');
      this.navbarS?.classList.add('navbar-dark');
      this.isDarkMode = true;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logintype(): void {
    this.router.navigate(['/logintype']);
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
    this.navbarS?.classList.toggle('navbar-dark'); // Thay đổi lớp dark mode cho navbar

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
}
