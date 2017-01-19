import {Injectable, Inject} from "@angular/core";

import {Http, URLSearchParams, Headers} from "@angular/http";
import {BASE_URL_RENTEDCARS} from "../app.tokens";
import {Observable} from "rxjs";

@Injectable()
export class RentedCarService{

  constructor(
    @Inject(BASE_URL_RENTEDCARS) private baseUrl: string,
    private http: Http){

  }



  rentedCarId:string;


  getId(id:number): void {
    let url = this.baseUrl + "/search/findRentedCar?customer=" + sessionStorage.getItem("customerID") + "&car=" + id;

    console.log("Input id: " + id);

    let headers = new Headers();
    headers.set('Accept', 'application/json');

    this
      .http
      .get(url, {headers})
      .map(resp => resp.json())
      .subscribe((id) => {
        console.log("While subscription id: ", id);
        this.rentedCarId = id;
      },
        (error) => console.log(error)
      )

  }

}
