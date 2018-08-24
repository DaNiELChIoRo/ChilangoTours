import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ToursComponent } from './tours/tours.component';
  import { PoliticasComponent } from './politicas/politicas.component';
  import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { SistemaApartadoComponent } from './sistema-apartado/sistema-apartado.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path:'tours',
    component: ToursComponent
  },
  {
    path:'politicas',
    component: PoliticasComponent
  },
  {
    path:'recomendaciones',
    component: RecomendacionesComponent
  },
  {
    path: 'sistema-apartado',
    component:SistemaApartadoComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
