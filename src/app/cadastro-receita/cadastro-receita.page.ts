import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-cadastro-receita',
  templateUrl: './cadastro-receita.page.html',
  styleUrls: ['./cadastro-receita.page.scss'],
})
export class CadastroReceitaPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  openHome() {
    this.router.navigate(['/home']);
  }

}
