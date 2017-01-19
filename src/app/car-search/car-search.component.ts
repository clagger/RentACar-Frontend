import {Component} from "@angular/core";
import {Car} from "../entities/car";
import {CarService} from "../services/car.service";
/**
 * Created by Christian on 1/17/2017.
 */

@Component({
  selector: 'car-search',
  templateUrl: './car-search.component.html'
})

export class CarSearchComponent {
  public searchValue :string;
  public selectedCar: Car;

  constructor(private carService: CarService) {}

  public get cars(): Array<Car> {
    return this.carService.cars;
  }

  search(searchType:string) : void {
    this.carService.find(this.searchValue, searchType);
  }

  findAll():void {
    this.carService.findAll();
  }
  select(car: Car): void {
    this.selectedCar = car;
  }

}
