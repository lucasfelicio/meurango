import { Router } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth , public router: Router) { }

  login(email: string, password: string) {
    return this.AFauth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.AFauth.auth.signOut();
    this.router.navigate(['/login']);
  }
  register(displayname: string, email: string, password: string, confirmPassword: string) {
    return this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      res.user.updateProfile({displayName: displayname});
    });
  }
  }

