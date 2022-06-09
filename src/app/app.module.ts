import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductServicesComponent } from './product-services/product-services.component';
import { AdminModule } from './Admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './Admin/add-products/add-products.component';
import { ViewProductsComponent } from './Admin/view-products/view-products.component';
import { ViewQueriesComponent } from './Admin/view-queries/view-queries.component';
import { AdminsevicesService} from './Admin/adminsevices.service';



@NgModule({
  declarations: [   

    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    ProductServicesComponent,  
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    PagenotfoundComponent,
    AddProductsComponent,
    ViewProductsComponent,
    ViewQueriesComponent,
   
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,   
    AdminModule,
    HttpClientModule,
    FormsModule ,ReactiveFormsModule       
  ],
  exports:[ RouterModule,FooterComponent, ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AdminsevicesService],      
  bootstrap: [AppComponent,]
})
export class AppModule { }
