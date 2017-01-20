import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Inject} from "@angular/core";
import {BASE_URL_CUSTOMERS} from "../../app.tokens";
import {Customer} from "../../entities/customer";
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";


@Injectable()
export class CustomerService {

  constructor(@Inject(BASE_URL_CUSTOMERS) private baseUrl:string, private http: Http,){

  }



  createCustomer(firstName:string,lastName:string,address: string,phoneNumber: number,email: string,birthDate: string,driverLicense: string,password: string): Observable<Customer>{
    let headers = new Headers();
    headers.set('Accept', 'application/json');

    //transform date into acceptable form for backend
    let datePipe = new DatePipe('de-DE');
    birthDate = datePipe.transform(birthDate, 'dd.MM.yyyy');

    return this.http
      .post(this.baseUrl, {firstName:firstName, lastName:lastName, address:address, phoneNumber:phoneNumber, email:email, birthDate:birthDate,
                           driverLicenseNumber:driverLicense, password:password}, {headers: headers})
      .map(res => res.json());
  }


}

