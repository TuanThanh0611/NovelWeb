import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {WebSocketService} from '../services/websocket.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ConnectedUser} from '../shared/model/user.model';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/service/auth.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,CommonModule,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;
  authService=inject(AuthService);
  userInfo: ConnectedUser | undefined;
  connectedUser$: Observable<ConnectedUser> | undefined;
  messageContent: string = '';
  sender!: string ;
  messages = [
    {
      sender: 'Admin',
      content: 'Chào mọi người! Hãy cùng nhau trao đổi văn minh, lịch sự nhé!',
      timestamp: new Date()
    },
    // Các tin nhắn khác sẽ được thêm vào đây
  ];


  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    // Tải tin nhắn cũ từ server
    // Kết nối WebSocket
    this.webSocketService.connect((message) => {
      this.messages.push(message);
      this.scrollToBottom();
    });

    this.connectedUser$ = this.authService.getAuthenticatedUser();

    // Subscribe để gán thông tin người dùng vào form
    this.connectedUser$.subscribe(
      (user: ConnectedUser) => {
        this.userInfo = user;
        this.sender= this.userInfo?.username || 'Anonymous';
      },
      (error) => {
        console.error('Error fetching user information:', error);
      }
    );

  }
  scrollToBottom(): void {
    setTimeout(() => {
      if (this.messagesContainer) {
        const container = this.messagesContainer.nativeElement;
        container.scrollTop = container.scrollHeight;
      }
    });
  }

  onScroll(): void {
    const container = this.messagesContainer.nativeElement;

  }
  sendMessage(): void {
    if (this.messageContent.trim()) {
      this.webSocketService.sendMessage({
        sender: this.sender,
        content: this.messageContent,
        timestamp: new Date(),
      });
      this.messageContent = '';
    }
  }
}
