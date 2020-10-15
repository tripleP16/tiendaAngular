import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
@HostListener('window:unload', ['$event'])
@Component({
  selector: 'barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  numeroDeItems:number  = 0;
  constructor(private dataService: DataService, private router:Router) { }

  ngOnInit(): void {
 
    
  }
  unloadHandler(event) {
    window.sessionStorage.clear();
}
  cerrarSesion(){
    this.unloadHandler(event);
    this.router.navigate(['login']);
  }
}
