import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViajesComponent } from './../app/list-viajes/list-viajes.component';
import { FormViajesComponent } from './../app/form-viajes/form-viajes.component';

const routes: Routes = [
  { path: '', component: ListViajesComponent, pathMatch: 'full' },
  { path: 'form', component: FormViajesComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
