import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http : HttpClient) { }



  // formulario1       
percecion():Observable<any>{
  return this.http.get("http://localhost:3100/percepcion")
}


cursofavorito():Observable<any>{
  return this.http.get("http://localhost:3100/cursofavorito")
}
  // general
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

totalllenado():Observable<any>{
  return this.http.get("http://localhost:3100/llenado")

}

fechacalificaciones(datos : any):Observable<any>{
  return this.http.post("http://localhost:3100/fechacalificaciones", datos)
}

fechaperceion(datos :any):Observable<any>{
  return this.http.post("http://localhost:3100/fechapercion", datos)
}

fecharecomendacion(datos : any):Observable<any>{
  return this.http.post("http://localhost:3100/fecharecomendacion", datos)
}


fechacursofavorito(datos : any):Observable<any>{
  return this.http.post("http://localhost:3100/fechacursofavorito", datos)
}

}
