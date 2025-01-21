import { Component } from '@angular/core';
import { Moment } from 'moment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Formulario2Service } from '../formulario2.service';
import { Formulario3Service } from '../formulario3.service';
import { GoodService } from '../good.service';
import  moment from 'moment'; 
import { GraficasService } from '../graficas.service';
interface Persona {
  fecha: string;
  nombre: string;
  departamento: string;
  puesto: string;
  id: number;
}
@Component({
  selector: 'app-tabla',
  standalone: false,
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  nombre: string = "";
  puesto: string =""
  area: string = ""
  
 
constructor(private controller: Router,private servcio1: GoodService, private servicio2: Formulario2Service, private servicio3 : Formulario3Service, private servicio4: GraficasService){

}

formulario1ngmodel =1
formulario1ngmodel2=1
formulario1ngmodel3=1
formulario1ngmodel4=1

submenu = false

handlesubmenu(){
  this.submenu = !this.submenu
}
selected : any
personas: Persona[] = [];

valor = 1
binding = 1
handleusuario(id : any){
  console.log("njdfyuvskmjdk");
  
  this.controller.navigate([`usuarios/${id}`])
}

activo = 1

segundo: any[]=[]
filtra: any[]=[]
handleactivo(numero: any) {
  this.selected = null
  this.nombre = ""
  this.area =""
  this.puesto =""

  this.activo = numero;
  this.all = []; 

  if (numero == 2) {
   
    this.segundo = []; 

    this.servicio2.traer().subscribe((dates: { uno: string, dos: string, id:any, fecha:any }[]) => {    
      
      
      this.personas = dates.map(g => ({
        fecha: g.fecha,       
        nombre: g.uno,  
        departamento: "", 
        puesto: g.dos  , 
        id: g.id
      }));
      this.all.push(...this.personas);
      this.segundo.push(...dates);
    });
  }if (numero == 1) {
    this.segundo = []; 
    this.all = [];  
    
    this.servcio1.traer().subscribe((dates: { uno: string, dos: string, id: any, fecha:any }[]) => {    
      console.log(dates);
      this.personas = dates.map(g => ({
        fecha: g.fecha,
        nombre: g.uno,  
        departamento: "desconocido", 
        puesto: g.dos,
        id: g.id
      }));
      this.all = [...this.personas];  
      this.segundo.push(...dates);
    });
  } else if (numero == 3) {
    this.segundo = []; 
    this.all = [];  
  
    this.servicio3.traer().subscribe((dates: { uno: string, dos: string, id: any }[]) => {    
      this.personas = dates.map(g => ({
        fecha: "",
        nombre: g.uno,  
        departamento: "", 
        puesto: g.dos,
        id: g.id
      }));
      this.all = [...this.personas];  
      this.segundo.push(...dates);
    });
  }
  


}

fecha: any =""
formulario = 0
isModalVisible = false; 
modal2 = false
respuestas1 = false 
respuestas2 = false
respuestas3= false
modal3 = false
dia : any=""
datosRecibidos2_1 : any =null
idSeleccionado2: any
idSeleccionado1 : any
idSleccionado3:any
selectedOption: string = '';
datosRecibidos: any = null;
datosRecibidos2: any = null
datosRecibidos3 : any = null
handlefecha(){
  if (this.activo == 1) {
    console.log(" entro al servicio 1 ");
  console.log(this.selected.startDate.format('YYYY-MM-DD'));
  console.log(this.selected.endDate.format('YYYY-MM-DD'));
  this.segundo = []; 
    this.all = [];  
  let datos={
inicio : this.selected.startDate.format('YYYY-MM-DD'),
fin :this.selected.endDate.format('YYYY-MM-DD')
  }
  
  this.servcio1.fecha(datos).subscribe((dates: { uno: string, dos: string, id: any, fecha:any }[]) => {    
    console.log(dates);
    this.personas = dates.map(g => ({
      fecha: g.fecha,
      nombre: g.uno,  
      departamento: "desconocido", 
      puesto: g.dos,
      id: g.id
    }));
    this.all = [...this.personas];  
    this.segundo.push(...dates);
  });
}if(this.activo == 2){
this.personas = []
  console.log(this.selected.startDate.format('YYYY-MM-DD'));
  console.log(this.selected.endDate.format('YYYY-MM-DD'));
  this.segundo = []; 
    this.all = [];  
  let datos={
inicio : this.selected.startDate.format('YYYY-MM-DD'),
fin :this.selected.endDate.format('YYYY-MM-DD')
  }
  
  this.servicio2.fecha(datos).subscribe((dates: { uno: string, dos: string, id: any, fecha:any }[]) => {    
    console.log(dates);
    this.personas = dates.map(g => ({
      fecha: g.fecha,
      nombre: g.uno,  
      departamento: "desconocido", 
      puesto: g.dos,
      id: g.id
    }));
    this.all = [...this.personas];  
    this.segundo.push(...dates);
  });

}

if(this.activo == 3){
  
  console.log(this.selected.startDate.format('YYYY-MM-DD'));
  console.log(this.selected.endDate.format('YYYY-MM-DD'));
  this.segundo = []; 
    this.all = [];  
  let datos={
inicio : this.selected.startDate.format('YYYY-MM-DD'),
fin :this.selected.endDate.format('YYYY-MM-DD')
  }
  
  this.servicio3.fecha(datos).subscribe((dates: { uno: string, dos: string, id: any, fecha:any }[]) => {    
    console.log(dates);
    this.personas = dates.map(g => ({
      fecha: g.fecha,
      nombre: g.uno,  
      departamento: "desconocido", 
      puesto: g.dos,
      id: g.id
    }));
    this.all = [...this.personas];  
    this.segundo.push(...dates);
  });

}




if(this.activo ==4){
  let datos={
    inicio : this.selected.startDate.format('YYYY-MM-DD'),
    fin :this.selected.endDate.format('YYYY-MM-DD')
      }
      if (this.binding == 4) {
        if(this.formulario1ngmodel4 == 2){
          this.servicio4.fechacalificaciones(datos).subscribe(
            (dates)=>{
            
              this.datosRecibidos = dates;
            },
            (error)=>{
              console.log(error);
              
            }
          )
      }
      }
  
if (this.binding == 1) {
  if (this.formulario1ngmodel == 1) {
    this.servicio4.fechaperceion(datos).subscribe(
      (dates)=>{
      console.log(dates);
      
        this.datosRecibidos2 = dates;
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  
}

if (this.binding ==2) {
  if (this.formulario1ngmodel2 ==   1) {
    this.servicio4.fecharecomendacion(datos).subscribe(
      (dates)=>{
   
        this.datosRecibidos3 = dates;
      },
      (error)=>{
        console.log(error);
        
      }
    )

    
  }
  if (this.formulario1ngmodel2 ==2) {
    this.servicio4.fechacursofavorito(datos).subscribe(
      (datesa)=>{
        this.datosRecibidos2_1 = datesa
      },
      (er)=>{
        console.log(er);
        
      }
    )
    
  }
  
}
  
}



  
}

abrirrespuestas1(id: number):void{
  console.log(id);
  this.idSeleccionado1 = id
  this.respuestas1 = true
}

 abrirrespuestas2(id :any){
  this.idSeleccionado2 = id  
  this.respuestas2= true
  console.log(id);
 
 }
 abrirrespuestas3(id: any){
this.idSleccionado3=id
  this.respuestas3= true
 }
abrirmodal3(): void{
  this.modal3= true
}
abrirmodal2():void{
  this.modal2 = true
}
abrirModal(): void {
  this.formulario = 1;
  this.isModalVisible = true;
}
cerrarModal(): void {
  this.formulario = 0;
  this.modal2 = false
  this.modal3 = false
  this.isModalVisible = false;
  this.respuestas1 = false
  this.respuestas2 = false
  this.respuestas3= false
}


optiones(evento : any){
  console.log(evento);
  
this.formulario = evento
}


  all= this.personas
  filtrar_nombre: any[] = [];
filtrar_puesto:any[]=[]
filtrar_area:any[]=[]




ngOnInit(): void {
  
  this.servcio1.traer().subscribe((datos: { uno: string, dos: string, id: any, fecha:any }[]) => {
    const personasIniciales = datos.map(g => ({
      fecha: g.fecha,
      nombre: g.uno,
      departamento: "desconocido",
      puesto: g.dos,
      id: g.id
    }));
    this.personas = [...personasIniciales];
    this.all = [...this.personas]; 
  });
 
}


filtraciones(evento: string) {
  console.log(this.fecha);
  const startDateFormatted = this.selected?.startDate;
  const endDateFormatted = this.selected?.endDate;

  
    if (this.nombre.trim() === "" && this.puesto.trim() === "" && this.area === "" && this.fecha === "") {
      this.all = this.personas;
    } else {
      this.filtrar_nombre = this.personas.filter(persona => {
        const personaFecha = moment(persona.fecha, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');

      

        const nombrecampo = persona.nombre.toLowerCase().includes(this.nombre.toLowerCase().trim());
        const puestocampo = persona.puesto.toLowerCase().includes(this.puesto.toLowerCase().trim());
        const areacampo = persona.departamento.toLowerCase().includes(this.area.toLowerCase().trim());

        return nombrecampo && puestocampo && areacampo ;
      });

      this.all = [...this.filtrar_nombre];
    }

    console.log(evento);
    console.log(this.all);
  } 




}
