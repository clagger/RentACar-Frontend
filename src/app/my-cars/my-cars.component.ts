/**
 * Created by Christian on 1/19/2017.
 */

import {Component} from "@angular/core";
import {Car} from "../entities/car";
import {CarService} from "../services/car.service";
import {RentedCarService} from "../services/rentedCar.service";

@Component({
  selector: 'my-cars',
  templateUrl: './my-cars.component.html'
})

export class  MyCarsComponent {

  public selectedCar : Car;
  public customerId: number;

  constructor(private carService:CarService, private rentedCarService:RentedCarService) {
    this.carService.loadMyCars();
  }

  public get cars(): Array<Car> {
    return this.carService.cars;
  }

  deleteEntry(car:Car) {
    this.rentedCarService.getId(car.id);
    let th: string = this.getRentedCarEntryId();
  }


  getRentedCarEntryId(){
    return this.rentedCarService.rentedCarId;
  }

}
