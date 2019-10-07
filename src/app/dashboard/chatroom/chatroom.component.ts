import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
  users: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.users = afs.collection('users').valueChanges();
   }
  

  ngOnInit() {
  }

}
