import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InnerpageComponent } from './innerpage/innerpage.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'innerpage', component:InnerpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
