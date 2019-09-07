import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-select-user-level',
  templateUrl: './select-user-level.component.html',
  styleUrls: ['./select-user-level.component.scss']
})
export class SelectUserLevelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.document.body.style.backgroundImage = 'url("../../assets/login-background.jpg")';
    window.document.body.style.backgroundPosition = 'center center';
    window.document.body.style.backgroundSize = 'cover';
    window.document.body.style.backgroundRepeat = 'fixed';
    window.document.body.style.backgroundAttachment = 'fixed';
    const layouts = Array.from(window.document.getElementsByClassName('layout'));
    for (const layout of layouts) {
      const slide = layout as HTMLElement;
      slide.style.background = 'transparent';
      slide.style.minHeight = '20em';
    }
  }

}