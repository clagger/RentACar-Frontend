import {Component} from '@angular/core';
import {CustomerLoginService} from "../services/customer-service/customer-login.service";
import {Customer} from "../entities/customer";


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private customerLoginService:CustomerLoginService){

  }


  customerInfo: Customer = this.customerLoginService.getUserInfos();


}

