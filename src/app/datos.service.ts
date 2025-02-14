import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
}) 
export class DatosService {
  private usuariosUrl = 'https://api-rh.tlea.online/obtenerJerarquiasActivas';
  constructor(private http: HttpClient) {}
  obtenerUsuarios(): Observable<any> {
    return this.http.get<any>(this.usuariosUrl);
  }

  obtenerempleados():Observable<any>{
    return this.http.get<any>("https://api-rh.tlea.online/obtenerEmpleados")
  }
  obtenerpuesto():Observable<any>{
    return this.http.get("https://api-rh.tlea.online/obtenerPuestos")
  }

  obtenerdepartamentos():Observable<any>{
    return this.http.get("https://api-rh.tlea.online/obtenerDepartamentos")
  }
}