import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";


const HOME_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

export const HomeRoutes
  = RouterModule.forChild(HOME_ROUTES);
