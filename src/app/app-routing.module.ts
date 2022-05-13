import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './pages/donate/donate.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path : "", component: HomeComponent,pathMatch: 'full'
  },
  {
    path : "donate",component : DonateComponent,pathMatch: 'full'
  },
  {
    path : "**",redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
