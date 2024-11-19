import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  selectedAction: string | null = null; // "createGenre" hoặc "createNovel"
  selectedSection: string | null = null; // "genres" hoặc "novels"
  currentAction: string | null = null; // "createGenre", "createNovel", etc.
  currentSection: string | null = null;
  private router=inject(Router);
  todayViews: number = 100;  // Giả sử 100 lượt xem hôm nay
  weekViews: number = 500;   // Giả sử 500 lượt xem trong tuần này
  totalViews: number = 1500; // Giả sử 1500 lượt xem tổng cộng
  totalUsers: number = 120;  // Giả sử 120 người dùng
  totalAuthors: number = 30;
  totalVisits:number=1000;
  createForm!: FormGroup;
  loading: boolean = false;
  private apiUrl = 'http://localhost:8080/api/genres';

  // Fake data for demonstration
  genreList = [
    { id: 1, name: 'Fantasy' },
    { id: 2, name: 'Romance' },
    { id: 3, name: 'Adventure' },
  ];
  navigate(action: string) {
    // Reset both action and section
    this.currentAction = null;
    this.currentSection = null;

    // Assign the appropriate values based on the action
    switch (action) {
      case 'createGenre':
        this.currentAction = 'createGenre';
        this.currentSection = 'genres'; // Also show genre list
        break;
      case 'viewGenres':
        this.currentSection = 'genres';
        break;
      case 'createNovel':
        this.currentAction = 'createNovel';
        break;
      case 'viewNovels':
        this.currentSection = 'novels';
        break;
      case 'viewUsers':
        this.currentSection = 'users';
        break;
      default:
        break;
    }
  }

  novelList = [
    { id: 1, title: 'The Great Novel', author: 'John Doe',genre:'meomeo',views:'1000' },
    { id: 2, title: 'Adventure Time', author: 'Jane Smith' ,genre:'meomeo',views:'1000'},
  ];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  genreName = '';
  novelTitle = '';

  createGenre() {
    this.selectedAction = 'createGenre';
    this.selectedSection = null;
  }

  createNovel() {
    this.selectedAction = 'createNovel';
    this.selectedSection = null;
  }

  viewGenres() {
    this.selectedAction = null;
    this.selectedSection = 'genres';
  }

  viewNovels() {
    this.selectedAction = null;
    this.selectedSection = 'novels';
  }

  submitGenre() {
    alert(`Genre "${this.genreName}" created!`);
    this.genreName = '';
  }

  submitNovel() {
    alert(`Novel "${this.novelTitle}" created!`);
    this.novelTitle = '';
  }

  ngOnInit(): void {
    // Khởi tạo FormGroup với một FormControl cho 'name'
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get name() {
    return this.createForm.get('name');
  }
  backtohome() {
    this.router.navigate(['/']);
  }

  viewUsers() {

  }
  create() {
    if (this.createForm.valid) {
      this.loading = true;
      const request = { name: this.createForm.value.name };

      // Gửi yêu cầu POST đến API
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
