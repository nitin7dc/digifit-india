import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';

/****************************************************************************************
 * Components
 ****************************************************************************************/

import {
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  BmrCalculatorComponent,
  TdeeCalculatorComponent,
} from './components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

/****************************************************************************************
 * Import Modules
 ****************************************************************************************/

/****************************************************************************************
 * Module
 ****************************************************************************************/

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReviewsComponent,
    BmrCalculatorComponent,
    TdeeCalculatorComponent,
  ],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
  ],
})
export class PrimaryModuleModule {}
