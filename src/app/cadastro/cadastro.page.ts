import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  displayname: string;
  email: string;
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  register() {
    this.authService.register(this.displayname, this.email, this.password, this.confirmPassword).then(res => {
      this.router.navigate(['/login']);
    });
  }
  openLogin() {
    this.router.navigate(['/login']);
  }

}