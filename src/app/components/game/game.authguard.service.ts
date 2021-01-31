import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    base_url: string;
    flag:boolean = false     //MUDAR ISSO PARA FALSE APOS FASE DE TESTES

    constructor(private router: Router) { }

    canActivate() {

        if (this.flag) {
            return true;
        }
        
        this.router.navigate(['/']);
        return false;
    }


}