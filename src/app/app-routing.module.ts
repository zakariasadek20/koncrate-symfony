import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'' , component: AccueilComponent},
  {path:'acceuil', component:AccueilComponent},
  {path: '**' , component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
