/* Angular */

import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController, ViewController } from 'ionic-angular';

/* Services */

import { ClaimService } from '../../services/claimService'

/* Models */

import { AuthResponse } from '../../models/authResponse';
import { enumAuthResponse } from '../../models/enumAuthResponse';

/* Providers */

import { ClaimProvider } from '../../providers/claimProvider'

@Component({
  selector: 'component-claim-modal',
  templateUrl: 'claimModal.html'
})

export class ClaimModalComponent {

  authResponse = new AuthResponse();
  claimCode = "";


 
  constructor(
    private navCtrl: NavController, 
    public modalController : ModalController, 
    public alertController : AlertController,
    public loadingController : LoadingController,
    private viewController : ViewController,
    private claimService : ClaimService,
    private claimProvider : ClaimProvider) {
     
  }

  ionViewDidLoad() {
    
   
  }

  getClaimByClaimCode (){
    this.authResponse = this.claimService.getClaim(this.claimCode);
    console.log(this.claimCode);
    let blockUi = this.loadingController.create({
      spinner: 'ios',
      duration: 2000
    });

    let alert = this.alertController.create({
      buttons: ['Ok']
    });

    if (this.authResponse.TypeResponse != enumAuthResponse.Success){
      alert.setMessage("Processo não encontrado.");
      alert.present();
      blockUi.dismiss();
    } else {
      this.insertClaim(this.authResponse.DataResult).then(() =>{
        alert.setMessage("Processo Encontrado.");
        alert.present();
        blockUi.dismiss();
        this.dismiss();
      })
    }

  }

  dismiss(){
    this.viewController.dismiss();
  }

  insertClaim(data){
    return this.claimProvider.insertClaim(data);
  }




}