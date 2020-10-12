import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Usuario} from '../models/Usuario';
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

}
