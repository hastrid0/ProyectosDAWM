import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { SedesComponent } from './sedes/sedes.component';
const routes: Routes = [
  {path:"disciplinas",component:DisciplinasComponent},
  {path:"sedes",component:SedesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
