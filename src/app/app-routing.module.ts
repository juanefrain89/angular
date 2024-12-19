import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { Formulario3Component } from './formulario3/formulario3.component';

const routes: Routes = [
  {
    path:"formulario",
    component:FormularioComponent
  },
  {
    path:"",
    component:OrganigramaComponent
  },{
    path:"formulario2",
    component: Formulario2Component
  },{
    path:"formulario3",
    component:Formulario3Component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
