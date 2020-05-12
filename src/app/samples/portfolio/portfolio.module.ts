import { NgModule } from '@angular/core';

import { SharedModule, DirectivesModule } from '../../_shared';

import { PortfolioRouting } from './portfolio.routing';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [DirectivesModule, SharedModule, PortfolioRouting],
})
export class PortfolioModule {}
