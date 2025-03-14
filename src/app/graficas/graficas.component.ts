import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartEvent, ChartConfiguration, ChartData } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartOptions } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { GraficasService } from '../graficas.service';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrl: './graficas.component.scss'
})
export class GraficasComponent { @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barChartData!: ChartData<'bar'>;
@Input() var : any
  constructor(private servicio4 : GraficasService) {}
  valor: any =2
  ngOnInit(): void {
    this.servicio4.obtenerall().subscribe(
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

  this.barChartData = {
    labels: ['formulario1', 'formulario2', 'formulario3'],  
    datasets: [
      {
        label: 'calificaciones',  
        data: [datos.promedio1, datos.promedio2, datos.promedio3],  
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
      y: {
        min: 10,
        
    }
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
