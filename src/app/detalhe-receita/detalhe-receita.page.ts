import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-detalhe-receita',
  templateUrl: './detalhe-receita.page.html',
  styleUrls: ['./detalhe-receita.page.scss'],
})
export class DetalheReceitaPage implements OnInit {

  items: Observable<any[]>;

  constructor(public router: Router, private db: AngularFirestore, private angularFireAuth: AngularFireAuth) {
    this.items = db.collection('receitas').valueChanges();
  }

  ngOnInit() {
  }
  openHome() {
    this.router.navigate(['/home']);
  }

  getReceita(){
    
  }

}
