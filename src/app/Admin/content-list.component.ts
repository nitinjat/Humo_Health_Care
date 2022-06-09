import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminsevicesService} from './adminsevices.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  public contentlist : object  = [];
  constructor(private services :AdminsevicesService) { }

  ngOnInit(): void {
    this.GetContentList();
  }
  GetContentList() :void
  {    
    this.services.getUser().subscribe(
      value => {         
          this.contentlist = value.User;         
      }     
    );
}
}
