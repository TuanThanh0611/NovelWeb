import {inject, Injectable} from '@angular/core';
import { Client, IFrame, IMessage, IStompSocket } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import {HttpClient, HttpHeaders} from '@angular/common/http'; // Import đúng cách

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private client: Client;
  private http=inject(HttpClient);

  constructor() {
    this.client = new Client();
    this.configureClient();
  }

  private configureClient(): void {
    // Ép kiểu SockJS trả về IStompSocket
    this.client.webSocketFactory = (): IStompSocket =>
      new SockJS('/chat') as unknown as IStompSocket;

    this.client.onConnect = (frame: IFrame) => {
      console.log('Connected to WebSocket:', frame);
    };

    this.client.onDisconnect = () => {
      console.log('Disconnected from WebSocket');
    };

    this.client.onStompError = (error: IFrame) => {
      console.error('WebSocket STOMP error:', error.headers['message']);
    };

    this.client.onWebSocketError = (event: Event) => {
      console.error('WebSocket error:', event);
    };
  }

  connect(onMessage: (message: any) => void): void {
    this.client.onConnect = () => {
      console.log('WebSocket connection established');
      this.client.subscribe('/topic/messages', (message: IMessage) => {
        try {
          onMessage(JSON.parse(message.body));
        } catch (error) {
          console.error('Error parsing message body:', error);
        }
      });
    };

    this.client.activate();
  }

  sendMessage(message: any): void {
    if (this.client.active) {
      this.client.publish({
        destination: '/app/sendMessage',
        body: JSON.stringify(message),
      });
    } else {
      console.warn('Cannot send message: WebSocket is not active');
    }
  }
  getMessages() {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any[]>('http://localhost:8080/api/messages', { headers });
  }

  disconnect(): void {
    if (this.client.active) {
      this.client.deactivate();
      console.log('WebSocket connection deactivated');
    } else {
      console.warn('WebSocket is already inactive');
    }
  }
}
