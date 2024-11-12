import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LogintypeComponent} from './auth/logintype/logintype.component';
import {LoginComponent} from './auth/login/login.component';
import {ForgetpassComponent} from './auth/forgetpass/forgetpass.component';
import {RegisterwithemailComponent} from './auth/registerwithemail/registerwithemail.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'logintype',
    component: LogintypeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'forgetpass',
    component: ForgetpassComponent
  },
  {
    path: 'regiswithemail',
    component: RegisterwithemailComponent
  },
];
