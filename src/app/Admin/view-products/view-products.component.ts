import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminsevicesService} from './../adminsevices.service';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

public productlist : [] ;

constructor(private services :AdminsevicesService) { }

  ngOnInit(): void {
    this.GetProductsList();
  }

 GetProductsList() :void
  {    
    this.services.getProductList().subscribe(
      value => {         
          this.productlist = value.User;         
      }     
    );
}
}
