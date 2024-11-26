import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-novelcard',
  standalone: true,
  imports: [],
  templateUrl: './novelcard.component.html',
  styleUrl: './novelcard.component.scss'
})
export class NovelcardComponent {
  @Input() novel: any = {
    publicId:'',
    title: '',
    rank: 0,
    chapters: 0,
    rating: 0,
    imageUrl: '',
  };
}
