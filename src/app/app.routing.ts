import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'samples',
    pathMatch: 'full',
  },
  {
    path: 'samples',
    loadChildren: () =>
      import('./samples/samples.module').then((m) => m.SamplesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
