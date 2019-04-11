import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NologinGuard } from './guards/nologin.guard';

  const routes: Routes = [
    { path: '', redirectTo: 'cadastro-receita', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'cadastro-receita', loadChildren: './cadastro-receita/cadastro-receita.module#CadastroReceitaPageModule' },

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}


