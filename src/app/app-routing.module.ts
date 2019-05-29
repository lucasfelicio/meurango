import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NologinGuard } from './guards/nologin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule',
    canActivate: [LoginGuard]
  },
  {
    path: 'cadastro',
    loadChildren: './cadastro/cadastro.module#CadastroPageModule'
  },
  {
    path: 'cadastro-receita',
    loadChildren: './cadastro-receita/cadastro-receita.module#CadastroReceitaPageModule'
  },
  {
    path: 'cadastro-receita/:id',
    loadChildren: './cadastro-receita/cadastro-receita.module#CadastroReceitaPageModule'
  },
  {
    path: 'detalhe-receita',
    loadChildren: './detalhe-receita/detalhe-receita.module#DetalheReceitaPageModule'
  },
  {
    path: 'receitas',
    loadChildren: './receitas/receitas.module#ReceitasPageModule'
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }


