import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LogintypeComponent} from './auth/logintype/logintype.component';
import {LoginComponent} from './auth/login/login.component';
import {ForgetpassComponent} from './auth/forgetpass/forgetpass.component';
import {RegisterwithemailComponent} from './auth/registerwithemail/registerwithemail.component';
import {TestcardisplayComponent} from './noveldisplay/testcardisplay/testcardisplay.component';
import {AuthorRequestComponent} from './admin/author-request/author-request.component';
import {AuthorPageComponent} from './admin/author-page/author-page.component';
import {AdminDashboardComponent} from './admin/admin-dashboard/admin-dashboard.component';
import {CreateGenreComponent} from './admin/genre/create-genre/create-genre.component';
import {AdminGenresComponent} from './admin/genre/admin-genres/admin-genres.component';

import {CreateNovelComponent} from './admin/novel/create-novel/create-novel.component';
import {AdminNovelsComponent} from './admin/novel/admin-novels/admin-novels.component';


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
  { path: 'admin-novel-create', component: CreateNovelComponent },
  { path: 'admin-novel-list', component: AdminNovelsComponent },
  {
    path: 'admin/genres/list',
    component: AdminGenresComponent,

  },
  { path: 'admin-genre-create', component: CreateGenreComponent },

  {
    path: 'forgetpass',
    component: ForgetpassComponent
  },
  {
    path: 'regiswithemail',
    component: RegisterwithemailComponent
  },
  {
    path: 'testcard',
    component: TestcardisplayComponent},
  { path: 'apply-author', component: AuthorRequestComponent },
  { path: 'author-page', component: AuthorPageComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent }
];
