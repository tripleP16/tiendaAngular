import { Component, OnInit } from '@angular/core';
import {BarraNavegacionComponent} from '../barra-navegacion/barra-navegacion.component';
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
    setTimeout(() => {
      this.productos =  this.dataService.productos;
    }, 1500);
  }

}
