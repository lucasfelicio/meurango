import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomePage } from '../home/home.page';
import { ReceitasService } from '../services/receitas.service';
import { ReceitaI } from '../model/receita';

@Component({
  selector: 'app-cadastro-receita',
  templateUrl: './cadastro-receita.page.html',
  styleUrls: ['./cadastro-receita.page.scss'],
})
export class CadastroReceitaPage implements OnInit {

  receita: ReceitaI = {
    nome: '',
    imagem: '',
    tempoPreparo: 0,
    ingredientes: '',
    modoPreparo: '',
  };
  receitaID = null;

  constructor(
    public router: Router,
    private receitaService: ReceitasService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.receitaID = this.route.snapshot.params['id'];
    if (this.receitaID){
      this.receitaService.getReceita(this.receitaID).subscribe(res =>{
        this.receita = res;
      })
    }
  }

  add(){
    if(this.receitaID){
      this.receitaService.update(this.receita, this.receitaID);
    } 
    else{
      this.receitaService.addReceita(this.receita);
    }
    this.router.navigate(['/home'])
  }
  openHome() {
    this.router.navigate(['/home']);
  }

}
