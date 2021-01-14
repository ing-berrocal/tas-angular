import { Component, OnInit } from '@angular/core';

import { ViajeServicioService } from './../Servicio/viaje-servicio.service';
import { Registro } from './../Servicio/Modelo';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-list-viajes',
  templateUrl: './list-viajes.component.html',
  styleUrls: ['./list-viajes.component.css']
})
export class ListViajesComponent implements OnInit {

  listado : Registro[];
  
  constructor(private servicio : ViajeServicioService) { }

  ngOnInit(): void {
    this.servicio.getListado().subscribe(data=>{
      this.listado = data;
    });
  }

  descargarArchivo(registro:Registro){    
    saveAs(this.dataURItoBlob(registro.resultado),registro.documento.concat('.txt'))
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array]);    
    return blob;
 }
}
