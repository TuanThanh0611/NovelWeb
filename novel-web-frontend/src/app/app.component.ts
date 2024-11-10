import {Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './layout/navbar/navbar.component';
import {FooterComponent} from './layout/footer/footer.component';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';

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


  platformId = inject(PLATFORM_ID);

  constructor() {

  }

  ngOnInit(): void {

  }



}
