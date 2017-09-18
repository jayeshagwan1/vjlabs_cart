import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../_models/user';
@Injectable()
export class AuthGuard implements CanActivate {
    user: User;
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            //Check if user is login and redirect

            if (this.user.firstName == "admin")
                this.router.navigate(['admin']);
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}