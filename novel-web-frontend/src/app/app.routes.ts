import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LogintypeComponent} from './auth/logintype/logintype.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
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
    path: 'register',
    component: RegisterComponent
  },
];
