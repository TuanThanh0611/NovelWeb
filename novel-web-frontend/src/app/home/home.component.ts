import { Component } from '@angular/core';
import {BannerComponent} from './banner/banner.component';
import {NewComponent} from './new/new.component';
import {NovelgridComponent} from '../noveldisplay/novelgrid/novelgrid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    NewComponent,
    NovelgridComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  novels = [
    {
      publicId:'6e97df34-a574-4438-8d61-add541fa5d80',
      title: 'Cổ chân nhân',
      imageUrl: 'http://localhost:8080/images/cổ-chân-nhân.jpg',
      chapters: 50,
      rank:1,
      rating: 4.9,

    },
    {
      name: 'Shadow of the Moon',
      imageUrl: '/01704-is-it-bad-that-the-main-characters-a-roleplayer.jpg',
      chapters: 35,
      rating: 4.7,
    },
    {
      name: 'Eternal Saga',
      imageUrl: '/01701-beast-taming-starting-from-zero.jpg',
      chapters: 60,
      rating: 4.6,
    },
    {
      name: 'Chronicles of Magic',
      imageUrl: 'http://localhost:8080/images/01700-mysteries-of-immortal-puppet-master.jpg',
      chapters: 42,
      rating: 4.5,
    },

    {
      name: 'Fate’s Whisper',
      imageUrl: 'assets/images/novel5.jpg',
      chapters: 38,
      rating: 4.4,
    },
    {
      name: 'Kingdom of Ashes',
      imageUrl: 'assets/images/novel6.jpg',
      chapters: 47,
      rating: 4.3,
    },
    {
      name: 'Legends Reborn',
      imageUrl: 'assets/images/novel7.jpg',
      chapters: 55,
      rating: 4.9,
    },
    {
      name: 'Legends Reborn',
      imageUrl: 'assets/images/novel7.jpg',
      chapters: 55,
      rating: 4.9,
    },
    {
      name: 'Legends Reborn',
      imageUrl: 'assets/images/novel7.jpg',
      chapters: 55,
      rating: 4.9,
    },
    {
      name: 'Path of the Hero',
      imageUrl: 'assets/images/novel8.jpg',
      chapters: 30,
      rating: 4.2,
    },
    {
      name: 'Dragon’s Call',
      imageUrl: '/01701-beast-taming-starting-from-zero.jpg',
      chapters: 25,
      rating: 4.1,
    },
    {
      name: 'Heavenly Sword',
      imageUrl: 'assets/images/novel10.jpg',
      chapters: 40,
      rating: 4.7,
    },

  ];
}
