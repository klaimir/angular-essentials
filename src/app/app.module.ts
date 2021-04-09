import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { GameControlComponent } from './exercise/game-control/game-control.component';
import { OddComponent } from './exercise/odd/odd.component';
import { EvenComponent } from './exercise/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    ExerciseComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
