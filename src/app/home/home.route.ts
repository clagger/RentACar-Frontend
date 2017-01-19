import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "../register/register.component";


const HOME_ROUTES: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

export const HomeRoutes
  = RouterModule.forChild(HOME_ROUTES);
