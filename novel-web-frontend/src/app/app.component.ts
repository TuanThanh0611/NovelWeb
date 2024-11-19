import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {CommonModule, isPlatformBrowser, NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth/service/auth.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
    FooterComponent,
    NgClass,
    FormsModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showLayout = true;
private authService=inject(AuthService);


  platformId = inject(PLATFORM_ID);


  ngOnInit() {}
    constructor(private router:Router) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Danh sách các route không cần navbar và footer
          const noLayoutRoutes = ['/login', '/regiswithemail','/admin-dashboard'];
          this.showLayout = !noLayoutRoutes.includes(event.urlAfterRedirects);
        }
      });
      if (isPlatformBrowser(this.platformId)) {
        this.authService.initAuthentication();
      }
      this.authService.connectedUserQuery = this.authService.toQueryResult();

  }
}
