import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ LayoutComponent, MainComponent, HeaderComponent, NavComponent, FooterComponent, SidebarComponent],
  exports :[
    LayoutComponent, MainComponent, HeaderComponent, NavComponent, FooterComponent, SidebarComponent
  ]
})
export class LayoutModule { }
