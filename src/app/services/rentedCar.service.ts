/**
 * Created by Christian on 1/19/2017.
 */

import {Injectable, Inject} from "@angular/core";

import {Http, URLSearchParams, Headers} from "@angular/http";
import {Car} from "../entities/car";
import {BASE_URL_RENTEDCARS} from "../app.tokens";

@Injectable()
export class RentedCarService{

  rentedCarId:string;

  constructor(
    @Inject(BASE_URL_RENTEDCARS) private baseUrl: string,
    private http: Http){

  }


  delete(id:number):void{
    let url = this.baseUrl+"/search/findRentedCar?customer="+sessionStorage.getItem("customerID")+"&car="+id;

    console.log(id+"b4");

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    //headers.set('Authorization', 'Basic ' + btoa('admin:admin')); //basic auth

    this
      .http
      .get(url, {headers})
      .map(resp => resp.json())
      .map(
        (id) => {
          this.rentedCarId = id.toString();
          console.log(this.rentedCarId +"in");
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );

    console.log(this.rentedCarId+"late");
  }
}
