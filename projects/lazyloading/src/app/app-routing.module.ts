import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'projects/lazyloading/shop/cart/cart.component';
import { CheckoutComponent } from 'projects/lazyloading/shop/checkout/checkout.component';
import { ConfirmComponent } from 'projects/lazyloading/shop/confirm/confirm.component';


const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'cart', component: CartComponent },
  {path:'checkout', component:CheckoutComponent},
  {path:'confirm', component:ConfirmComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
