import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TemporizadorComponent } from './temporizador/temporizador.component';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    TemporizadorComponent,
    GaleriaComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
