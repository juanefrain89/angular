import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
 
constructor(private controller: Router){

}


handleusuario(id : any){
  console.log("njdfyuvskmjdk");
  
  this.controller.navigate([`usuarios/${id}`])
}

activo = 1

handleactivo(numero : any){
  this.activo =  numero
}

fecha: any =""
formulario = 0

isModalVisible = false; 
modal2 = false
modal3 = false
dia : any=""

handlefecha(){
  this.dia = parseInt( this.fecha.split("-")[2])
  console.log(typeof this.dia);
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

// Cierra el modal y configura el formulario en 0
cerrarModal(): void {
  this.formulario = 0;
  this.modal2 = false
  this.modal3 = false
  this.isModalVisible = false;
}


optiones(evento : any){
  console.log(evento);
  
this.formulario = evento
}

   personas = [
    { fecha: "23/11/2002", nombre: "Javier Gonzales", departamento: "tics", puesto: "Ing datos" },
    { fecha: "23/11/2002", nombre: "Josue", departamento: "calidad", puesto: "calidad operativa" },
    { fecha: "23/11/2002", nombre: "Arabe", departamento: "administracion", puesto: "auxiliar" },
    { fecha: "25/12/2020", nombre: "María López", departamento: "finanzas", puesto: "analista" },
    { fecha: "10/03/2015", nombre: "Carlos Pérez", departamento: "tics", puesto: "programador" },
    { fecha: "12/06/2018", nombre: "Lucía García", departamento: "marketing", puesto: "coordinadora" },
    { fecha: "15/09/2017", nombre: "Fernando Ramírez", departamento: "ventas", puesto: "ejecutivo" },
    { fecha: "01/08/2019", nombre: "Ana Martínez", departamento: "recursos humanos", puesto: "especialista" },
    { fecha: "30/01/2021", nombre: "Pedro Sánchez", departamento: "tics", puesto: "desarrollador" },
    { fecha: "17/07/2016", nombre: "Claudia Méndez", departamento: "finanzas", puesto: "contador" },
    { fecha: "04/10/2022", nombre: "Miguel Torres", departamento: "administracion", puesto: "auxiliar" },
    { fecha: "29/11/2019", nombre: "Sofía Díaz", departamento: "calidad", puesto: "analista" },
    { fecha: "22/03/2018", nombre: "David Jiménez", departamento: "marketing", puesto: "diseñador" },
    { fecha: "03/05/2017", nombre: "Raúl González", departamento: "ventas", puesto: "gerente" },
    { fecha: "09/12/2020", nombre: "Esteban Ruiz", departamento: "recursos humanos", puesto: "reclutador" },
    { fecha: "19/11/2016", nombre: "Marta Vargas", departamento: "tics", puesto: "analista de datos" },
    { fecha: "27/04/2022", nombre: "José García", departamento: "administracion", puesto: "secretario" },
    { fecha: "14/02/2021", nombre: "Daniela Pérez", departamento: "calidad", puesto: "supervisora" },
    { fecha: "16/05/2020", nombre: "Ricardo Fernández", departamento: "ventas", puesto: "consultor" },
    { fecha: "20/06/2019", nombre: "Beatriz Sánchez", departamento: "finanzas", puesto: "auditor" }
  ];

  fechaa = this.personas[1].fecha.split("/")[0]





  all= this.personas
  filtrar_nombre: any[] = [];
filtrar_puesto:any[]=[]
filtrar_area:any[]=[]





filtraciones(evento: string) {
  console.log(this.fecha);
  
  if (this.nombre.trim() === "" && this.puesto.trim() === "" && this.area ==="" && this.fecha=="" ) {
    this.all = this.personas;
  } else {
   
    this.filtrar_nombre = this.personas.filter(persona => {
      const nombrecampo = persona.nombre.toLowerCase().includes(this.nombre.toLowerCase().trim());
      const fe= persona.fecha.split("/")[0] == this.dia 
      const puestocampo = persona.puesto.toLowerCase().includes(this.puesto.toLowerCase().trim());
      const areacampo = persona.departamento.toLowerCase().includes(this.area.toLowerCase().trim())
      return nombrecampo && puestocampo && areacampo && fe ;
    });

    
    this.all = [...this.filtrar_nombre];
  }
console.log(evento);

  console.log(this.all); 
}
}
