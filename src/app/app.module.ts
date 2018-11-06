import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { SocialComponent } from './social/social.component';
import { ToursComponent } from './tours/tours.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactErrorComponent } from './contact-error/contact-error.component';
import { AppRoutingModule } from './/app-routing.module';
import { SistemaApartadoComponent } from './sistema-apartado/sistema-apartado.component';
import { InicioComponent } from './inicio/inicio.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    SocialComponent,
    ToursComponent,
    AboutUsComponent,
    ContactErrorComponent,
    SistemaApartadoComponent,
    InicioComponent,
    PoliticasComponent,
    RecomendacionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
