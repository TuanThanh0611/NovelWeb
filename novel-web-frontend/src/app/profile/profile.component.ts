import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule,CommonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user={
    id: '12345',
    username: 'john_doe',
    email: 'john.doe@example.com',
    imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    createdDate: new Date().toISOString(),
    roles: ['ADMIN', 'USER']
  };

  constructor() {}

  ngOnInit(): void {


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

  onSubmit(): void {
    // Xử lý khi người dùng nhấn nút lưu
    console.log('Thông tin người dùng đã được lưu', this.user);
  }
}
