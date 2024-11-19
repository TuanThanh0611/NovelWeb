import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NovelcardComponent} from '../novelcard/novelcard.component';
import {CommonModule} from '@angular/common';
import {ModeService} from '../../shared/mode.service';

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
  @Input() novels: any[] = [];
  isDarkMode: boolean = false;

  constructor(private modeService: ModeService) {}

  ngOnInit(): void {
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
