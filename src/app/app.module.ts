import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeVaxComponent } from './home-vax/home-vax.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HomeVaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCsvParserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
