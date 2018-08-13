import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
    path : '',
    component : LayoutComponent,
    children :[
      {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
      },
      {
        path : 'home',
        component : HomeComponent
      },
      {
        path : 'about',
        component : AboutComponent
      },
      {
        path : 'blog',
        component : BlogComponent
      },
      {
        path : 'contact',
        component : ContactComponent
      },
    ]
   },
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
