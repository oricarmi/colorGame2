import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Player } from './player';
import { GameService }         from './colorGame.service';

@Component ({
  selector: 'log-in',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LoginComponent {

  constructor(
    private GameService: GameService,
    private router: Router) { }

  player: Player;

}
