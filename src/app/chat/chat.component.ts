import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';
import { MessageComponent } from './message/message.component';
import { Message } from '../message';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  implements OnInit {

  constructor(
    private location: Location,
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  ngOnInit() {}

  goBack(): void {
    this.authService.NonGoogleAuth();
    this.location.back();
  }
  sendMessage(mensage: string): void {
    console.log(mensage, )
    if(mensage!=""){
      const msg : Message = {
        user: this.authService.userData!.displayName!.toString(),
        fecha: new Date().toLocaleDateString(),
        text: mensage,
      }
      this.messageService.addMessage(msg)
    }
    
  }
  
  

}
