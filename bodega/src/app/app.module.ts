import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpServiceService} from './http-service.service';
import { DataService } from './data.service';
import { TiendaComponent } from './tienda/tienda.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CarritoComponent } from './carrito/carrito.component';
import { VerMasComponent } from './ver-mas/ver-mas.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    TiendaComponent,
    BarraNavegacionComponent,
    CarritoComponent,
    VerMasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule , 
    HttpModule
  ],
  providers: [HttpServiceService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
