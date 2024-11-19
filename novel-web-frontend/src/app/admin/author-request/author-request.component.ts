import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-author-request',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './author-request.component.html',
  styleUrl: './author-request.component.scss'
})
export class AuthorRequestComponent {
  formData = {
    name: '',
    email: '',
    reason: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const emailData = {
      to: 'admin@example.com', // Replace with the admin's email
      subject: 'Author Application',
      body: `
        Name: ${this.formData.name}
        Email: ${this.formData.email}
        Reason: ${this.formData.reason}
      `
    };

    // Call backend to send email
    this.http.post('/api/send-email', emailData).subscribe(
      (response) => {
        alert('Your application has been sent successfully!');
      },
      (error) => {
        alert('Failed to send application. Please try again later.');
        console.error(error);
      }
    );
  }
}
