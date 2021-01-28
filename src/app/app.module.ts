import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

import { registerLocaleData } from '@angular/common';
import localeARG from '@angular/common/locales/es-AR';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { VideosComponent } from './pages/videos/videos.component';
import { MercadopagoComponent } from './pages/mercadopago/mercadopago.component';
import { MercadopagoservService } from './services/mercadopagoserv.service';
import { FormulariopagoComponent } from './pages/formulariopago/formulariopago.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


registerLocaleData(localeARG);
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    VideosComponent,
    MercadopagoComponent,
    FormulariopagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MercadopagoservService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
