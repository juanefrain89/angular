import { Component } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent {
  listOfData = [
    {
      nEmpleado: 1,
      nombre: 'John Brown',
      status: 'Realizado',
      fechaInicio: '2023-01-15',
      fechaFin: '2023-12-31'
    },
    {
      nEmpleado: 2,
      nombre: 'Jim Green',
      status: 'No realizado',
      fechaInicio: '2022-11-10',
      fechaFin: '2023-10-30'
    },
    {
      nEmpleado: 3,
      nombre: 'Joe Black',
      status: 'Realizado',
      fechaInicio: '2023-03-20',
      fechaFin: '2024-03-19'
    },
    {
      nEmpleado: 4,
      nombre: 'María García',
      status: 'Realizado',
      fechaInicio: '2023-05-01',
      fechaFin: '2023-12-31'
    },
    {
      nEmpleado: 5,
      nombre: 'Carlos López',
      status: 'No realizado',
      fechaInicio: '2022-09-15',
      fechaFin: '2023-09-14'
    }
  ];

  // Configuración de paginación
  pageSize = 5; // Número de elementos por página
  pageIndex = 1; // Página actual
  total = this.listOfData.length; // Total de elementos

  // Método para manejar cambios en la paginación
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;
  }
}