import { Injectable } from '@angular/core';
import {URLSearchParams} from "@angular/http";
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";
import {Inject} from "@angular/core";
import {BASE_URL_CUSTOMERS} from "../app.tokens";
import {Customer} from "../entities/customer";



@Injectable()
export class CustomerService {

  constructor(@Inject(BASE_URL_CUSTOMERS) private baseUrl:string, private http: Http,){

  }



  createCustomer(firstName:string,lastName:string,address: string,phoneNumber: number,email: string,birthDate: string,driverLicense: string,password: string): Promise<Customer>{
    let headers = new Headers();
    headers.set('Accept', 'application/json');
    console.log(password);
    return this.http
      .post(this.baseUrl, {firstName:firstName, lastName:lastName, address:address, phoneNumber:phoneNumber, email:email, birthday:birthDate,
                           driverLicenseNumber:driverLicense, password:password}, {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(err => console.log(err));
  }


}

