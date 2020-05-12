import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from './directives/directives.module';

import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';

import { ContactDialogComponent, HeadingComponent } from './_shared';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [AppComponent, HeadingComponent, ContactDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
  ],
  entryComponents: [ContactDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
