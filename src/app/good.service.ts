import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoodService {
  constructor(private http : HttpClient) { }
url = "http://localhost:3100/primerformulario"
mandar(info : any):Observable<any>{
return this.http.post(this.url, {info})
}

traer():Observable<any>{
  return this.http.get("http://localhost:3100/ggg")
}


fecha(info : any):Observable<any>{
  return this.http.post("http://localhost:3100/fechag",{info})
}


traertodo():Observable<any>{
  return this.http.get("http://localhost:3100/obtenerformulariosinfecha")
}
  
}
