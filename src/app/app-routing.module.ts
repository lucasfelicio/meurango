import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NologinGuard } from './guards/nologin.guard';

  const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}


