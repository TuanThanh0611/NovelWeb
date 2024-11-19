import { Component } from '@angular/core';
import {NovelcardComponent} from '../novelcard/novelcard.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-testcardisplay',
  standalone: true,
  imports: [NovelcardComponent,CommonModule],
  templateUrl: './testcardisplay.component.html',
  styleUrl: './testcardisplay.component.scss'
})
export class TestcardisplayComponent {
  novels = [
    {
      name: 'Is It Bad That the Main Character...',
      rank: 1304,
      chapters: 112,
      rating: 4.0,
      imageUrl: '/01704-is-it-bad-that-the-main-characters-a-roleplayer.jpg',
    },
    {
      name: 'The Return of the Legendary All...',
      rank: 1303,
      chapters: 216,
      rating: 0.0,
      imageUrl: '/01703-the-return-of-the-legendary-all-master.jpg',
    },
    {
      name: 'Otherworld TRPG Game Master',
      rank: 1302,
      chapters: 143,
      rating: 4.6,
      imageUrl: 'path-to-image-3.jpg',
    },
    // Thêm các novel khác...
  ];
}
