import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environtments/environtment';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  private router = inject(Router);
  todayViews: number = 100;
  weekViews: number = 500;
  totalViews: number = 1500;
  totalUsers: number = 120;
  totalAuthors: number = 30;
  totalVisits: number = 1000;
  createForm!: FormGroup;
  loading: boolean = false;
  private apiUrl = environment.apiUrl + '/genres';  // Sử dụng apiUrl từ environment

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get name() {
    return this.createForm.get('name');
  }

  reloadData(): void {
    this.updateRanking();
    this.update12latest();
    this.updateChapterNumber();
  }

  updateRanking(): void {
    const token = localStorage.getItem('authToken');
    this.http.post(`${environment.apiUrl}/usual-update/update-ranking`, {}, {
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      observe: 'response'
    }).pipe(
      catchError(error => {
        console.error('Error updating ranking:', error);
        this.loading = false;
        return of(null);
      })
    ).subscribe(() => {
      try {
        alert('Ranking updated successfully.');
        this.router.navigate(['/admin-dashboard']);
      } catch (error) {
        console.error('Failed to parse JSON:', error);
        this.loading = false;
      }
      this.loading = false;
    });
  }

  updateChapterNumber(): void {
    const token = localStorage.getItem('authToken');
    this.http.post(`${environment.apiUrl}/usual-update/update-chapternumber`, {}, {
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      observe: 'response'
    }).pipe(
      catchError(error => {
        console.error('Error updating chapter number:', error);
        this.loading = false;
        return of(null);
      })
    ).subscribe((response: any) => {
      try {
        const responseData = JSON.parse(response.body);
        alert('Chapter number updated successfully.');
        this.router.navigate(['/admin-dashboard']);
      } catch (error) {
        console.error('Failed to parse JSON:', error);
        this.loading = false;
      }
      this.loading = false;
    });
  }

  update12latest(): void {
    const token = localStorage.getItem('authToken');
    this.http.post(`${environment.apiUrl}/api/novel/update-latest`, {}, {
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
      observe: 'response'
    }).pipe(
      catchError(error => {
        console.error('Error updating latest novels:', error);
        this.loading = false;
        return of(null);
      })
    ).subscribe((response: any) => {
      try {
        const responseData = JSON.parse(response.body);
        this.router.navigate(['/admin-dashboard']);
      } catch (error) {
        console.error('Failed to parse JSON:', error);
        this.loading = false;
      }
      this.loading = false;
    });
  }

  create(): void {
    if (this.createForm.valid) {
      this.loading = true;
      const request = { name: this.createForm.value.name };

      this.http.post(`${this.apiUrl}`, request).pipe(
        catchError(error => {
          console.error('Error creating genre:', error);
          alert('Failed to create genre.');
          this.loading = false;
          return of(null);
        })
      ).subscribe((response: any) => {
        if (response) {
          alert('Genre created successfully.');
          this.router.navigate(['/admin-dashboard']);
        }
        this.loading = false;
      });
    }
  }
}
