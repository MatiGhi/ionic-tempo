import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class TokenGuard implements CanActivate {

    constructor(private _router: Router) {}
    
    canActivate() {
        /* let token = localStorage.getItem('token'); */
        let token = true;

        if(token) {
            return true;
        }else{
            this._router.navigate(['/login']);
            return false;
        }
    }
   
}