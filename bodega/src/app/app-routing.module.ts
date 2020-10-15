import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioSesionComponent} from './inicio-sesion/inicio-sesion.component';
import {TiendaComponent} from './tienda/tienda.component';
import{VerMasComponent} from './ver-mas/ver-mas.component';
import {CarritoComponent} from './carrito/carrito.component';

const routes: Routes = [
  {path: 'login', component:InicioSesionComponent}, 
  {path: 'bodega', component:TiendaComponent}, 
  {path: 'mas/:id/:titulo/:cantidad/:src/:precio', component:VerMasComponent},
  {path:'carrito', component:CarritoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
