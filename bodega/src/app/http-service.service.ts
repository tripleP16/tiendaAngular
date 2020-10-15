import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Usuario} from '../models/Usuario';
import {Producto} from '../models/Producto';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url = 'http://localhost/tiendaAngular/bodega/src/php/';

  constructor(private http:Http) { }

  obtenerUsuario(user:Usuario){
    return this.http.post(`${this.url}iniciarSesion.php`, JSON.stringify(user));
  }

  obtenerInventario(){
    return this.http.get(`${this.url}devolverBodega.php`);
  }

  agregarAlCarro(producto:Producto){
    return this.http.post(`${this.url}agregarCarro.php`, JSON.stringify(producto) );
  }

  verCarro(user:Usuario){
    return this.http.post(`${this.url}devolverCarro.php`, JSON.stringify(user));
  }
  pagar(user:Usuario){
    return this.http.post(`${this.url}pagar.php`, JSON.stringify(user));
  }
}
