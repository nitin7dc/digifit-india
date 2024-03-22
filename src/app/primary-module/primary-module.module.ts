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
  ],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MatButtonModule, MatMenuModule,MatCardModule, MatIconModule ]
})
export class PrimaryModuleModule {}
