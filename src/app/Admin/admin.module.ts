import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component'
import { AdminComponent } from './admin.component';
import { AddContentComponent } from './add-content.component';
import { ContentListComponent } from './content-list.component';
@NgModule({

    declarations :[
        AdminComponent,AdminHeaderComponent,AddContentComponent,ContentListComponent
        ],
    imports:[
        FormsModule,      
       RouterModule,
       AdminRoutingModule,
       
    ],
    exports :[AdminHeaderComponent]

})

export class AdminModule { }