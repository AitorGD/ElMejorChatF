import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { IonicModule } from '@ionic/angular';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    IonicModule

  ]
})
export class ChatModule { }
