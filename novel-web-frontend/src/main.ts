import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';



bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

import { Injectable } from '@angular/core';
import { QueryClient } from '@tanstack/react-query';

@Injectable({
  providedIn: 'root',
})
export class QueryClientService {
  private queryClient: QueryClient;

  constructor() {
    this.queryClient = new QueryClient();
  }

  getQueryClient() {
    return this.queryClient;
  }
}
