
import {Component, OnInit} from '@angular/core';
import {ModeService} from '../../shared/mode.service';
import {NovelService} from '../../services/novel/novel.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // Đổi từ styleUrl thành styleUrls
})
export class FooterComponent implements OnInit{

  isDarkMode = false;
  constructor(private modeService: ModeService) {}



  ngOnInit(): void {

    this.modeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
      this.applyDarkModeStyles();
    });
  }

private applyDarkModeStyles() {
  const container = document.querySelector('.footer-container') as HTMLElement;
  if (this.isDarkMode) {
    container.classList.add('dark-mode');
  } else {
    container.classList.remove('dark-mode');
  }
}
}
