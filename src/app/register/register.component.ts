import {Component} from '@angular/core';
import {Customer} from "../entities/customer";
import {CustomerService} from "../customer-service/customer.service";


@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


   firstName: string;
   lastName: string;
   email: string;
   birthday: string;
   address: string;
   phoneNumber: number;
   driverLicenseNumber: string;
   password: string;


  constructor(private customerService: CustomerService){

  }

  customer: Customer;
  message: string;

  save(): void {
    console.log(this.password);
    this
      .customerService
      .createCustomer(this.firstName,this.lastName,this.address,this.phoneNumber,this.email,this.birthday,this.driverLicenseNumber,this.password)
      .then(customer => {
        this.customer = customer;
        this.message = "Data saved!"
      });
  }



}
