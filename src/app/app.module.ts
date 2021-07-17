import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GridModule, SharedModule} from '@progress/kendo-angular-grid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewBoatsComponent } from './view-boats/view-boats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewBoatComponent } from './new-boat/new-boat/new-boat.component';
import {SortPipe} from '@app/shared/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ViewBoatsComponent,
    NewBoatComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GridModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
