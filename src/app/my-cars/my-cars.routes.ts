/**
 * Created by Christian on 1/19/2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {MyCarsComponent} from "../my-cars/my-cars.component";
import {RentEditComponent} from "./car-edit/rent-edit.component";
/**
 * Created by Christian on 1/17/2017.
 */


const MY_CARS_ROUTES: Routes = [
  {
    path: 'my-cars',
    component: MyCarsComponent
  },
  {
    path: 'rent-edit/:id',
    component: RentEditComponent
  }

];


export const MyCarsRouterModule
  = RouterModule.forChild(MY_CARS_ROUTES);
