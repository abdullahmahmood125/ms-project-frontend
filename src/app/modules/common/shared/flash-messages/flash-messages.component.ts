import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flash-messages',
  templateUrl: './flash-messages.component.html',
  styleUrls: ['./flash-messages.component.css']
})
export class FlashMessagesComponent implements OnInit {
  @Input() state: any;

  constructor() {
  }

  ngOnInit() {
  }

}
