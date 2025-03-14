import { Component, Input, OnInit, ViewChild, SimpleChanges, viewChild } from '@angular/core';
import { ChartType, ChartEvent, ChartConfiguration, ChartData } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../../graficas.service';


@Component({
  selector: 'app-totalllenado',
  templateUrl: './totalllenado.component.html',
  styleUrl: './totalllenado.component.scss'
})
export class TotalllenadoComponent {
  @Input() datos: any;
  gemba: any = 0;
  operador: any = 0;
  liderazgo: any = 0;
  cliente: any = 0;
  seguridad: any = 0;
  conducta: any = 0;
  calidad: any = 0;
  tecnologia: any = 0;
scaling : any =0
valores : any =0
mostrar = false;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barChartData!: ChartData<'bar'>;

  constructor(private servicio: GraficasService) {}

  arr: any[] = [];



  ngOnChanges(changes: SimpleChanges) {
    if (changes['datos'] && this.datos) {
console.log(this.datos);


let info={
  formulario :this.datos.formularioResults.length,
  formulario2: this.datos.formulario2Results.length,
  formulario3: this.datos.formulario3Results.length
}
      this.instructores(info); 
    }
  }


  ngOnInit(): void {
    this.servicio.totalllenado().subscribe(
      (dats) => {

        console.log(dats);
        
        this.instructores(dats);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  instructores(datos: any) {
    console.log("hdhdhdujidkl");

   
    this.gemba = 0;
    this.operador = 0;
    this.liderazgo = 0;
    this.cliente = 0;
    this.seguridad = 0;
    this.conducta = 0;
    this.calidad = 0;
    this.tecnologia = 0;

    
 
console.log(this.gemba);

    
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!['y']!.min = 0;
    }

    // Ahora asignamos los datos completos al gráfico
    this.barChartData = {
      labels: ["Formulario1", "Formulario2", "Formulario3"],
      datasets: [
        {
          label: 'Total de llenados',
          data: [
           datos.formulario, datos.formulario2, datos.formulario3
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
