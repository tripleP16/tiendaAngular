import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  numeroDeItems:number  = 0;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
 
    
  }

}
