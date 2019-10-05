import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComandaComponent } from './comanda/comanda.component';

import {ReactiveFormsModule} from '@angular/forms';

imports:[BrowserModule,AppRoutingModule,ReactiveFormsModule]

@NgModule({
  declarations: [
    AppComponent,
    ComandaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
