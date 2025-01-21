
import { Component, Input, OnInit, ViewChild, SimpleChanges, viewChild } from '@angular/core';
import { ChartType, ChartEvent, ChartConfiguration, ChartData } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../../graficas.service';

@Component({
  selector: 'app-percepcion',
  templateUrl: './percepcion.component.html',
  styleUrl: './percepcion.component.scss'
})
export class PercepcionComponent {
  @Input() datos: any;
  seis: any = 0;
  siete: any = 0;
  ocho: any = 0;
  nueve: any = 0;
  diez: any = 0;
  once: any = 0;
  doce: any = 0;
  jesus: any = 0;
  mostrar = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barChartData!: ChartData<'bar'>;

  constructor(private servicio: GraficasService) {}

  arr: any[] = [];

  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['datos'] && this.datos) {
console.log(this.datos);



      this.instructores(this.datos); 
    }
  }


  ngOnInit(): void {
    this.servicio.percecion().subscribe(
      (dats) => {
        console.log(dats);
        this.seis = dats.seis
        this.siete = dats.siete
        this.ocho =  dats.ocho
        this.nueve =  dats.nueve
        this.diez =  dats.diez
        this.once =  dats.once
        this.doce =  dats.doce
        this.instructores(dats);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  instructores(datos: any) {
    console.log("hdhdhdujidkl");

  
    this.seis = 0;
    this.siete = 0;
    this.ocho = 0;
    this.nueve = 0;
    this.diez = 0;
    this.once = 0;
    this.doce = 0;
    this.jesus = 0;

 

    
 
console.log(this.seis, this.siete, this.ocho, this.nueve);

   
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!['y']!.min = 0;
    }

  
    this.barChartData = {
      labels: ['Preparado', 'Amigable', 'Consistente', "Alentador", "Claro", "Profesional", "Empatico"],
      datasets: [
        {
          label: 'calificaciones',
          data: [
           datos.seis, datos.siete ,datos.ocho,datos.nueve,datos.diez,datos.once, datos.doce
          ],  
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)', 
            'rgba(54, 162, 235, 0.7)', 
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
            'rgba(255, 159, 64, 0.7)',
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)'
          ],
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        },
      ]
    };
  }

  // Opciones del gráfico
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
  public barChartPlugins = [DataLabelsPlugin];

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
