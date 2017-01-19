/**
 * Created by Christian on 1/19/2017.
 */
import {NgModule} from "@angular/core";
import { CommonModule} from '@angular/common';
import {CarCardComponent} from "../car-card/car-card.component";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarCardComponent
  ],
  providers: [
    // Vorerst keine Provider
  ],
  exports: [
CarCardComponent
  ]

})
export class SharedModule {

}
