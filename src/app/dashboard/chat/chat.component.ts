import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatShowcaseService } from '../shared/services/chat-showcase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent {
  
  

  users: Observable<any[]>;
 // messages: any[] = [];
 messages:Observable<any[]>;
  content:string;
  constructor(private afs: AngularFirestore,protected chatShowcaseService:ChatShowcaseService) {
    this.users = afs.collection('users').valueChanges();
    //this.messages = this.chatShowcaseService.loadMessages();
    this.messages = afs.collection('chats').valueChanges();

  }
  
 
  /*sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });
    

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    const botReply = this.chatShowcaseService.reply(event.message);
    if (botReply) {
      setTimeout(() => { this.messages.push(botReply) }, 500);
    }
  }*/
  /*addPost(content,date) {
    const data = {
      
      content,
      date:new Date()
      
    };
    return this.afs.collection('chats').add({'content': data.content,'date': data.date});
    
  }*/
  
  addPost(event:any) {
    const user = JSON.parse(localStorage.getItem('user'));
    
    return this.afs.collection('chats').add({'content': event.message,'date': Date.now(),'avatar':user.photoURL,'uid':user.uid });
    
  }
}

  
  
  

