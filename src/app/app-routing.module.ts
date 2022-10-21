import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PrincipalComponent} from './principal/principal.component';
import {CardFancyExampleComponent} from './card-fancy-example/card-fancy-example.component';
import {PaginatresComponent} from './paginatres/paginatres.component';

const routes: Routes = [

  {path: 'quienes-somos', component: PrincipalComponent},
  {path: 'informacion-producto', component: CardFancyExampleComponent},
  {path: 'contacto', component: PaginatresComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
