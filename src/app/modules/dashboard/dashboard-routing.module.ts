import { ProductEditAddComponent } from './components/product-edit-add/product-edit-add.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { CategoryEditAddComponent } from './components/category-edit-add/category-edit-add.component';
import { ProductService } from '../products/services/product.service';
import { CategoryService } from '../categories/services/category.service';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'product',
        children:[
          {
            path:'',
            component: ProductsComponent,
            resolve:{products:ProductService}

          },
          {
            path: ':id',
            component: ProductEditAddComponent
          },
        ]
    
      },
      {
        path: 'category',
        children:[
          {
            path:'',
            component: CategoriesComponent,
            resolve:{categoryies:CategoryService},

          },
          {
            path: ':id',
            component: CategoryEditAddComponent
          },
        ]
      },
      {
        path: 'users',
        component: UsersComponent
      },
   
 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
