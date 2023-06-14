import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../../message.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Message } from '../../message';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent  implements OnInit {
  messages: Message[] = [];
  allMessage: Message[]=[];
  userAct: any = "";
  page: number = 1;
  pageSize: number = 10;
  loading: boolean = false;
  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;

  constructor(private authService: AuthService, private messageService: MessageService) {
    this.userAct = localStorage.getItem('user');
    this.userAct = this.userAct.replace(/['"]+/g, '');
  }

  ngOnInit() {
    console.log("Init");
    this.loadMessages();
    
  }

  loadMessages() {
    this.messageService.getMensajes().subscribe(m => {
      this.allMessage = m
      this.loadMessage();
    });
  }
  loadMessage(){
    if(this.messages.length != this.allMessage.length -1){
      this.loadMessageByPage(0);
    }
    else{
      this.loadMessageByPage(1);
    }
  }
  reiniciarMensajes(){
    this.messages=[];

    this.page=1;
    this.loadMessageByPage(0);
  }
  loadMessageByPage(index: number) {
    this.loading = true;
    
    const maxLength =  this.page*this.pageSize < this.allMessage.length ? this.page*this.pageSize : this.allMessage.length
    if(index == 1){
      this.messages.push(this.allMessage[this.allMessage.length-1])
    }else{
      for(let i = (this.page-1)*this.pageSize; i<maxLength; i++){
        if(maxLength-1!=this.pageSize*this.page){
          
        }
        this.messages.push(this.allMessage[i])
      }
    }
    
    
    this.loading = false;
  }

  onScroll(event: any) {
      this.page++;
      
      setTimeout(() => {
        this.loadMessage();
        event.target.complete();
      }, 1000);
      
  }
 
  
  
  
}
