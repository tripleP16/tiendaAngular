import { Component, OnInit } from '@angular/core';
import {BarraNavegacionComponent} from '../barra-navegacion/barra-navegacion.component';
import { ActivatedRoute } from '@angular/router';
import {Producto} from 'src/models/Producto';
@Component({
  selector: 'ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {
  producto:Producto = new Producto();
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.producto.id = this.rutaActiva.snapshot.params.id;
    this.producto.titulo = this.rutaActiva.snapshot.params.titulo; 
    this.producto.precio =  this.rutaActiva.snapshot.params.precio; 
    this.producto.src = this.rutaActiva.snapshot.params.src; 
    this.producto.cantidad = this.rutaActiva.snapshot.params.cantidad; 
    console.log(this.producto);
  }

}
