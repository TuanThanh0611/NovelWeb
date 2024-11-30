import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  closeBanner() {
    const banner = document.querySelector('.event-banner');
    if (banner) {
      // Ép kiểu 'banner' thành 'HTMLElement' để có thể truy cập vào thuộc tính 'style'
      (banner as HTMLElement).style.display = 'none'; // Ẩn banner khi người dùng đóng
    }
  }
}
