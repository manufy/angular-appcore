import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';

/* Routing */ 

import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent],
  exports: [ShellComponent, RouterModule]
})
export class CoreModule { }