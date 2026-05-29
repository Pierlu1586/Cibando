import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full'},
  { path:'home', component: HomeComponent },
  { path:'ricette', component: RecipesComponent, children: [ // Children sono i figli di ricette
      { path:'', component: RecipesListComponent, pathMatch: 'full'},
      { path:'dettaglio/:title/:_id', component: DetailComponent}, //routing dinamico con passsaggio di parametro
  ] },

  { path:'**', component: NotFoundComponent}
  //{path:'contatti', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
