import { Component } from '@angular/core';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { GoodService } from '../good.service';
import { Formulario2Service } from '../formulario2.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'; 
import { faFaceMeh } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.scss'
})
export class Formulario2Component {
  
  camposFaltantes: string[] = [];

uno: string="";
dos : string=""
tres: any=""
cuatro: any=0
cinco : any =0
seis:any=0
siete :any=0
ocho : any=0
nueve: any=0
diez: any=""
once: any =0
doce:any=0
trece:any=0
catorce:string=""
quince:any=0
constructor(private servicio: Formulario2Service,
  private libreria: FaIconLibrary){
    this.libreria.addIcons(faFaceSmile);
    this.libreria.addIcons(faFaceFrown);
    this.libreria.addIcons(faFaceMeh)

  }







//el campo tres es la fecha


  enviar(): void {
   
    let campos={
      uno: this.uno,
      dos:this.dos,
      cuatro:this.cuatro,
      cinco:this.cinco,
      seis:this.seis,
      siete:this.siete,
      ocho: this.ocho,
      nueve: this.nueve,
      diez:this.diez,
     
    }
  
    
  this.camposFaltantes=[] 
  if(this.uno.length < 5 ){
    this.camposFaltantes.push("uno")
  }
   if(this.dos.length <5){
    this.camposFaltantes.push("dos")
   }
    for (const [campo, valor] of Object.entries(campos)) {
      if (!valor || valor === 0 || valor === '') {
        this.camposFaltantes.push(campo); 
      }
    }
  
    if (this.camposFaltantes.length > 0) {
     
      alert(`Faltan los siguientes campos por llenar: ${this.camposFaltantes.join(', ')}`);
    } else {
      console.log('Bien');
      console.log(campos);
      this.servicio.mandar(campos).subscribe(
        (datos) => {
          console.log('Respuesta del servidor:', datos);
        },
        (error) => {
          console.log('Error al enviar los datos:', error);
        }
      );
    }
  }





  total = 0
  valor4 = 0
  valor5=0
  valor6=0
valor7 = 0
valor8 = 0
valor9 =0
valor10=0
valor11=0
valor12=0
valor13=0
valor14=0
valor15=0
valor16=0
valor17=0
valor18=0
valor19=0
valor20=0
valor21=0
totalmente_acuerdo = 100
acuerdo = 66
desacuerdo = 33
cambiar(nuevaOpcion: string, pregunta: string){
   const opcion = String(this.cinco); 
   console.log(pregunta);
if (pregunta == "cuatro") {
   switch (nuevaOpcion) {
     case "1":
       this.valor4=this.desacuerdo
       console.log(pregunta);
       
       break
       
     case "2":
       this.valor4=this.acuerdo
       console.log("selec");
       
       break

       case "3":
         this.valor4= this.totalmente_acuerdo
         break
       case "4":
         this.valor4=1
         console.log("kdkdkdk");
         
         break
     
   }
 }else if(pregunta == "cinco"){
   switch (nuevaOpcion) {
     case "1":
       this.valor5=this.desacuerdo
       console.log(pregunta);
       
       break
       
     case "2":
       this.valor5=this.acuerdo
       console.log("selec");
       
       break

       case "3":
         this.valor5=this.totalmente_acuerdo
         break
       case "4":
         this.valor5=1
         console.log("kdkdkdk");
         
         break
     
   }

 }

 else if(pregunta == "seis"){
   switch (nuevaOpcion) {
     case "1":
       this.valor6=this.desacuerdo
       console.log(pregunta);
       
       break
       
     case "2":
       this.valor6=this.acuerdo
       console.log("selec");
       
       break

       case "3":
         this.valor6=this.totalmente_acuerdo
         break
       case "4":
         this.valor6=1
         console.log("kdkdkdk");
         
         break
     
   }

 }

 else if(pregunta == "siete"){
   switch (nuevaOpcion) {
     case "1":
       this.valor7=this.desacuerdo
       console.log("pregunta9");
       
       break
       
     case "2":
       this.valor7=this.acuerdo
       console.log("selec");
       
       break

       case "3":
         this.valor7=this.totalmente_acuerdo
         break
       case "4":
         this.valor7=1
         console.log("kdkdkdk");
         
         break
     
   }

 }

 
 else if(pregunta == "ocho"){
   switch (nuevaOpcion) {
     case "1":
       this.valor8=this.desacuerdo
    
       
       break
       
     case "2":
       this.valor8=this.acuerdo
       console.log("selec");
       
       break

       case "3":
         this.valor8=this.totalmente_acuerdo
         break
       case "4":
         this.valor8=1
         console.log("kdkdkdk");
         
         break
     
   }

 }

 
 else if(pregunta == "once"){
   switch (nuevaOpcion) {
     case "1":
       this.valor11=this.desacuerdo
     
       
       break
       
     case "2":
       this.valor11=this.acuerdo
       console.log("selec");
       
       break

       case "3":
         this.valor11=this.totalmente_acuerdo
         break
       case "4":
         this.valor11=1
         console.log("kdkdkdk");
         
         break
     
   }
}

console.log(this.valor19);

console.log("valor4",this.valor4,"valor7", this.valor7,"valor8" ,this.valor8,"valor9" ,this.valor9,"valor10" ,this.valor10, "valor11",this.valor11, "valor12",this.valor12, "valor13",this.valor13, "valor14",this.valor14,"valor15", this.valor15, "valor16",this.valor16, "valor17",this.valor17, "valor18",this.valor18, "valor19",this.valor19, "valor20", this.valor20) ;

this.total = (this.valor4 + this.valor5+this.valor6+this.valor7 )  / 4
 }








mandar(){

}


ngOnInit(): void {
}

}
