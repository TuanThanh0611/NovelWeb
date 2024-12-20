import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthService} from '../service/auth.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environtments/environtment';
@Component({
  selector: 'app-registerwithemail',
  standalone: true,
  imports: [
    ReactiveFormsModule,HttpClientModule
  ],
  providers:[AuthService],
  templateUrl: './registerwithemail.component.html',
  styleUrl: './registerwithemail.component.scss'
})
 export class RegisterwithemailComponent implements OnInit{
  private http = inject(HttpClient);
  isPasswordVisible = false;
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  // Sử dụng URL từ environment
  register(registerRequest: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/auth/regis`, registerRequest);
  }

  submitForm() {
    if (this.registerForm?.valid) {
      console.log(this.registerForm.value);
      this.register(this.registerForm.value).subscribe(
        (response) => {
          if (response?.result?.id != null) {
            alert("Registration successful!");
            this.router.navigateByUrl("/login");
          } else {
            alert("Registration failed. Please try again.");
          }
        },
        (error) => {
          console.error('Error during registration:', error);
          alert("An error occurred during registration. Please try again later.");
        }
      );
    } else {
      alert("Form is invalid. Please check the inputs.");
    }
  }}
