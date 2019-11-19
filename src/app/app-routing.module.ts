import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemporalComponent } from './1-temporal/temporal.component'

const routes: Routes = [


  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}