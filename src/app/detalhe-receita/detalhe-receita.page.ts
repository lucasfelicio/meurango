import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService} from 'src/app/services/receita.service';
import { ReceitaI} from 'src/app/model/receita';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-detalhe-receita',
  templateUrl: './detalhe-receita.page.html',
  styleUrls: ['./detalhe-receita.page.scss'],
})
export class DetalheReceitaPage implements OnInit {

  receita: ReceitaI = {
    nome: '',
    ingredientes: '',
    modoPreparo: '',
    tempoPreparo: 0,
    imagem: ''
  };

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private receitaService: ReceitaService,
      private toastCtrl: ToastController
    ) {
  }

  ionViewWollEnter(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.receitaService.getReceita(id).subscribe(receita => {
        this.receita = receita;
      });
    }
  }

  ngOnInit() {
  }

  openHome() {
    this.router.navigate(['/home']);
  }

  getReceita(){
    
  }

}
