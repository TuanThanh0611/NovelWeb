import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket | undefined;

  constructor() { }

  connect(onMessage: (message: any) => void) {
    this.socket = new WebSocket('ws://localhost:8080/chat');

    this.socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data); // Parse dữ liệu JSON
      onMessage(message); // Gọi callback để xử lý tin nhắn
    };

    this.socket.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };
  }

  sendMessage(message: any) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message)); // Gửi tin nhắn dưới dạng JSON
    }
  }

  close() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
