import {Routes, RouterModule} from "@angular/router";
import {CarSearchComponent} from "./car-search.component";
import {RouterGuard} from "../services/route-guard.service";
/**
 * Created by Christian on 1/17/2017.
 */


const CAR_SEARCH_ROUTES: Routes = [
  {
    path: 'car-search',
    component: CarSearchComponent,
    canActivate: [RouterGuard]
  }

];


export const CarSearchRouterModule
  = RouterModule.forChild(CAR_SEARCH_ROUTES);
