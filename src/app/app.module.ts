import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './_core';
import {
  SharedModule,
  DirectivesModule,
  ContactDialogComponent,
  HeadingComponent,
} from './_shared';

import { LayoutComponent } from './_layout/layout.component';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

const LAYOUT_COMPONENTS = [
  AppComponent,
  LayoutComponent,
  HeadingComponent,
  ContactDialogComponent,
];

@NgModule({
  declarations: [...LAYOUT_COMPONENTS],
  entryComponents: [ContactDialogComponent],
  imports: [
    CoreModule,
    AppRouting,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
