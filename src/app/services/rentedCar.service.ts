import {Injectable, Inject} from "@angular/core";

import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL_RENTEDCARS} from "../app.tokens";
import {Observable} from "rxjs";

@Injectable()
export class RentedCarService{

  rentedCarId:number;

  constructor(
    @Inject(BASE_URL_RENTEDCARS) private baseUrl: string,
    private http: Http){

  }




  getId(id:number): void {
    let url = this.baseUrl + "/search/findRentedCar?customer=" + sessionStorage.getItem("customerID") + "&car=" + id;

    console.log("Input id: " + id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
      .http
      .get(url, {headers})
      .map(resp => resp.json())
      .subscribe(id => {
        this.rentedCarId = id;
        this.deleteRentedCarEntry(this.rentedCarId);
      },
          error => console.log(error)
      );

  }



  deleteRentedCarEntry(rowID:number): void {
    let url = this.baseUrl+"/"+rowID;

    this.http
      .delete(url)
      .map(resp => resp.json())
      .subscribe(res => res)
}


}
