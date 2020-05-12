import { NgModule } from '@angular/core';

import { SharedModule } from '../../_shared';

import { AboutRouting } from './about.routing';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [SharedModule, AboutRouting],
})
export class AboutModule {}
