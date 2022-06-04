import { Component, OnDestroy, OnInit, ViewEncapsulation  } from '@angular/core';
import { AdminHeaderComponent } from './admin-header/admin-header.component'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit ,OnDestroy {
  
    ngOnInit(): void {
   
  }
  ngOnDestroy(): void {
  
  }
}
