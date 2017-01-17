import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import {AppRouterModule} from "./app.routes";
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {BASE_URL} from './app.tokens';

import { HomeComponent } from './home/home.component';


const BASE_URL_FOR_PRODUCTION = "https://localhost:8080/";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [{provide: BASE_URL, useValue: BASE_URL_FOR_PRODUCTION}

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
