import { Component } from '@angular/core';
import { ChartConfiguration, ChartType, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrl: './graficas.component.scss'
})
export class GraficasComponent {
chartipo : ChartType = "bar"
chartData : ChartConfiguration["data"]= {labels:[],datasets:[]}
chartOptions : ChartOptions={
  responsive: true,
  maintainAspectRatio:false,
  plugins:{
    legend:{
      display: true,
      position:"top"
    },
  },
  scales:{
    x:{
      title:{
        display:true,
        text: "resultados"
      },
    },
    y:{
beginAtZero:true,
title:{
  display: true,
  text:"formularios"
}
    }
  }
}

ngOnInit(): void {

  let resultados = [66, 78, 99]
  this.chartData={
    labels:["primer", "segundo", "tercero"],
    datasets:[
      {
        label:"jsjsj",
        data: resultados,
        backgroundColor:"blue"
      }
    ]
  }

}


}
