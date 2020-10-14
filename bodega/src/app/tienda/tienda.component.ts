import { Component, OnInit } from '@angular/core';
import {BarraNavegacionComponent} from '../barra-navegacion/barra-navegacion.component';
import {Producto} from 'src/models/Producto';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos : Producto [] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.obtenerProductos();
    setTimeout(() => {
      this.productos =  this.dataService.productos;
    }, 250);

    
  }
  filtrarCatalogo(filtro:string){
    this.productos = this.dataService.filtrarProducto(filtro);
  }

  agregarCarro(producto:Producto){
    this.dataService.agregarCarro(producto);
    this.dataService.obtenerCarro();
  }
}
