import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDetailsComponent } from './shop_details/shop-details.component';
import { HomeComponent } from './home/components/home/home.component';
import { ShopingCartComponent } from './shoping-cart/components/shoping-cart/shoping-cart.component';
import { StoreModule } from './store.module';
import { StoreComponent } from './store.component';

const routes: Routes = [

  {
    path:'',
    component:StoreComponent,
    children:[
      {
        path: 'shop-details',
        component: ShopDetailsComponent
      },
      {
        path: '',
        component: HomeComponent
    
      },
      {
        path: 'cart',
        component: ShopingCartComponent
    
      },
      {
        path:':id',
        component:ShopDetailsComponent,
        //resolve:DetailsService
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
