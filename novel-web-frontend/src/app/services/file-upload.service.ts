import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileDetails } from '../shared/model/file-details.model';
import {environment} from '../../environtments/environtment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = environment.apiUrl;  // Lấy URL từ environment

  constructor(private httpClient: HttpClient) { }

  upload(file: File): Observable<FileDetails> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<FileDetails>(`${this.baseUrl}/simple-form-upload-mvc`, formData);
  }
}
