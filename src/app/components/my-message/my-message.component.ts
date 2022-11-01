import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.css']
})
export class MyMessageComponent implements OnInit {
  @Input() author: string
  @Input() message: string

  constructor() { }

  ngOnInit(): void {
  }

}
