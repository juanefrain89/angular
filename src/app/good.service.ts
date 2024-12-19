import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoodService {
  constructor(private http : HttpClient) { }
url = "http://localhost:4200"
mandar(info : any):Observable<any>{
return this.http.post("url", {info})
}

  
}
