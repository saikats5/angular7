import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdComponent } from '../id/id.component';
import { CityComponent } from '../city/city.component'; 

const routes: Routes = [
  { path: 'id', component: IdComponent },
  { path: 'city', component: CityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IdComponent, CityComponent];
