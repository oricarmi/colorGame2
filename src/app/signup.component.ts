import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Player } from './player';


@Component ({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.css' ]
})

export class SignupComponent implements OnInit {


  languages = ['Hebrew', 'English', 'Spanish'];
  player: Player;
  signupForm: FormGroup;


  ngOnInit(): void {

    this.signupForm = new FormGroup({
      'username': new FormControl(this.player.username, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl(this.player.password),
      'language': new FormControl(this.player.language, Validators.required)
    });
  }
    get username() { return this.signupForm.get('username'); }

    get password() { return this.signupForm.get('password'); }





//
//   setUsername(username: string) {
//     this.player.username = username;
// }
//   gotoDetail(): void {
//     this.router.navigate(['/sign-up']);
//   }
 }
