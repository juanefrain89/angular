import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { TreeModule } from 'angular-tree-component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzModalModule } from 'ng-zorro-antd/modal'; // Agregar el módulo de modal de NG-ZORRO
import { NzTableModule } from 'ng-zorro-antd/table';
import { OrgChartModule } from 'angular13-organization-chart';
import { NzTagModule } from 'ng-zorro-antd/tag'
import { ReactiveFormsModule } from '@angular/forms';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DosComponent } from './dos/dos.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormularioComponent } from './formulario/formulario.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Formulario2Component } from './formulario2/formulario2.component';
import { Formulario3Component } from './formulario3/formulario3.component';
import { TablaComponent } from './tabla/tabla.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import nl from '@angular/common/locales/nl';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { Respuestas1Component } from './respuestas1/respuestas1.component';
import { Respuestas2Component } from './respuestas2/respuestas2.component';
import { Respuestas3Component } from './respuestas3/respuestas3.component';
import { GraficasComponent } from './graficas/graficas.component';
import { NgChartsModule } from 'ng2-charts';
import { PersonalComponent } from './personal/personal.component'; 
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { GraficarecomendacionComponent } from './graficarecomendacion/graficarecomendacion.component';
import { OrgComponent } from './org/org.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PercepcionComponent } from './graficasgenerales/formulario1/percepcion/percepcion.component';
import { CursofavoritoComponent } from './graficasgenerales/formulario2/cursofavorito/cursofavorito.component';
import { TotalllenadoComponent } from './graficasgenerales/general/totalllenado/totalllenado.component';


registerLocaleData(nl);
@NgModule({
  declarations: [
  OrgComponent,
    AppComponent,
    EjemploComponent,
    DosComponent,
    OrganigramaComponent,
    FormularioComponent,
    Formulario2Component,
    Formulario3Component,
    TablaComponent,
    Respuestas1Component,
    Respuestas2Component,
    Respuestas3Component,
    GraficasComponent,
    PersonalComponent,
    GraficarecomendacionComponent,
    OrgComponent,
    InicioComponent,
    EmpleadosComponent,
    PercepcionComponent,
    CursofavoritoComponent,
    TotalllenadoComponent,

    
  ],
  imports: [
    NgxDaterangepickerMd.forRoot(),
    NgChartsModule,
    NzTagModule,
    NzModalModule,
    NzTableModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrgChartModule,
  ],
  providers: [
    provideClientHydration(),
   
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
