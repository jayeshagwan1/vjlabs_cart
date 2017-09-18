import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { AdminComponent } from './admin/index';
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { PopulatedCartRouteGuard } from "./_guards/populated-cart.route-gaurd";


const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin', component: AdminComponent },
    // otherwise redirect to home
    // { path: '**', redirectTo: '' },
    { path: "checkout", component: CheckoutComponent, canActivate: [PopulatedCartRouteGuard] },
    { path: "confirmed", component: OrderConfirmationComponent, canActivate: [PopulatedCartRouteGuard] },
    { path: "**", component: StoreFrontComponent, canActivate: [AuthGuard] }
];

export const AppRouting = RouterModule.forRoot(appRoutes);