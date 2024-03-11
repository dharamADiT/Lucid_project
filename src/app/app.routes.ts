import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  // {'path':'template', component:TemplateComponent},
  {'path':'Home', component:HomeComponent},
  {'path':'Navbar', component:NavbarComponent},
  {'path':'', component:LoginComponent}

];
