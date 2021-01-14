import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Registro, getEl} from './Modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajeServicioService {

  constructor(private http: HttpClient) { }

  getListado() : Observable<Registro[]>{
    //return getEl();    
    return this.http.get<Registro[]>('http://localhost:8080/api/registro');    
  }

  registrar(documento:string,archivo:File) : Observable<any>{

    let form = new FormData();
    form.append('documento',documento);
    form.append('archivo',archivo);
    return this.http.post<any>('http://localhost:8080/api/registro',form, {observe: 'response'});    
  }
}
