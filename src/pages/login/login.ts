/* Angular */

import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

/* Services */
import { AuthService } from '../../services/authService';

/* Models */
import { Login } from '../../models/login';
import { AuthResponse } from '../../models/authResponse';
import { enumAuthResponse } from '../../models/enumAuthResponse';

/* Native */
import { Storage } from '@ionic/storage';

/* Views */
import { ClaimPage } from '../../pages/claim/claim';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  entryComponents:[ClaimPage]
})

export class LoginPage {

  splash = true;
  login = new Login();
  authResponse = new AuthResponse();

  constructor(public navCtrl: NavController, 
              public loadingController : LoadingController, 
              public alertController : AlertController,
              public authService : AuthService,
              public storage : Storage
            ) {
  }

  ionViewDidLoad() {
    
    this.storage.clear();
    setTimeout(() => {
      this.splash = false;
    }, 4000);
  }

  signIn(){
      let blockUi = this.loadingController.create({
        spinner: 'ios',
        duration: 2000
      });

      let alert = this.alertController.create({
        buttons: ['Ok']
      });
      

      blockUi.present();

      this.authResponse = this.authService.authenticate(this.login);

      if (this.authResponse.TypeResponse != enumAuthResponse.Success){
        alert.setMessage("Usuário ou senha invalidos!");
        alert.present();
        blockUi.dismiss();
      } else {
        console.log(this.authResponse.DataResult);
        alert.setMessage("Uhuuul! Login realizado com sucesso!");
        alert.present();
        this.storage.set('UserInfo', this.authResponse.DataResult);
        console.log(this.login);
        this.storage.set('Login', this.login);
        blockUi.dismiss();
        this.storage.get('UserInfo').then(response =>{
          console.log(response);
        });

        this.storage.get('Login').then(response =>{
          console.log(response);
        });   


        this.navCtrl.push(ClaimPage);

      }

      
  }
}
