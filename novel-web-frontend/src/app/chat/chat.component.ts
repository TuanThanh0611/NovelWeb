import {Component, OnInit} from '@angular/core';
import {WebSocketService} from '../services/websocket.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

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
  messages: any[] = [];
  messageContent: string = '';
  sender: string = 'User_' + Math.floor(Math.random() * 1000);

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    // Tải tin nhắn cũ từ server
    this.webSocketService.getMessages().subscribe((data) => {
      this.messages = data;
    });

    // Kết nối WebSocket
    this.webSocketService.connect((message) => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    if (this.messageContent.trim()) {
      this.webSocketService.sendMessage({
        sender: this.sender,
        content: this.messageContent,
      });
      this.messageContent = '';
    }
  }
}
