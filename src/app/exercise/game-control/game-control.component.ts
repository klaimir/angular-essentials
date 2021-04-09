import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();

  counter: number = 0;
  refInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  onClickStart() {
    if(this.refInterval) {
      alert('El juego ya ha comenzado');
    } else {
      this.refInterval = setInterval(() => {
        this.counter++;
        this.gameStarted.emit(this.counter);
      }, 1000);
    }
  }

  onClickStop() {
    clearInterval(this.refInterval);
  }

}
