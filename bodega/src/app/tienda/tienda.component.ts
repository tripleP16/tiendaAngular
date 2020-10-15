import { Component, OnInit } from '@angular/core';

import {Producto} from 'src/models/Producto';
import { DataService } from '../data.service';

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
    this.dataService.obtenerCarro();
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
