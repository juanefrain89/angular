import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Formulario3Service {
  
  
  constructor(private http : HttpClient) { }
url = "http://localhost:3100/tercerformulario"
mandar(info : any):Observable<any>{
return this.http.post(this.url, {info})
}

traer():Observable<any>{
  return this.http.get("http://localhost:3100/gettercero")
}
fecha(info : any):Observable<any>{
  return this.http.post("http://localhost:3100/fechatres",{info})
}
  
  
}
