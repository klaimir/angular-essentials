import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username: string = '';
  allowReset: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onUsernameInput(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
    this.allowReset = this.username ? true : false;
  }

  onResetClick() {
    this.username = '';
    this.allowReset = false;
  }

}
