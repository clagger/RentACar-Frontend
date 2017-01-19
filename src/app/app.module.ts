import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import {AppRouterModule} from "./app.routes";
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {BASE_URL_CARS, BASE_URL_CUSTOMERS, BASE_URL_RENTEDCARS} from './app.tokens';

import { HomeComponent } from './home/home.component';
import {CarSearchModule} from "./car-search/car-search.module";
import {HomeModule} from "./home/home.module";


const BASE_URL_CARS_PRODUCTION = "https://localhost:8080/cars";
const BASE_URL_CUSTOMERS_PRODUCTION = "https://localhost:8080/customers";
const BASE_URL_RENTEDCARS_PRODUCTION = "https://localhost:8080/rentedcars";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    HomeModule,
    CarSearchModule
  ],
  providers: [{provide: BASE_URL_CARS, useValue: BASE_URL_CARS_PRODUCTION},
    {provide:BASE_URL_CUSTOMERS, useValue: BASE_URL_CUSTOMERS_PRODUCTION},
    {provide:BASE_URL_RENTEDCARS, useValue: BASE_URL_RENTEDCARS_PRODUCTION
                }

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
