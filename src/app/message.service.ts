import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private mensajesDB: AngularFireList<Message>;

  constructor(private db: AngularFireDatabase) {
    this.mensajesDB = this.db.list('/messages', (ref) =>
      ref.orderByChild('date')
    );
  }
  addMessage(mensage: Message): void {
    this.mensajesDB.push(mensage);
  }
  getMensajes(): Observable<Message[]> {
    return this.mensajesDB
      .snapshotChanges()
      .pipe(
        map((changes) => changes.map((c) => this.getUserFromPayload(c.payload)))
      );
  }

  getUserFromPayload(payload: any): Message {
    return {
      $key: payload.key,

      ...payload.val(),
    };
  }
}
