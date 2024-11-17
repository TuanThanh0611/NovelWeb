import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {JwtService} from '../service/jwt.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls:[ './login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  isLoading = false;
  isPasswordVisible = false;

  constructor(
    private jwtService: JwtService,
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }



  submitForm() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          const isAuthenticate = response?.result?.authenticated;
          const token = response?.result?.token;
          this.isLoading = false;
          if (isAuthenticate) {
            this.jwtService.saveToken(token);
            alert("Login Success");
            this.router.navigateByUrl("/");
          } else {
            alert("Login failed");
          }
        },
        (error) => {
          this.isLoading = false;
          alert("An error occurred during login");
        }
      );
    } else {
      alert("Form is invalid");
    }
  }
}
