import { Injectable } from '@angular/core';
import {HttpServiceService} from './http-service.service';
import { Response } from '@angular/http';
import {Usuario} from '../models/Usuario';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  public usuarios: Usuario[] = [];

  constructor( private http: HttpServiceService){ }

 


    getUsers(){
      let check : boolean  = false ;
       this.http.obtenerUsuarios().subscribe( (data: any)  => {
        this.usuarios = data;
      })
     
    }

  

  validUsers(email:string, password:string){
    let check: boolean = false; 
    for (let i = 0; i < this.usuarios['usuarios'].length; i++) {
     if(email == this.usuarios['usuarios'][i]['email'] && password == this.usuarios['usuarios'][i]['contrasena']){
       check = true;
     }
      
    }

    return check ;
  
  }

 

}