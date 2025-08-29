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
} from './components';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CalculatorDialogComponent } from './calculator-dialog/calculator-dialog.component';
import { BmrCalculatorComponent } from "./components/bmr-calculator/bmr-calculator.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";

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
    CalculatorDialogComponent,
    BmrCalculatorComponent,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
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
    MatDialogModule,
  ],
})
export class PrimaryModuleModule {}
