
import { Component, Input, OnInit, ViewChild, SimpleChanges, viewChild } from '@angular/core';
import { ChartType, ChartEvent, ChartConfiguration, ChartData } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { GraficasService } from '../graficas.service';
@Component({
  selector: 'app-graficarecomendacion',
  templateUrl: './graficarecomendacion.component.html',
  styleUrl: './graficarecomendacion.component.scss'
})
export class GraficarecomendacionComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false; 
   @Input() datos: any;

  @Input() barChartData!: ChartData<'bar'>;
@Input() var : any





ngOnChanges(changes: SimpleChanges) {
  if (changes['datos'] && this.datos) {
console.log(this.datos);



    this.grafi(this.datos); 
  }
}


  constructor(private servicio4 : GraficasService) {}
  valor: any =2
  ngOnInit(): void {
    this.servicio4.recomendacion().subscribe(
      (datos)=>{
        console.log(datos);
        let promedio1 = datos 
        this.grafi(datos)
        
      },
    (err)=>{
      console.log(err);
      
    }
    )




  }



grafi(datos : any){
  
  if (this.horizontal) {
    this.barChartOptions!.indexAxis = 'y';
    this.barChartOptions!.scales!['y']!.min = 0;
  }
console.log(datos.reingreso);

  this.barChartData = {
    labels: ['Recomendacion', 'Redes sociales', 'Plataformas(OCC, INDEED, etc)', "Reingreso"],  
    datasets: [
      {
        label: 'calificaciones',  
        data: [datos.recomendacion, datos.redessociales, datos.Plataformas, datos.reingreso],  
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',  
          'rgba(54, 162, 235, 0.7)',  
          'rgba(255, 206, 86, 0.7)'  
        ],
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      },
     
    ]
  };
}





  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {}
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  public barChartType: ChartType = 'bar';  
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {}

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {}

  public randomize(): void {
    this.barChartData.datasets.forEach(g => {
      let data: number[] = [];
      g.data.forEach((__) => {
        data.push(Math.round(Math.random() * 100));
      });
      g.data = data;
    });
    this.chart?.update();
  }

}
