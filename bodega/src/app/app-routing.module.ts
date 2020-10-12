import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
import {TiendaComponent} from './tienda/tienda.component';

const routes: Routes = [
  {path: 'login', component:InicioSesionComponent}, 
  {path: 'bodega', component:TiendaComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
