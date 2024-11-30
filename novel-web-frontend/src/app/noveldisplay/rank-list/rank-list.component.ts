import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {NovelcardComponent} from '../novelcard/novelcard.component';

@Component({
  selector: 'app-rank-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NovelcardComponent],
  templateUrl: './rank-list.component.html',
  styleUrl: './rank-list.component.scss'
})
export class RankListComponent implements OnInit {
  mostRead = [
    { title: 'Shadow Slave', monthlyViews: '10.2M', cover:'cổ-chân-nhân.jpg', publicId: '38098618-bd25-45d4-a528-a7eed12ed6eb' },
    { title: 'My Vampire System', monthlyViews: '2.87M', totalFavorites: '21K',publicId: '38098618-bd25-45d4-a528-a7eed12ed6eb' },
    // Thêm dữ liệu khác...
  ];

  newTrends = [
    { title: 'A Depressed Kendo Player...', comments: 579, reviews: 46,publicId: '38098618-bd25-45d4-a528-a7eed12ed6eb' },
    { title: 'Genetic Ascension', comments: 697, reviews: 34,publicId: '38098618-bd25-45d4-a528-a7eed12ed6eb' },
    // Thêm dữ liệu khác...
  ];

  userRated = [
    { title: 'The Perfect Run', rating: 5.0, reviews: 291, publicId: '38098618-bd25-45d4-a528-a7eed12ed6eb'},
    { title: 'Mother of Learning', rating: 4.9, reviews: 278, publicId: '38098618-bd25-45d4-a528-a7eed12ed6eb' },
    // Thêm dữ liệu khác...
  ];

  constructor() {}

  ngOnInit(): void {}
}
