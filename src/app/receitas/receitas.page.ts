import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaService } from '../services/receita.service';
import { Observable } from 'rxjs';
import { ReceitaI } from '../model/receita';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  private receitas: Observable<ReceitaI[]>;
  
  constructor(public router: Router, private receitaService: ReceitaService) { }

  ngOnInit() {
    this.receitas = this.receitaService.getReceitas();
  }
  openHome() {
    this.router.navigate(['/home']);
  }
  openCadReceita() {
    this.router.navigate(['/cadastro-receita']);
  }

}
