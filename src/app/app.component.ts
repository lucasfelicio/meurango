import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Entrar',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Cadastrar Receitas',
      url: '/cadastro-receita',
      icon: 'add-circle'
    },
    {
      title: 'Minhas Receitas',
      url: '/home',
      icon: 'heart'
    }
    ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }
  logout() {
    this.authService.logout();
  }
}
