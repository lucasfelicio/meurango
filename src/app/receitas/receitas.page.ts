import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';
import { CadastroReceitaPage } from '../cadastro-receita/cadastro-receita.page';
import { ReceitaI } from '../model/receita';
import { ReceitasService } from '../services/receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  receitas: ReceitaI[];
  
  constructor(public router: Router, private receitaSerice:ReceitasService) { }

  ngOnInit() {
    this.receitaSerice.getReceitas().subscribe(res =>{
      this.receitas = res
    })
  }
  openHome() {
    this.router.navigate(['/home']);
  }
  openCadReceita() {
    this.router.navigate(['/cadastro-receita']);
  }

}
