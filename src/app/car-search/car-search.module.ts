/**
 * Created by Christian on 1/17/2017.
 */


import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CarSearchComponent} from "./car-search.component";

import {CarSearchRouterModule} from "./car-search.routes";
import {CarService} from "../services/car.service";
import {CarCardComponent} from "../car-card/car-card.component";
import {SharedModule} from "../shared/shared.module";
import {Ng2Bs3ModalModule} from "ng2-bs3-modal/ng2-bs3-modal";
import {RentedCarService} from "../services/rentedCar.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarSearchRouterModule,
    SharedModule
  ],
  declarations: [
    CarSearchComponent,

  ],
  exports: [
    CarSearchComponent
  ],
  providers: [
    CarService, RentedCarService
  ]
})

export  class CarSearchModule {

}
