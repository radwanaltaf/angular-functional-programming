import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomeVaxComponent } from './home-vax/home-vax.component';
import { VaxRegStateComponent } from './vax-reg-state/vax-reg-state.component';
import { SumVaxComponent } from './sum-vax/sum-vax.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HomeVaxComponent,
    routingComponents,
    VaxRegStateComponent,
    SumVaxComponent
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
