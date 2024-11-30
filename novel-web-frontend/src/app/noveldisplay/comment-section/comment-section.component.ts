import { Component, OnInit } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    CommonModule
  ],
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  comments: Array<{ userName: string; content: string; date: Date }> = [];
  newComment: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.fetchComments();
  }

  fetchComments(): void {
    this.isLoading = true;
    this.errorMessage = null;

    // Giả lập fetch API
    setTimeout(() => {
      // Thay bằng API thực tế
      this.comments = [
        { userName: 'Admin', content: 'Novel rất hay!', date: new Date() },
        { userName: 'Tuan Thanh', content: 'Cảm ơn bạn đã đã xem.', date: new Date() },
      ];
      this.isLoading = false;
    }, 1000);
  }

  addComment(): void {
    if (this.newComment.trim()) {
      this.comments.unshift({
        userName: 'Guest', // Tạm thời để là Guest
        content: this.newComment.trim(),
        date: new Date(),
      });
      this.newComment = '';
    }
  }
}
