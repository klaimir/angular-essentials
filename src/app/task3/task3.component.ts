import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  showParagraph: boolean = false;
  counter: number = 0;
  clicks: number [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickDetail() {
    this.showParagraph = true;
    this.clicks.push(++this.counter);
  }

  getColor(click: number): string {
    return click >= 5 ? 'black' : 'white';
  }

  isWhiteColor(click: number): boolean {
    return click >= 5;
  }

}
