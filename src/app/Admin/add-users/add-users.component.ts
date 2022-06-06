import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminsevicesService} from './../adminsevices.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
 
  formdata = new FormGroup({
    Uname: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.email]),
    UEmail: new FormControl('', Validators.required),
    Mobile: new FormControl('', Validators.required),
  });
  constructor(private services : AdminsevicesService , ) { }

  ngOnInit(): void {

  }
  onClickSubmit(data: any) {
    debugger;
    if (this.formdata.invalid) {
      this.services.AddUser(data).subscribe(
     
      error => {
       
        
      })   ;    
              
    }
    alert("Entered Email id : " + data);
  }
}
