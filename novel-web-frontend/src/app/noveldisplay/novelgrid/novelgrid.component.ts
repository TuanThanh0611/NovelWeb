import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NovelcardComponent} from '../novelcard/novelcard.component';
import {CommonModule} from '@angular/common';
import {ModeService} from '../../shared/mode.service';
import {HomeComponent} from '../../home/home.component';
import {CardNovelInfo} from '../../admin/model/novel.model';
import {NovelService} from '../../services/novel/novel.service';

@Component({
  selector: 'app-novelgrid',
  standalone: true,
  imports: [
    RouterLink,
    NovelcardComponent,CommonModule
  ],
  templateUrl: './novelgrid.component.html',
  styleUrl: './novelgrid.component.scss'
})
export class NovelgridComponent implements OnInit{
  @Input() novels: CardNovelInfo[] = [];
  isDarkMode: boolean = false;

  constructor(private modeService: ModeService,private novelService:NovelService) {}

  ngOnInit(): void {
    this.novelService.get12LatestNovels().subscribe((data: CardNovelInfo[]) => {
      this.novels = data;
    });

    this.modeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      this.applyDarkModeStyles();
    });
  }
  private applyDarkModeStyles() {
    const container = document.querySelector('.novel-grid-container') as HTMLElement;
    if (this.isDarkMode) {
      container.classList.add('dark-mode');
    } else {
      container.classList.remove('dark-mode');
    }
  }
}
