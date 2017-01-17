/**
 * Created by Christian on 1/17/2017.
 */


import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CarSearchComponent} from "./car-search.component";
import {CarService} from "./services/car.service";
import {CarSearchRouterModule} from "./car-search.routes";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarSearchRouterModule
  ],
  declarations: [
  CarSearchComponent
  ],
  exports: [
    CarSearchComponent
  ],
  providers: [
    CarService
  ]
})

export  class CarSearchModule {

}
