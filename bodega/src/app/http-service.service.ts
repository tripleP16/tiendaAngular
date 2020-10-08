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

  constructor(private http:Http) { }

  obtenerUsuarios(){
    return this.http.get('https://bodega-22aa3.firebaseio.com/.json')
    .map((response: Response)=> response.json());
    }
}
