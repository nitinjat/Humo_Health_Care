import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent} from './contact-us/contact-us.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductServicesComponent} from './product-services/product-services.component';
import { AdminRoutingModule } from './Admin/admin-routing.module';
import { AdminModule } from './Admin/admin.module';
import { AdminsevicesService} from './Admin/adminsevices.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {path:'Home',component: HomeComponent},
  {path:'About',component: AboutUsComponent},
  {path:'Contact',component:ContactUsComponent},
  {path:'ProductServices',component : ProductServicesComponent}, 
  {
    path: 'Admin',
          loadChildren: () => import('./Admin/admin.module').then(mod => mod.AdminModule)
  },
  { path: '**', component: PagenotfoundComponent },

];
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule     ,
    AdminRoutingModule  ,AdminModule
  ],

  providers: [
    BannerComponent,AdminsevicesService
  ]
})
export class AppRoutingModule { }
