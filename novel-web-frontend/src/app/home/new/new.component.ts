import { Component } from '@angular/core';
import {NovelcardComponent} from '../../noveldisplay/novelcard/novelcard.component';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {NovelgridComponent} from '../../noveldisplay/novelgrid/novelgrid.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [NovelcardComponent, CommonModule, RouterLink,NovelgridComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  novels = [
    {
      name: 'The Rising Dawn',
      imageUrl: '/01704-is-it-bad-that-the-main-characters-a-roleplayer.jpg',
      chapters: 50,
      rank:1234,
      rating: 4.8,
      publicId:'/neme'
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
      imageUrl: '/01704-is-it-bad-that-the-main-characters-a-roleplayer.jpg',
      chapters: 42,
      rating: 4.5,
    },
    {
      name: 'Fate’s Whisper',
      imageUrl: '/01704-is-it-bad-that-the-main-characters-a-roleplayer.jpg',
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
      imageUrl: '/01701-beast-taming-starting-from-zero.jpg',
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
      imageUrl: 'assets/images/novel9.jpg',
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
