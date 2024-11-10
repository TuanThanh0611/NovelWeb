import { Component } from '@angular/core';
import {BannerComponent} from './banner/banner.component';
import {NewComponent} from './new/new.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    NewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
