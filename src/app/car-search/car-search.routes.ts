import {Routes, RouterModule} from "@angular/router";
import {CarSearchComponent} from "./car-search.component";
import {MyCarsComponent} from "../my-cars/my-cars.component";
/**
 * Created by Christian on 1/17/2017.
 */


const CAR_SEARCH_ROUTES: Routes = [
  {
    path: 'car-search',
    component: CarSearchComponent
  }

];


export const CarSearchRouterModule
  = RouterModule.forChild(CAR_SEARCH_ROUTES);
