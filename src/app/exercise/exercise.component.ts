import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  numbers: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  onGameStarted(counter: number) {
    console.log('onGameStarted', counter);
    this.numbers.push(counter);
  }
}
