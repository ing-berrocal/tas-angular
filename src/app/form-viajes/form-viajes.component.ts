import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

import { ViajeServicioService } from './../Servicio/viaje-servicio.service';
import {Registro} from './../Servicio/Modelo';

@Component({
  selector: 'app-form-viajes',
  templateUrl: './form-viajes.component.html',
  styleUrls: ['./form-viajes.component.css']
})
export class FormViajesComponent implements OnInit {  
  
  showMensaje : boolean = false;
  ALERTAS: any[] = [{
    type: 'success',
    message: 'Registro procesado correctamente',
  }, {
    type: 'danger',
    message: 'Error procesando registro',
  }
];

alerta: any = null;

  archivo: File = null;

  registroForm = new FormGroup({
    documento: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
      Validators.pattern(/^\d+$/)      
    ]),
    archivo: new FormControl(null,[
      Validators.required,
      Validators.pattern(/.txt$/gs)
    ])      
  });

  constructor(private viajeServicio:ViajeServicioService) { 
    
  }

  ngOnInit(): void {    
  }

  handleFileInput(files: FileList) {
    this.archivo = files.item(0);
    this.registroForm.patchValue({archivo:this.archivo.name});
  }

  get controles(){
    return this.registroForm.controls;
  }

  onSubmit() {
    console.log(this.registroForm)
    // TODO: Use EventEmitter with form value        
    if(this.registroForm.status =="VALID"){
      this.viajeServicio.registrar(this.registroForm.value.documento,this.archivo)
      .subscribe(data=>{
        this.mostrarMensaje(0);
      },error=>{
        this.mostrarMensaje(1);
      },
      ()=>{this.registroForm.reset()})    
    }    
  }  

  mostrarMensaje(index:number){
    this.showMensaje = true;
    this.alerta = this.ALERTAS[index];
  }

  cerrar(){
    this.showMensaje = false;
  }
}
