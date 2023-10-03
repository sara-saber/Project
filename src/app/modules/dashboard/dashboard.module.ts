import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { FormComponent } from './shared/compoenets/form/form.component';

import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductEditAddComponent } from './components/product-edit-add/product-edit-add.component';
import { CategoryEditAddComponent } from './components/category-edit-add/category-edit-add.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './shared/compoenets/table/table.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContainerComponent,
    DashboardComponent,
    FormComponent,
    TableComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    ProductEditAddComponent,
    CategoryEditAddComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
