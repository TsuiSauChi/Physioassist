import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePage } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
