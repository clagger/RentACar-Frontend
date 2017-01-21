import {Component} from '@angular/core';
import {CustomerLoginService} from "./services/customer-service/customer-login.service";


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private customerLoginService:CustomerLoginService){
  sessionStorage.setItem("customer", "1");
  }

  isLoggedIn: boolean = this.customerLoginService.hasValidAccessToken();



}
