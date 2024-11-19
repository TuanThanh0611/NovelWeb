import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(
    localStorage.getItem('mode') === 'dark' // Kiểm tra giá trị từ localStorage
  );

  // Observable để các component có thể subscribe
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  // Thay đổi trạng thái dark mode
  setDarkMode(isDarkMode: boolean) {
    this.isDarkModeSubject.next(isDarkMode);
    localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
  }

  // Lấy trạng thái hiện tại
  getDarkMode(): boolean {
    return this.isDarkModeSubject.value;
  }

  constructor() { }
}
