import { NgModule } from '@angular/core';

import { SharedModule } from '../../_shared';

import { DirectivesModule } from '../../directives/directives.module';
import { BlogRouting } from './blog.routing';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [SharedModule, DirectivesModule, BlogRouting],
})
export class BlogModule {}
