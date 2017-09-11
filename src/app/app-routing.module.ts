import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent }      from './signup.component';
import { LoginComponent }      from './login.component';
import { GameComponent }      from './game.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'sign-up',  component: SignupComponent },
  { path: 'log-in', component: LoginComponent},
  { path: 'game', component: GameComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

