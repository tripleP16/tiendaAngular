import { Injectable } from '@angular/core';
import {HttpServiceService} from './http-service.service';
import {Usuario} from '../models/Usuario';
import 'rxjs/Rx';


@Injectable()
export class DataService {
  user: Usuario = new Usuario() ;
  mensaje:string ; 


  constructor( private http: HttpServiceService){ }

  iniciarSesion(contrasena:string, email:string){
    this.user.email = email; 
    this.user.password = contrasena; 
    this.http.obtenerUsuario(this.user).subscribe(datos => {
      let aux = JSON.parse(datos['_body']);
      if(aux['resultado']=='OK'){
        this.user.id =  aux['user'];
      }

      this.mensaje = aux['mensaje'];
    })

  }
 

}