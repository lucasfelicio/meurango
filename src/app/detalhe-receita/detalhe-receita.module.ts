import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalheReceitaPage } from './detalhe-receita.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheReceitaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalheReceitaPage]
})
export class DetalheReceitaPageModule {}
