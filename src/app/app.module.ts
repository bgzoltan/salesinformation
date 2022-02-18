import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// IMPORT THIS!
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './link1/list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './link1/projects/projects.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Link1Component,
    Link2Component,
    HomeComponent,
    ListComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule],   // IMPORT THIS!
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
