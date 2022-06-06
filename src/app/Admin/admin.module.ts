import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component'
import { AdminComponent } from './admin.component';
import { AddContentComponent } from './add-content.component';
import { ContentListComponent } from './content-list.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { AdminsevicesService} from './adminsevices.service';

@NgModule({

    declarations :[
        AdminComponent,AdminHeaderComponent,AddContentComponent,ContentListComponent, ViewUsersComponent, AddUsersComponent
        ],
    imports:[
        FormsModule,  
        ReactiveFormsModule ,    
        RouterModule,
        AdminRoutingModule,
       
    ],
    exports :[AdminHeaderComponent],
    providers :[AdminsevicesService]

})

export class AdminModule { }