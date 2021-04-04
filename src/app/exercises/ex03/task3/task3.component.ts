import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  showSecret: boolean = false;
  logs: any [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickDetail() {
    this.showSecret = !this.showSecret;
    this.logs.push(new Date());
  }

}
