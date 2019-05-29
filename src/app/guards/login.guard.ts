import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements  CanActivate {

  constructor (private AFauth: AngularFireAuth, private router: Router) {}

  canActivate(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // tslint:disable-next-line:no-shadowed-variable
      return this.AFauth.authState.pipe(map(auth => {
        if (isNullOrUndefined(auth)) {
          return true;

        } else {
          this.router.navigate(['/home']);
          return false;

        }
      }));
    }
  }
