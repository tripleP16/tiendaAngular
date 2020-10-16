import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  total:number ;
  constructor(public dataService: DataService, private router:Router) { }

  ngOnInit(): void {
    this.dataService.obtenerCarro();
  }
  pagar(){
    
    this.dataService.pagar();
    setTimeout(() => {
      this.router.navigate(['bodega']);
    }, 250);
   
    
  }
}
