import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../_shared';

import { ContactRouting } from './contact.routing';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [FormsModule, ReactiveFormsModule, SharedModule, ContactRouting],
})
export class ContactModule {}
