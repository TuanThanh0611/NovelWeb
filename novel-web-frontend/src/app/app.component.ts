import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {isPlatformBrowser, NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth/service/auth.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,

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
private authService=inject(AuthService);


  platformId = inject(PLATFORM_ID);


  ngOnInit() {}
    constructor() {
      if (isPlatformBrowser(this.platformId)) {
        this.authService.initAuthentication();
      }
      this.authService.connectedUserQuery = this.authService.toQueryResult();

  }




}
