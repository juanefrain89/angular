import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { TreeModule } from 'angular-tree-component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DosComponent } from './dos/dos.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormularioComponent } from './formulario/formulario.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Formulario2Component } from './formulario2/formulario2.component';
import { Formulario3Component } from './formulario3/formulario3.component';
import { TablaComponent } from './tabla/tabla.component';
@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    DosComponent,
    OrganigramaComponent,
    FormularioComponent,
    Formulario2Component,
    Formulario3Component,
    TablaComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
