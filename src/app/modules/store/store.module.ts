import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { HumbergerComponent } from './layout/header/components/humberger/humberger.component';
import { FooterComponent } from './layout/footer/components/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/components/home/home.component';
import { ShopingCartComponent } from './shoping-cart/components/shoping-cart/shoping-cart.component';
import { ShopingCartTableComponent } from './shoping-cart/components/shoping-cart-table/shoping-cart-table.component';
import { ShopingCheckoutComponent } from './shoping-cart/components/shoping-checkout/shoping-checkout.component';
import { ShopingDiscountComponent } from './shoping-cart/components/shoping-discount/shoping-discount.component';
import { SidebarComponent } from './shop/components/sidebar/sidebar/sidebar.component';
import { ShopComponent } from './shop/shop.component';
import { ShopDetailsComponent } from './shop_details/shop-details.component';
import { ProductDetailsComponent } from './shop_details/components/product-details/product-details.component';
import { BreadcrumbComponent } from './shop_details/components/breadcrumb/breadcrumb.component';
import { RelatedProductsComponent } from './shop_details/components/related-products/related-products.component';
import { StoreComponent } from './store.component';


@NgModule({
  declarations: [
    StoreComponent,
    HumbergerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopingCartComponent,
    ShopingCartTableComponent,
    ShopingCheckoutComponent,
    ShopingDiscountComponent,
    SidebarComponent,
    ShopComponent,
    ShopDetailsComponent,
    ProductDetailsComponent,
    RelatedProductsComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }
