import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
texto="";
mostrar=false;
subscripcion: Subscription

  constructor(private _imagenService: ImagenService) {
  this.subscripcion= this._imagenService.getError().subscribe(data=>{
  this.texto=data;
  this.mostrarMensaje();
  })
   }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.subscripcion.unsubscribe();
  }
  mostrarMensaje(){
  this.mostrar=true;
  setTimeout(() => {
    this.mostrar=false;
  }, 2000);
  }

}
