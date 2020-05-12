import { NgModule } from '@angular/core';

import { SharedModule } from '../../_shared';

import { DirectivesModule } from '../../directives/directives.module';
import { PortfolioRouting } from './portfolio.routing';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [DirectivesModule, SharedModule, PortfolioRouting],
})
export class PortfolioModule {}
