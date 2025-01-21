import { Component } from '@angular/core';
import { GoodService } from '../good.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { faFaceMeh } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Input } from '@angular/core';

interface MiObjeto {
  id: number;
  uno: any;
  dos: any;
  tres: any;
  cuatro: any;
  cinco: any;
  seis: any;
  siete: any;
  ocho: any;
  nueve: any;
  diez: any;
  once: any;
  doce: any;
  trece: any;
  catorce: any;
  quince: any;
}
@Component({
  selector: 'app-respuestas1',
  templateUrl: './respuestas1.component.html',
  styleUrl: './respuestas1.component.scss'
})

export class Respuestas1Component {
  datos: any[] = [];
  uno: string="hola";
  dos : string=""
  tres: any=2
  cuatro: any=0
  cinco : any =0
  seis:any=0
  siete :any=0
  ocho : any=0
  nueve: any=0
  diez: any=0
  once: any =0
  doce:any=0
  trece:any=0
  catorce:any=""
  quince:any=""
  dieciseis:any=""
  diecisiete:any=0
  dieciocho:any=0
  diecinueve:any=0
  constructor(private servicio: GoodService,  private libreria: FaIconLibrary, private toastr: ToastrService){
    this.libreria.addIcons(faFaceSmile)
    this.libreria.addIcons(faFaceFrown);
    this.libreria.addIcons(faFaceMeh)
  }
  camposFaltantes: string[] = [];
  alertap = false
   @Input() personaId: any;
  aceptar(){
    window.location.reload()
   
    this.alertap= false
  
  }

  

  

  
  seleccion = 1
  
  
  
  
  
  
  
  enviar(): void {
  
    let campos={
      uno: this.uno,
      dos:this.dos,
      tres: this.tres,
      cuatro:this.cuatro,
      cinco:this.cinco,
      seis:this.seis,
      siete:this.siete,
      ocho: this.ocho,
      nueve: this.nueve,
      diez:this.diez,
      once:this.once,
      doce:this.doce,
      trece: this.trece,
      catorce: this.catorce,
      quince: this.quince,
     
    }
  
    
  this.camposFaltantes=[] 
  
  
    for (const [campo, valor] of Object.entries(campos)) {
      if (!valor || valor === 0 || valor === '') {
        this.camposFaltantes.push(campo); 
      }
    }
  
    if (this.camposFaltantes.length > 0) {
      alert(`Faltan los siguientes campos por llenar: ${this.camposFaltantes.join(', ')}`);
      this.alertap = true
      
    
    } else {
      console.log('Bien');
      console.log(campos);
  
      this.servicio.mandar(campos).subscribe(
        (datos) => {
          this.alertap = true
          console.log('Respuesta del servidor:', datos);
        },
        (error) => {
          console.log('Error al enviar los datos:', error);
          
        }
      );
    }
  }
  
  
  
