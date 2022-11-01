import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { messageType } from '../../store/message/types';


@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private readonly socket: Socket;
  private readonly token: string | null;

  constructor() {
    this.token = localStorage.getItem('token');
    this.socket = io('http://localhost:3000', {
      extraHeaders: {
        Authorization: `${this.token}`,
      },
    });
  }

  public sendMessage(msg: string) {
    this.socket.emit('createMessage', { message: msg });
  }

  public getAllMessage(): Observable<messageType[]> {
    return new Observable((observer) => {
      this.socket.emit('findAllMessage', (messages: messageType[]) => {
        observer.next(messages);
      });
    });
  }

  public recMessage(): Observable<messageType> {
    return new Observable((observer) => {
      this.socket.on('recMessage', (message: messageType) => {
        console.log(message)
        observer.next(message);
      });
    });
  }
}
