/**
 * Created by Christian on 1/19/2017.
 */

import {Component, Output, Input} from "@angular/core";
import {Car} from "../entities/car";
import {CarService} from "../services/car.service";
import {RentedCarService} from "../services/rentedCar.service";
import {ActivatedRoute} from "@angular/router";
import {RentedCar} from "../entities/rentedCar";

@Component({
  selector: 'my-cars',
  templateUrl: './my-cars.component.html'
})

export class  MyCarsComponent {

 public selectedCar : Car;

 public rentedCar: RentedCar;

  constructor(private carService:CarService, private rentedCarService:RentedCarService) {
    this.carService.loadMyCars();

  }




  public get cars(): Array<Car> {
    return this.carService.cars;
  }




  deleteEntry(car:Car) {
    console.log(car.id);
    this
      .rentedCarService
      .findRentedCar(car.id.toString())
      .subscribe((rentedCar) => {
          this.rentedCar = rentedCar;
          this.rentedCarService.deleteRentedCarEntry(rentedCar.id).subscribe((res) =>{
              this.carService.loadMyCars();
            },

            error => console.log(error)
          )
        },
        (error) => console.log(error)
      )

}
  select(car: Car): void {
    this.selectedCar = car;
  }


}
