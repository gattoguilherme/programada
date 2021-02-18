import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarriorsComponent } from './warriors/warriors.component';
import { MastersComponent } from './masters/masters.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FornitureComponent } from './forniture/forniture.component';
import { FornitureEditComponent } from './forniture-edit/forniture-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WarriorsComponent,
    MastersComponent,
    ProfileComponent,
    DashboardComponent,
    NavComponent,
    TitleComponent,
    FornitureComponent,
    FornitureEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
