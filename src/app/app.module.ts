import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SevenWonderComponent } from './seven-wonder/seven-wonder.component';

@NgModule({
  declarations: [
    AppComponent,
    SevenWonderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
