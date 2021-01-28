import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideosComponent } from './pages/videos/videos.component';
import { MercadopagoComponent } from './pages/mercadopago/mercadopago.component';
import { FormulariopagoComponent } from './pages/formulariopago/formulariopago.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'mercadopago', component: MercadopagoComponent},
  {path: 'formulario', component: FormulariopagoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
