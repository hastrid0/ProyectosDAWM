import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedeComponent } from './sede/sede.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';

const routes: Routes = [
  { path: "sedes", component: SedeComponent },
  { path: "disciplinas", component: DisciplinaComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
