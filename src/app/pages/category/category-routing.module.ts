import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaintenanceComponent} from "../../extrapages/maintenance/maintenance.component";

import {AuthGuard} from "../../core/guards/auth.guard";
import {UsersComponent} from "./users/users.component";
import { ProductListComponent } from './product/product-list.component';
// import { ProductRegisterComponent } from './product_register/product-register.component';
// import { ProductResultComponent } from './product_result/product-result.component';
// import { ProductResultPublicComponent } from './project_result_public/product-result-public.component';
// import { VerySignComponent } from './very-sign/very-sign.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  // {path: 'check-file', component: VerySignComponent},
  {path: 'product', component: ProductListComponent},
  // {path: 'product-register', component: ProductRegisterComponent},
  // {path: 'product-result', component: ProductResultComponent},
  // {path: 'product-result-public', component: ProductResultPublicComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
