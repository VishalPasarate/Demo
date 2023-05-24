import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ShopModule
  ]
})
export class ShopModule {

 }
