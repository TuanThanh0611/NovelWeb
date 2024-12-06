import {Component, inject, OnInit} from '@angular/core';
import {NovelgridComponent} from '../../noveldisplay/novelgrid/novelgrid.component';
import {CardNovelInfo} from '../../admin/model/novel.model';
import {NovelService} from '../../services/novel/novel.service';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/service/auth.service';
import {TestService} from '../../auth/service/test.service';
import {JwtService} from '../../auth/service/jwt.service';
import {ConnectedUser} from '../../shared/model/user.model';
import {Observable} from 'rxjs';
import {ModeService} from '../../shared/mode.service';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [
    NovelgridComponent,
    NgClass
  ],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent implements OnInit{
  novels: CardNovelInfo[] = [];
  selectedMode: string = 'rank';  // Mặc định chọn chế độ 'rank'



  isDarkMode = false;
  authService=inject(AuthService)
  private rankingS: HTMLElement | null = null;
  connectedUser$: Observable<ConnectedUser> | undefined;
  private modeService = inject(ModeService);

  constructor(private novelService: NovelService) {}

  ngOnInit(): void {
      // Lấy phần tử .navbar-container trong ngOnInit
      this.rankingS = document.querySelector('.content-wrapper');


      // Kiểm tra và áp dụng chế độ dark mode nếu cần
      if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark-mode');
        this.rankingS?.classList.add('rank-dark');
        this.isDarkMode = true;
      }
      this.connectedUser$ = this.authService.getAuthenticatedUser();
      this.isDarkMode = this.modeService.getDarkMode();
    this.loadNovels();
  }

  // Hàm xử lý thay đổi chế độ
  setMode(mode: string): void {
    this.selectedMode = mode;
    this.loadNovels();  // Khi chế độ thay đổi, tải lại danh sách novels
  }

  // Hàm để tải dữ liệu tùy theo chế độ
  loadNovels(): void {
    switch (this.selectedMode) {
      // case 'rank':
      //   this.novelService.getRankNovels().subscribe((data: CardNovelInfo[]) => {
      //     this.novels = data;
      //   });
      //   break;
      case 'rating':
        this.novelService.get12RatingNovels().subscribe((data: CardNovelInfo[]) => {
          this.novels = data;
        });
        break;
      case 'reads':
        this.novelService.get12ViewsNovels().subscribe((data: CardNovelInfo[]) => {
          this.novels = data;
        });
        break;
      case 'chapter-number':
        this.novelService.get12ChapterNumberNovels().subscribe((data: CardNovelInfo[]) => {
          this.novels = data;
        });
        break;
      // case 'comments':
      //   this.novelService.getCommentsNovels().subscribe((data: CardNovelInfo[]) => {
      //     this.novels = data;
      //   });
      //   break;
      default:
        this.novelService.get12ViewsNovels().subscribe((data: CardNovelInfo[]) => {
          this.novels = data;
        });
        break;
    }
  }
}
