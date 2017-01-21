import {Component} from '@angular/core';
import {CustomerLoginService} from "../services/customer-service/customer-login.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private customerLoginService:CustomerLoginService,private router:Router){

  }

  email:string;
  password:string;


  login(){
    this.customerLoginService.fetchTokenUsingPasswordFlowAndLoadUserProfile(this.email,this.password).then((response) => {//whether error or OK
      console.log(this.customerLoginService.getUserInfos());
      this.router.navigate(['home']);
    });
  }


}

