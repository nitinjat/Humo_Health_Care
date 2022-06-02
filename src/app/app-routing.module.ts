import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent} from './contact-us/contact-us.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { ProductServicesComponent} from './product-services/product-services.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {path:'Home',component: HomeComponent},
  {path:'About',component: AboutUsComponent},
  {path:'Contact',component:ContactUsComponent},
  { path:'ProductServices',component : ProductServicesComponent},
  { path: '**', component: PagenotfoundComponent },

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   RouterModule.forRoot(routes),
    
  ],

  providers: [
    BannerComponent
  ]
})
export class AppRoutingModule { }
