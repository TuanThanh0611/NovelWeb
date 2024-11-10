import {Component, EventEmitter, inject, Output} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass, RouterLink, NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showMenu = false;
  private router=inject(Router);
  @Output() themeToggle = new EventEmitter<void>();

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  onThemeToggle() {
    this.themeToggle.emit();
  }
  logintype():void{
    this.router.navigate(['/logintype']);
  }


}
