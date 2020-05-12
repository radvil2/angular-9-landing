import { NgModule } from '@angular/core';

import { SharedModule, DirectivesModule } from '../../_shared';

import { BlogRouting } from './blog.routing';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [SharedModule, DirectivesModule, BlogRouting],
})
export class BlogModule {}
