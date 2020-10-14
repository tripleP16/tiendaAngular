import { Injectable } from '@angular/core';
import {HttpServiceService} from './http-service.service';
import {Usuario} from '../models/Usuario';
import 'rxjs/Rx';
import { Producto } from 'src/models/Producto';


@Injectable()
export class DataService {
  user: Usuario = new Usuario() ;
  mensaje:string ; 
  productos:Producto [] = [];
  catalogo : Producto[]; 
  numeroItems:number = 0; 
  

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

  agregarCarro(producto:Producto){
    producto.id_user = this.user.id;
    this.http.agregarAlCarro(producto).subscribe(datos => {
      let aux = JSON.parse(datos['_body']);
      if(aux['resultado']=='OK'){
        console.log("OK");
        this.numeroItems ++ ; 
      }
    })
  }

  obtenerProductos(){
    this.http.obtenerInventario().subscribe(datos => {
      let aux = JSON.parse(datos['_body']);
      this.productos = aux['productos'];
      for (let i = 0; i < aux.length; i++) {
        console.log(i);
        
      }
    })
  }

  public filtrarProducto(filtro:string){
    this.productos
    console.log(this.productos) 
    filtro.toLowerCase(); 
    let itemMatch : Producto[] = []; 
    for (let i = 0; i < this.productos.length; i++) {
      let nombre = this.productos[i].titulo.toLowerCase(); 
      if(nombre.includes(filtro)){ 
        itemMatch.push(this.productos[i])} 
      }
      return itemMatch; 
    }

    obtenerCarro(){
      this.http.verCarro(this.user).subscribe(datos =>{
        let aux = JSON.parse(datos['_body'])
        this.numeroItems = aux['productos'].length;
      })
    }

 

}