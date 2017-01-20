import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HomeRoutes} from "./home.route";
import {RegisterComponent} from "../register/register.component";
import {CustomerService} from "../services/customer-service/customer.service";
import {SharedModule} from "../shared/shared.module";
import {CustomerLoginService} from "../services/customer-service/customer-login.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutes,
    SharedModule
  ],
  declarations: [
    RegisterComponent
  ],
  exports: [

  ],
  providers: [CustomerService, CustomerLoginService]
})
export class HomeModule {

}

