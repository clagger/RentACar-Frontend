import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HomeRoutes} from "./home.route";
import {RegisterComponent} from "../register/register.component";
import {CustomerService} from "../customer-service/customer.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutes
  ],
  declarations: [
    RegisterComponent
  ],
  exports: [

  ],
  providers: [CustomerService]
})
export class HomeModule {

}

