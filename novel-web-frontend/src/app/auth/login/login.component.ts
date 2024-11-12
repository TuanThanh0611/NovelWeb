import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls:[ './login.component.scss']
})
export class LoginComponent {
  private router=inject(Router);
  constructor(auth:AuthService) {
  }
}
