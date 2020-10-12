import { Component} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent  {
  mensaje:string;
  
  Color:string = 'red';
  constructor(private dataService: DataService, private router:Router) { }
  async enviarForm(form){
    if (form.valid){
      this.dataService.iniciarSesion(form.value.contrasena, form.value.email);
      setTimeout(() => {
        if(this.dataService.user.id !=null){
          this.router.navigate(['bodega'])
        }else{
          this.mensaje =  this.dataService.mensaje;
        }
      }, 1000);
    }else {
      this.Color = 'red'; 
      this.mensaje = 'Error en el email o en la contraseña';
    }
    
  }
 
}
