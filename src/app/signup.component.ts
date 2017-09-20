import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Player } from './player';
import {passBoolean} from "protractor/built/util";


@Component ({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.css' ]
})
export class SignupComponent implements OnInit {

  languages = ['Hebrew', 'English', 'Spanish'];
  player = new Player;
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'name': new FormControl(this.player.username, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl(this.player.password, Validators.required),
      'password2': new FormControl('', Validators.required),
      'language': new FormControl(this.player.language, Validators.required)
    });
  }

  get name() { return this.signupForm.get('name'); }
  get password() { return this.signupForm.get('password'); }
  get language() { return this.signupForm.get('language'); }
  get passwordsMatch () {
    if (this.signupForm.get('password') == this.signupForm.get('password2'))
      return true;
    return false;
  }
}


//
//   setUsername(username: string) {
//     this.player.username = username;
// }
//   gotoDetail(): void {
//     this.router.navigate(['/sign-up']);
//   }

