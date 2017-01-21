import {Component} from '@angular/core';
import {CustomerLoginService} from "./services/customer-service/customer-login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  isLoggedOn:boolean;

  constructor(private customerLoginService:CustomerLoginService,private router:Router){
    this.router.events.subscribe((ev) => { // <= This is needed in order to disable the nav-bar for login and register site
      if(ev.url === "/login" || ev.url === "/home")
        this.isLoggedOn = this.customerLoginService.isLoggedIn();
    })
  }


  logOut() {
    this.customerLoginService.logOut();
    this.router.navigateByUrl('/login');
  }



}
