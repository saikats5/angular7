import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdComponent } from '../id/id.component';
import { CityComponent } from '../city/city.component'; 
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'id', component: IdComponent },
  { path: 'city', component: CityComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IdComponent, CityComponent];
