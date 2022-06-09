import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminsevicesService} from './../adminsevices.service';
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  public userlist : object  = [];
  constructor(private services :AdminsevicesService) { }

  ngOnInit(): void {
    this.GetUserList();
  }
  GetUserList() :void
  {    
    this.services.getUser().subscribe(
      value => {         
          this.userlist = value.User;         
      }     
    );
}
}
