import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SedesComponent } from './sedes/sedes.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';

@NgModule({
  declarations: [
    AppComponent,
    SedesComponent,
    DisciplinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
