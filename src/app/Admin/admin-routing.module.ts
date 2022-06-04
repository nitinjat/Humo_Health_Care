import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { AddContentComponent } from './add-content.component';
import { ContentListComponent } from './content-list.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
const routes: Routes = [
 { path: 'Admin', component : AdminComponent  },
 { path:'Login' ,component: LoginComponent },      
 { path:'AddContent', component : AddContentComponent  },
 { path:'ContentList' ,component: ContentListComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
