import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Player } from './player';
import { GameService }         from './colorGame.service';

@Component ({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: [ './game.component.css' ]
})

export class GameComponent {

  constructor(
    private GameService: GameService,
    private router: Router) {}

  public timer: any;
  public colors = ['red', 'blue', 'green'];
  public colorText = Math.floor((Math.random() * 10) % 3);
  public colorColor = Math.floor((Math.random() * 10) % 3);
  public numCorrect = 0;
  public numTries = 0;
  public disVar = 0;
  public counter = 20;
  public txt = null;
  public color = null;
  public gameEnded = false;

  countdown(): void {
      this.counter = 20;
      window.clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.counter--;
        if (this.counter === 0) {
          window.clearInterval(this.timer);
          this.endGame(this.numTries, this.numCorrect);
        }
      }, 1000);
  }

    startGame (): void {
      this.txt = this.colors[this.colorText];
      this.color = this.colors[this.colorColor];
      this.numCorrect = 0;
      this.numTries = 0;
      this.disVar = 1;
      this.gameEnded = false;
      this.countdown();
    }

    continueGame (selection): void {

      this.numTries += 1; // add num tries every time button is clicked (function is called)
      if ( selection === this.colorColor) { // if the number sent is the same number as the color, add 1 to correct
        this.numCorrect += 1;
      }
      this.colorText = Math.floor((Math.random() * 10) % 3); // change color written
      this.colorColor = Math.floor((Math.random() * 10) % 3); // change color it is written in
      this.txt = this.colors[this.colorText]; // update text variable
      this.color = this.colors[this.colorColor]; // update color variable

    }

    endGame ( Tries , Correct ) {
      this.disVar = 0;
      this.gameEnded = true;
    }
  }
