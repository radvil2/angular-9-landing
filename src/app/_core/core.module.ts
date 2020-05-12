import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './services/error.interceptor';

export const PROVIDERS = [
  { provide: ErrorHandler, useClass: ErrorInterceptor },
];

@NgModule({
  providers: [...PROVIDERS],
  imports: [BrowserModule, BrowserAnimationsModule],
})
export class CoreModule {}
