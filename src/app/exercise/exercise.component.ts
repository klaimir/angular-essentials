import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  oddList: number [] = [];
  evenList: number [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onGameStarted(counter: number) {
    console.log('onGameStarted', counter);
    if(counter%2 !== 0) {
      this.oddList.push(counter);
    } else {
      this.evenList.push(counter);
    }
  }

}
