import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';
import { CadastroReceitaPage } from '../cadastro-receita/cadastro-receita.page';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  openHome() {
    this.router.navigate(['/home']);
  }
  openCadReceita() {
    this.router.navigate(['/cadastro-receita']);
  }

}
