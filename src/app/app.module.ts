import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contador } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbZModule } from './db-z/db-z.module';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    Contador,
    DbZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
