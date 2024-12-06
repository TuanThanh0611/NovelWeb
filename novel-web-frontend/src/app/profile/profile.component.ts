import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BaseUser, ConnectedUser} from '../shared/model/user.model';
import {Chapter} from '../shared/model/chapter.model';
import {AuthService} from '../auth/service/auth.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule, CommonModule, RouterLink,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  user!:ConnectedUser;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
this.loadUser();

  }
  loadUser(): void {
    this.authService.getAuthenticatedUser().subscribe({
      next: (data: ConnectedUser | null) => {
        if (data) {
          this.user = data;
        } else {
          console.error('No data received');
          // Xử lý khi không có dữ liệu (có thể hiển thị thông báo lỗi cho người dùng)
        }
      },
      error: (err) => {
        console.error('Error loading novel details:', err);
        // Xử lý khi có lỗi trong quá trình gọi API
      }
    });
  }
  onAvatarChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.imageUrl = e.target.result; // Cập nhật URL ảnh mới
      };
      reader.readAsDataURL(input.files[0]); // Đọc file ảnh được tải lên
    }
  }
  logout(): void {
    this.authService.logout();
  }

  onSubmit(): void {
    // Xử lý khi người dùng nhấn nút lưu
    console.log('Thông tin người dùng đã được lưu', this.user);
  }
}
