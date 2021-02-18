import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FornitureComponent } from './forniture/forniture.component';
import { MastersComponent } from './masters/masters.component';
import { ProfileComponent } from './profile/profile.component';
import { WarriorsComponent } from './warriors/warriors.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'masters', component: MastersComponent},
  { path: 'warriors', component: WarriorsComponent},
  { path: 'forniture', component: FornitureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
