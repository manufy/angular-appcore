import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Core */ 

import { CoreModule } from './core/core.module'; /* Poner ruta relativa al modulo, sin .ts */

/* Routing */ 

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CoreModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
