import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewTrainingsComponent } from './view-trainings/view-trainings.component';
import { CreateTrainingsComponent } from './create-trainings/create-trainings.component';

const routes: Routes = [
  // { path: "", component: AppComponent },
  { path: 'create', component: CreateTrainingsComponent },
  { path: 'view-all', component: ViewTrainingsComponent },
  { path: 'view-details', component: CreateTrainingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  
}
