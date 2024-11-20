import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { SlideComponent } from './slide/slide.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'head',component:HeadComponent},
    {path:'slider',component:SlideComponent},
    {path:'cart',component:CartComponent},
];
