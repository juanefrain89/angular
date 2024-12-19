import { Component, OnInit } from '@angular/core';
import { Formulario3Service } from '../formulario3.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'; 
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { faFaceMeh } from '@fortawesome/free-solid-svg-icons';
import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.scss'] 
})
export class Formulario3Component implements OnInit {
  miFormulario!: FormGroup;
  uno: string = '';
  dos: string = '';
  tres: any = '';
  cuatro: any = 0;
  cinco: any = 0;
  seis: any = '';
  siete: any = 0;
  ocho: any = 0;
  nueve: any = 0;
  diez: any = '';
  once: any = 0;
  doce: any = 0;
  trece: any = 0;
  catorce: any = 0;
  quince: any = 0;
  dieciseis: any = 0;
  diecisiete: any = 0;
  dieciocho: any = 0;
  diecinueve: any = 0;
  veinte: any = 0;
  veintiuno: any = "";
 

  constructor(
    private servicio: Formulario3Service,
    private fb: FormBuilder,
    private libreria: FaIconLibrary,
    private cdr: ChangeDetectorRef
  ) {
    this.libreria.addIcons(faFaceSmile); 
    this.libreria.addIcons(faFaceFrown)
    this.libreria.addIcons(faFaceMeh)

  }
   total = 0
   valor5 = 0
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
if (pregunta == "cinco") {
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
          this.valor5= this.totalmente_acuerdo
          break
        case "4":
          this.valor5=1
          console.log("kdkdkdk");
          
          break
      
    }
  }else if(pregunta == "siete"){
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




  else if(pregunta == "quince"){
    switch (nuevaOpcion) {
      case "1":
        this.valor15=this.desacuerdo
        break
        
      case "2":
        this.valor15=this.acuerdo
        console.log("selec");
        
        break

        case "3":
          this.valor15=this.totalmente_acuerdo
          break
        case "4":
          this.valor15=1
          console.log("kdkdkdk");
          
          break
      
    }


  }




  else if(pregunta == "dieciseis"){
    switch (nuevaOpcion) {
      case "1":
        this.valor16=this.desacuerdo
        break
        
      case "2":
        this.valor16=this.acuerdo
        console.log("selec");
        
        break

        case "3":
          this.valor16=this.totalmente_acuerdo
          break
        case "4":
          this.valor16=1
          console.log("kdkdkdk");
          
          break
      
    }

  }

  
  else if(pregunta == "diecisiete"){
    switch (nuevaOpcion) {
      case "1":
        this.valor17=this.desacuerdo
        break
        
      case "2":
        this.valor17=this.acuerdo
        console.log("selec");
        
        break

        case "3":
          this.valor17=this.totalmente_acuerdo
          break
        case "4":
          this.valor17=1
          console.log("kdkdkdk");
          
          break
      
    }
  }


  else if(pregunta == "dieciocho"){
    switch (nuevaOpcion) {
      case "1":
        this.valor18=this.desacuerdo
        break
        
      case "2":
        this.valor18=this.acuerdo
        console.log("selec");
        
        break

        case "3":
          this.valor18=this.totalmente_acuerdo
          break
        case "4":
          this.valor18=1
          console.log("kdkdkdk");
          
          break
      
    }

  }

  else if(pregunta == "diecinueve"){
    switch (nuevaOpcion) {
      case "1":
        this.valor19=  this.desacuerdo
        break
        
      case "2":
        this.valor19=this.acuerdo
        console.log("selec ultimo");
        
        break

        case "3":
          this.valor19=this.totalmente_acuerdo
          break
        case "4":
          this.valor19=1
          console.log("kdkdkdk");
          
          break
      
    }
}


else if(pregunta == "veinte"){
  console.log(nuevaOpcion);
  
  switch (nuevaOpcion) {
    case "1":
      this.valor20=  this.desacuerdo
      console.log(nuevaOpcion);
      
      break
      
    case "2":
      this.valor20=this.acuerdo
      console.log("selecccionm");
      
      break

      case "3":
        this.valor20=this.totalmente_acuerdo
        break
      case "4":
        this.valor20=1
        console.log("kdkdkdk");
        
        break
    }

}


else if(pregunta == "veintiuno"){
  switch (nuevaOpcion) {
    case "1":
      this.valor12=  this.desacuerdo
     
      
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

console.log(this.valor19);

console.log("valor5",this.valor5,"valor7", this.valor7,"valor8" ,this.valor8,"valor9" ,this.valor9,"valor10" ,this.valor10, "valor11",this.valor11, "valor12",this.valor12, "valor13",this.valor13, "valor14",this.valor14,"valor15", this.valor15, "valor16",this.valor16, "valor17",this.valor17, "valor18",this.valor18, "valor19",this.valor19, "valor20", this.valor20) ;

this.total = (this.valor5 +this.valor7+this.valor8 + this.valor9 + this.valor10 +this.valor11
+this.valor12 + this.valor13 + this.valor14 + this.valor15 +this.valor16 + this.valor17 + this.valor18 +this.valor19 +this.valor20)  / 15

  }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required]], 
      email: ['', [Validators.required, Validators.email]], 
      mensaje: ['', [Validators.required, Validators.minLength(10)]], 
    });
  }
   camposFaltantes: string[] = [];

  enviar(): void {
    this.cdr.detectChanges();
this.total = this.valor5   
    const campos = {
      uno: this.uno,
      dos: this.dos,
      tres: this.tres,
     //csmpo 4 es fecha
      cinco: this.cinco,
      seis: this.seis,
      siete: this.siete,
      ocho: this.ocho,
      nueve: this.nueve,
      diez: this.diez,
      once: this.once,
      doce: this.doce,
      trece: this.trece,
      catorce: this.catorce,
      quince: this.quince,
      dieciseis: this.dieciseis,
      diecisiete: this.diecisiete,
      dieciocho: this.dieciocho,
      diecinueve: this.diecinueve,
      veinte: this.veinte,
      veintiuno: this.veintiuno,   
    };
  

    
   
  this.camposFaltantes=[] 
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
          alert("ERROR")
          console.log('Error al enviar los datos:', error);
        }
      );
    }
  }
  


}
