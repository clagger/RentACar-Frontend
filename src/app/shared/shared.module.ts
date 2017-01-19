/**
 * Created by Christian on 1/19/2017.
 */
import {NgModule} from "@angular/core";
import { CommonModule} from '@angular/common';
import {CarCardComponent} from "../car-card/car-card.component";
import {CustomerService} from "../services/customer-service/customer.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarCardComponent
  ],
  providers: [
    CustomerService
  ],
  exports: [
    CarCardComponent
  ]

})
export class SharedModule {

}
