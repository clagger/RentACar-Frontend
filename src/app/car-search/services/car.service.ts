/**
 * Created by Christian on 1/17/2017.
 */


import {Injectable, Inject} from "@angular/core";
import {Car} from "../../entities/car";
import {BASE_URL_CARS} from "../../app.tokens";
import {Http, URLSearchParams, Headers} from "@angular/http";
@Injectable()
export class CarService{

  cars: Array<Car> = [];

  constructor(
    @Inject(BASE_URL_CARS) private baseUrl: string,
    private http: Http){

  }

  public findByModel() : void {
      let url = this.baseUrl;

      let headers = new Headers();
      headers.set('Accept', 'application/json');

      //headers.set('Authorization', 'Basic ' + btoa('admin:admin')); //basic auth

    this
      .http
      .get(url, {headers})
      .map(resp => resp.json())
      .subscribe(
        (cars) => {
          this.cars = cars;
        },
        (err) => {
          console.error('Fehler beim Laden', err);
        }
      );

  }

}
