import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomePage } from '../home/home.page';
import { ReceitasService } from '../services/receitas.service';
import { ReceitaI } from '../model/receita';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-cadastro-receita',
  templateUrl: './cadastro-receita.page.html',
  styleUrls: ['./cadastro-receita.page.scss'],
})
export class CadastroReceitaPage implements OnInit {
  receita: ReceitaI = {
    nome: null,
    imagem: null,
    tempoPreparo: 0,
    ingredientes: null,
    modoPreparo: null,
  };
  receitaID = null;
  currentImage: any;

  constructor(
    public router: Router,
    private receitaService: ReceitasService,
    private route: ActivatedRoute,
    private camera: Camera
  ) { }

  ngOnInit() {
    this.receitaID = this.route.snapshot.params['id'];
    if (this.receitaID) {
      this.receitaService.getReceita(this.receitaID).subscribe(res => {
        this.receita = res;
      })
    }
  }

  add() {
    if (this.receitaID) {
      this.receitaService.update(this.receita, this.receitaID);
    }
    else {
      this.receitaService.addReceita(this.receita);
    }
    this.router.navigate(['/home'])
  }

  openHome() {
    this.router.navigate(['/home']);
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log("Camera issue:" + err);
    });
  }
}