  total = 0
  valor3=0
  valor4=0
  valor5 = 0
  valor6 =0
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
  if (pregunta == "tres") {
   switch (nuevaOpcion) {
     case "1":
       this.valor3=this.desacuerdo
       console.log(pregunta);
       
       break
       
     case "2":
       this.valor3=this.acuerdo
       console.log("selec");
       
       break
  
       case "3":
         this.valor3= this.totalmente_acuerdo
         break
       case "4":
         this.valor3=1
         console.log("kdkdkdk");
         
         break
     
   }
  }
  else if(pregunta == "cuatro"){
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
          this.valor4=this.totalmente_acuerdo
          break
        case "4":
          this.valor7=1
          console.log("kdkdkdk");
          
          break
      
    }
   
   }
   else if(pregunta == "cuatro"){
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
          this.valor4=this.totalmente_acuerdo
          break
        case "4":
          this.valor7=1
          console.log("kdkdkdk");
          
          break
      
    }
   
   }else if(pregunta == "cuatro"){
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
          this.valor4=this.totalmente_acuerdo
          break
        case "4":
          this.valor7=1
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
       console.log(pregunta);
       
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
       console.log(pregunta);
       
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
  
  else if(pregunta == "nueve"){
   switch (nuevaOpcion) {
     case "1":
       this.valor9=this.desacuerdo
       console.log("pregunta9");
       
       break
       
     case "2":
       this.valor9=this.acuerdo
       console.log("selec");
       
       break
  
       case "3":
         this.valor9=this.totalmente_acuerdo
         break
       case "4":
         this.valor9=1
         console.log("kdkdkdk");
         
         break
     
   }
  
  }
  
  
  else if(pregunta == "diez"){
   switch (nuevaOpcion) {
     case "1":
       this.valor9=this.desacuerdo
    
       
       break
       
     case "2":
       this.valor10=this.acuerdo
       console.log("selec");
       
       break
  
       case "3":
         this.valor10=this.totalmente_acuerdo
         break
       case "4":
         this.valor10=1
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
  
  
  else if(pregunta == "doce"){
   switch (nuevaOpcion) {
     case "1":
       this.valor12=this.desacuerdo
       break
       
     case "2":
       this.valor12=this.acuerdo
       console.log("selec");
       
       break
  
       case "3":
         this.valor12=this.totalmente_acuerdo
         break
       case "4":
         this.valor12=1
         console.log("kdkdkdk");
         
         break
     
   }
  
  }
  
  
  else if(pregunta == "trece"){
   switch (nuevaOpcion) {
     case "1":
       this.valor13=this.desacuerdo
       break
       
     case "2":
       this.valor13=this.acuerdo
       console.log("selec");
       
       break
  
       case "3":
         this.valor13=this.totalmente_acuerdo
         break
       case "4":
         this.valor13=1
         console.log("kdkdkdk");
         
         break
     
   }
  
  }
  
  
  else if(pregunta == "catorce"){
   switch (nuevaOpcion) {
     case "1":
       this.valor14=this.desacuerdo
       break
       
     case "2":
       this.valor14=this.acuerdo
       console.log("selec");
       
       break
  
       case "3":
         this.valor14=this.totalmente_acuerdo
         break
       case "4":
         this.valor14=1
         console.log("kdkdkdk");
         
         break
     
   }
  
  }
  
  
  
  console.log("valor3",this.valor3, "valor4", this.valor4 , "valor5",this.valor5, "valor6", this.valor6,       "valor7", this.valor7,"valor8" ,this.valor8,"valor9" ,this.valor9,"valor10" ,this.valor10, "valor11",this.valor11, "valor12",this.valor12, "valor13",this.valor13) ;
  
  this.total = (this.valor3+this.valor4+this.valor5+this.valor6 +this.valor7+this.valor8 + this.valor9 + this.valor10 +this.valor11
  +this.valor12 + this.valor13 )  / 11
  
  }
  
  
  
  
  
  
  
  
  
  
  
  mandar(){
 
  }

  
  ngOnInit(): void {
    const id = this.personaId;
    this.servicio.traertodo().subscribe(
      (dates: MiObjeto[]) => {
        console.log(dates)
        console.log(id)
        const objetoEncontrado = dates.find((item: MiObjeto) => item.id == id);
  
        if (objetoEncontrado) {
          this.datos.push(...dates)
          this.uno = objetoEncontrado.uno;
          this.dos = objetoEncontrado.dos;
          this.tres = objetoEncontrado.tres;
          this.cuatro = objetoEncontrado.cuatro;
          this.cinco = objetoEncontrado.cinco;
          this.seis = objetoEncontrado.seis;
          this.siete = objetoEncontrado.siete;
          this.ocho = objetoEncontrado.ocho;
          this.nueve = objetoEncontrado.nueve;
          this.diez = objetoEncontrado.diez;
          this.once = objetoEncontrado.once;
          this.doce = objetoEncontrado.doce;
          this.trece = objetoEncontrado.trece;
          this.catorce = objetoEncontrado.catorce;
          this.quince = objetoEncontrado.quince;
        } else {
          console.log('No se encontró un objeto con el id proporcionado');
        }
      },
      (error) => {
        console.log(error);
      }
    );
    
    
  }
  

}
