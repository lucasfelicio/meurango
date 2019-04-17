import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-detalhe-receita',
  templateUrl: './detalhe-receita.page.html',
  styleUrls: ['./detalhe-receita.page.scss'],
})
export class DetalheReceitaPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  openHome() {
    this.router.navigate(['/home']);
  }

}
