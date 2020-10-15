import { Injectable } from '@angular/core';
import {HttpServiceService} from './http-service.service';
import {Usuario} from '../models/Usuario';
import 'rxjs/Rx';
import { Producto } from 'src/models/Producto';
import { ProductoCarro } from 'src/models/ProductoCarro';


@Injectable()
export class DataService {
  user: Usuario = new Usuario() ;
  mensaje:string ; 
  productos:Producto [] = [];
  catalogo : Producto[]; 
  numeroItems:number = 0; 
  carrito:ProductoCarro[]=[];
  total:number = 0;

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
    this.buscarProducto(producto.id, producto.cantCarro);
    this.http.agregarAlCarro(producto).subscribe(datos => {
      let aux = JSON.parse(datos['_body']);
      if(aux['resultado']=='OK'){
        console.log("OK");
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

  buscarProducto(id:number, cantidadRestar:number){
    for (let i = 0; i < this.productos.length; i++) {
      if(this.productos[i].id == id){
        this.productos[i].cantidad -= cantidadRestar;
      }
      
    }
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
        this.carrito = aux['productos'];
        this.total = 0;
        this.obtenerTotal();
      })
    }
    pagar(){
      this.http.pagar(this.user).subscribe();
      this.obtenerCarro();
      this.total = 0;
    }
    obtenerTotal(){
      for (let i = 0; i < this.carrito.length; i++) {
        this.total += this.carrito[i].total_producto;
        
      }
    }

 

}