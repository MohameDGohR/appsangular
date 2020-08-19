import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent,
   canActivate: [ AuthGuardService] },
  {path: 'orders', component: MyOrdersComponent ,
   canActivate: [ AuthGuardService ] },
  {path: 'admin/orders', component: AdminOrdersComponent  ,
   canActivate: [ AuthGuardService, AdminAuthGuardService] },
  {path: 'admin/products', component: AdminProductsComponent ,
   canActivate: [ AuthGuardService , AdminAuthGuardService]  },
   {path: 'admin/products/new/:id', component: ProductFormComponent ,
   canActivate: [ AuthGuardService , AdminAuthGuardService]  },
   {path: 'admin/products/new', component: ProductFormComponent ,
   canActivate: [ AuthGuardService , AdminAuthGuardService]  },
  {path: 'shopping-cart', component: ShoppingCartComponent  },
  {path: 'login', component: LoginComponent  },
  {path: 'logout', component: LogoutComponent  }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
