import { Component, OnInit } from '@angular/core';
import { AdminsevicesService} from './../adminsevices.service';
@Component({
  selector: 'app-view-queries',
  templateUrl: './view-queries.component.html',
  styleUrls: ['./view-queries.component.css']
})
export class ViewQueriesComponent implements OnInit {

 public querylist : object  = [];
  constructor(private services :AdminsevicesService) { }

  ngOnInit(): void {
     this.Getquery();
  }

  Getquery() :void
  {
    debugger;
    this.services.getQuery().subscribe(
      value => { 
        
          this.querylist = value.User;
         
      }
     
    );
  }
}
