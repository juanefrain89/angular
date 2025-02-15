import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { Formulario3Component } from './formulario3/formulario3.component';
import { TablaComponent } from './tabla/tabla.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Respuestas1Component } from './respuestas1/respuestas1.component';
import { Respuestas2Component } from './respuestas2/respuestas2.component';
import { Respuestas3Component } from './respuestas3/respuestas3.component';
import { OrgComponent } from './org/org.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes: Routes = [
  {
    path:"formulario",
    component:InicioComponent
  },
  {
    path:"",
    component:EmpleadosComponent
  },{
    path:"formulario2",
    component: Formulario2Component
  },{
    path:"formulario3",
    component:Formulario3Component
  },
  {
    path:"tablas",
    component:TablaComponent
  },
  {
    path:`usuarios/:id`,
    component :Respuestas1Component
  },
  {
    path:"usuarios",
  component : EmpleadosComponent
  }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
