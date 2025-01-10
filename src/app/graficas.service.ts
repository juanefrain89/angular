import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http : HttpClient) { }
  url = "http://localhost:3100/graficasall"
obtenerall():Observable<any>{
return this.http.get(this.url)
}

instructores():Observable<any>{
  return this.http.get("http://localhost:3100/instructores")
}


recomendacion():Observable<any>{
  return this.http.get("http://localhost:3100/recomendacion")
}

}
