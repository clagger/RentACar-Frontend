import {Component} from '@angular/core';
import {CustomerLoginService} from "../services/customer-service/customer-login.service";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private customerLoginService:CustomerLoginService){

  }

  email:string;
  password:string;


  login(){
    this.customerLoginService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.email,this.password).then((response) => {//whether error or OK
      console.log(this.customerLoginService.getUserInfos());
    });
  }


}

