import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';

import { DataService } from './service/data.service'


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    DataComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
