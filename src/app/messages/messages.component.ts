import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessagesService) { }

  ngOnInit() {
  }

}
