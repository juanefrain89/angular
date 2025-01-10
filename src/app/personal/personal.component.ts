import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartEvent, ChartConfiguration, ChartData } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../graficas.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss'
})
export class PersonalComponent {

  nancy: any = 0;
  oscar: any = 0;
  daniel: any = 0;
  harry: any = 0;
  diana: any = 0;
  homero: any = 0;
  hector: any = 0;
  jesus: any = 0;
  mostrar = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barChartData!: ChartData<'bar'>;

  constructor(private servicio: GraficasService) {}

  arr: any[] = [];

  ngOnInit(): void {
    this.servicio.instructores().subscribe(
      (dats) => {
        console.log(dats);
        
        this.instructores(dats.Datos);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  instructores(datos: any) {
    console.log("hdhdhdujidkl");

    // Inicializamos las variables a 0 antes de cada actualización
    this.nancy = 0;
    this.oscar = 0;
    this.daniel = 0;
    this.harry = 0;
    this.diana = 0;
    this.homero = 0;
    this.hector = 0;
    this.jesus = 0;

    for (let index = 0; index < datos.length; index++) {
      const element = datos[index].ocho;

      switch (element) {
        case "1":
          this.nancy += 1;
          break;
        case "2":
          this.oscar += 1;
          break;
        case "3":
          this.daniel += 1;
          break;
        case "4":
          this.harry += 1;
          break;
        case "5":
          this.diana += 1;
          break;
        case "6":
          this.homero += 1;
          break;
        case "7":
          this.hector += 1;
          break;
        case "8":
          this.jesus += 1;
          break;
        default:
          console.log(element);
          break;
      }
    }

    // Mostrar el gráfico si hay datos
 
console.log(this.nancy);

    // Configuración de los datos para el gráfico de barras
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!['y']!.min = 0;
    }

    // Ahora asignamos los datos completos al gráfico
    this.barChartData = {
      labels: ['Nancy Guerra', 'Oscar González', 'Daniel Medina', "Harry de la Peña", "Diana Olvera", "Homero Canales", "Héctor Guerra", "Jesús Méndez"],
      datasets: [
        {
          label: 'calificaciones',
          data: [
            this.nancy, this.oscar, this.daniel, this.harry, this.diana, this.homero, this.hector, this.jesus
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
      y: {
    
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
