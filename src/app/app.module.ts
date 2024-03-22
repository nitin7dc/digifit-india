/***
 * App Module File.
 *
 * All angular dependencies, app feature-module, app services, app module & external libraries
 * are here.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/************************************************************************************
 * External libraries
 *************************************************************************************/

/************************************************************************************
 * App Routing & Environment.
 *************************************************************************************/

import { AppRoutingModule } from './app-routing.module';

/************************************************************************************
 * App Components
 *************************************************************************************/

import { AppComponent } from './app.component';

/************************************************************************************
 * App Services.
 *************************************************************************************/

/************************************************************************************
 * App Modules
 *************************************************************************************/

import { PrimaryModuleModule } from './primary-module/primary-module.module';
import {FlexLayoutModule} from '@angular/flex-layout';

/************************************************************************************
 * App Module
 *************************************************************************************/

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimaryModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
