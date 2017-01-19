import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HomeRoutes} from "./home.route";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutes
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [

  ],
  providers: []
})
export class HomeModule {

}

