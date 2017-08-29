import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import {GameService} from './colorGame.service';
import {SignupComponent} from './signup.component';
import {LoginComponent} from './login.component';
import { GameComponent} from './game.component'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    GameComponent,
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
