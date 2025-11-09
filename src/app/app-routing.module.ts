/***
 * App Routing file.
 *
 * All application routes are here with Guards.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  BmrCalculatorComponent,
  TdeeCalculatorComponent,
} from './primary-module/components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'bmr-calculator',
    component: BmrCalculatorComponent,
  },
  {
    path: 'tdee-calculator',
    component: TdeeCalculatorComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
