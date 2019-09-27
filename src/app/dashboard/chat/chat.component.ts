import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: '' },
    { name: 'Bob Kelso', title: '' },
    { name: 'Janitor', title: '' },
    { name: 'Perry Cox', title: '' },
    { name: 'Ben Sullivan', title: '' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
