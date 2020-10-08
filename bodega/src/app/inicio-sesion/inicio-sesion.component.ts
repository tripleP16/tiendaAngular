import { Component} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent  {
  mensaje:string;
  
  Color:string = 'red';
  constructor(private dataService: DataService) { }
  enviarForm(form){
    if (form.valid){
      let check :boolean ;
      this.dataService.getUsers(); 
      this.Color = 'Blue'; 
      this.mensaje = "Comprobando datos......"
      setTimeout(() => {
        check = this.dataService.validUsers(form.value.email, form.value.contrasena);
        if(check ){
          this.Color = 'green'; 
          this.mensaje = 'Iniciando Sesion'; 
        }else{
          this.Color = 'red'; 
          this.mensaje = 'El email o la contraseña no es valido';
        }
      }, 1000);
      
    }else {
      this.mensaje = "Por favor revise los campos "
    }
  }
}
