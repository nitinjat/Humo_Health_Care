import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { AddContentComponent } from './add-content.component';
import { ContentListComponent } from './content-list.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { ViewProductsComponent} from './view-products/view-products.component';
import { AddProductsComponent} from './add-products/add-products.component';
import { ViewQueriesComponent} from './view-queries/view-queries.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUsersComponent  } from './add-users/add-users.component';
const routes: Routes = [
  { path: 'Admin',  children :[
  { path :'',component : AdminComponent  },
  { path:'Login' ,component: LoginComponent },      
  { path:'AddContent', component : AddContentComponent  },
  { path:'ContentList' ,component: ContentListComponent }, 
  { path:'AddProduct', component : AddProductsComponent  },
  { path:'ProductList' ,component: ViewProductsComponent }, 
  { path:'ViewQuery', component : ViewQueriesComponent  },
  { path:'UserList' ,component: ViewUsersComponent }, 
  { path:'AddUser' ,component: AddUsersComponent }, 
 ]
}];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
