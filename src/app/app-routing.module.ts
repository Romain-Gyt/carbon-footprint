import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SummaryComponent} from './pages/summary/summary.component';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {loginGuard} from './guards/login/login.guard';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'summary', component: SummaryComponent, canActivate:[loginGuard]},
  {path:'profile/:name', component: ProfileComponent, canActivate:[loginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
