import {Component, OnInit} from '@angular/core';
import {BannerComponent} from './banner/banner.component';
import {NewComponent} from './new/new.component';
import {NovelgridComponent} from '../noveldisplay/novelgrid/novelgrid.component';
import {NovelService} from '../services/novel/novel.service';
import {CardNovelInfo} from '../admin/model/novel.model';

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
export class HomeComponent implements OnInit{
  novels: CardNovelInfo[] = [];

  constructor(private novelService: NovelService) {}

  ngOnInit(): void {
    this.novelService.get12LatestNovels().subscribe((data:CardNovelInfo[]) => {
      this.novels = data;
    });
  }
}
