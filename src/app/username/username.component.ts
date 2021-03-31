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
    this.allowReset = (<HTMLInputElement>event.target).value ? true : false;
  }

  onResetClick() {
    this.username = '';
    this.allowReset = false;
  }

}
