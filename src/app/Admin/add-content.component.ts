import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminsevicesService} from './adminsevices.service';
@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {
  formdata = new FormGroup({
    Uname: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required, Validators.email]),
    UEmail: new FormControl('', Validators.required),
    Mobile: new FormControl('', Validators.required),
  });
  constructor(private services : AdminsevicesService ) { }

  ngOnInit(): void {
  }
  onClickSubmit(data: any) {
    
    if (this.formdata.invalid) {
      this.services.PostContents(data).subscribe(
        value => { 
          if(value.Success === true)
          {
            alert('Content Detail saved.');
          }
        })    
              
    }

  }
}
