import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReceitaService } from '../services/receita.service';
import { ReceitaI } from '../model/receita';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';

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
    private receitaService: ReceitaService,
    private route: ActivatedRoute,
    private camera: Camera,
    private st: AngularFireStorage
  ) { }

  ngOnInit() {

  }

  add() {
    this.receitaService.addReceita(this.receita);
    const pictures = this.st.ref('pictures');
    pictures.putString(this.currentImage, 'data_url');
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
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log("Camera issue:" + err);
    });
  }
}
