import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CadastroPage} from '../cadastro/cadastro.page';
import {HomePage} from '../home/home.page';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(private authservice: AuthService, public router: Router) { }

  ngOnInit() {

  }
  onSubmitLogin() {
    this.authservice.login(this.email, this.password).then(res => {
    this.router.navigate(['/home']);
   }).catch(err => alert('Dados incorretos'));
   }
   openCadastro() {
     this.router.navigate(['/cadastro']);
   }
   openHome() {
    this.router.navigate(['/home']);
  }

}
