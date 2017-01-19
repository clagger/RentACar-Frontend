/**
 * Created by Christian on 1/19/2017.
 */

import {Component} from "@angular/core";
import {Car} from "../entities/car";
import {CarService} from "../services/car.service";

@Component({
  selector: 'my-cars',
  templateUrl: './my-cars.component.html'
})

export class  MyCarsComponent {

  public id:string;
  public selectedCar : Car;
  public customerId: number;

  constructor(private carService:CarService) {
    this.carService.loadMyCars();
  }

  public get cars(): Array<Car> {
    return this.carService.cars;
  }

  edit(id:string):void{
    //this.carService.editMyCar(this.id);
  }
}
