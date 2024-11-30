import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NovelcardComponent} from '../../../noveldisplay/novelcard/novelcard.component';
import {CommonModule} from '@angular/common';
import {CardNovelInfo, Novel, NovelPageInfo} from '../../../admin/model/novel.model';
import {Chapter} from '../../../shared/model/chapter.model';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ChapterService} from '../../../services/chapter/chapter.service';
import {NovelService} from '../../../services/novel/novel.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    NovelcardComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  novels: CardNovelInfo[] = [];
  filteredNovels: CardNovelInfo[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private novelService: NovelService
  ) {}

  ngOnInit(): void {
    this.loadAllNovels();
  }

  loadAllNovels(): void {
    this.novelService.getAllNovel().subscribe({
      next: (data: CardNovelInfo[] | null) => {
        if (data) {
          this.novels = data;
          this.filteredNovels = [...this.novels].slice(0, 6); // Giới hạn ban đầu là 6 tiểu thuyết
        } else {
          console.error('No data received');
        }
      },
      error: (err) => {
        console.error('Error loading novel details:', err);
      }
    });
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredNovels = this.novels.filter(novel =>
      novel.title.toLowerCase().includes(term)
    ).slice(0, 6); // Giới hạn kết quả tìm kiếm là 6 tiểu thuyết
  }
}
