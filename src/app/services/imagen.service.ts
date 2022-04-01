import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
private $error = new Subject<string>()
private terminoBusqueda$ = new Subject<string>();



  constructor(private http: HttpClient) { }

  setError(mensaje:string){/* este metodo va a pasae el mensaj de error a loscomponentes */
  this.$error.next(mensaje)
  }
  getError():Observable<string>{
  return this.$error.asObservable();
  }
  enviarTerminoBusqueda(termino:string){
  this.terminoBusqueda$.next(termino);
  }
  getTerminoBusqueda():Observable<string>{
  return this.terminoBusqueda$.asObservable();
  }
  getImagenes(termino:string, imagenesPorPagina:number,paginaActual:number): Observable<any>{
  const KEY ='26394263-b9cfc21e1a7f7bdb29c68a69f'
  const URL ='https://pixabay.com/api/?key='+KEY+'&q='+termino+'&per_page='+imagenesPorPagina+"&page="+paginaActual;
  return this.http.get(URL)
  }
}
