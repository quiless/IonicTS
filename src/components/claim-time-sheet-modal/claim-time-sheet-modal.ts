/* Angular */

import { Component } from '@angular/core';
import { Events, NavController, LoadingController, AlertController, ModalController, ViewController, ToastController } from 'ionic-angular';

/* Services */

import { ClaimService } from '../../services/claimService'

/* Models */

import { AuthResponse } from '../../models/authResponse';
import { enumAuthResponse } from '../../models/enumAuthResponse';

/* Providers */

import { ClaimProvider } from '../../providers/claimProvider'

@Component({
  selector: 'component-time-sheet-modal',
  templateUrl: 'claim-time-sheet-modal.html'
})

export class ClaimTimeSheetModalComponent {

  authResponse = new AuthResponse();
  claimCode = "";


 
  constructor(
    private navCtrl: NavController, 
    public modalController : ModalController, 
    public alertController : AlertController,
    public loadingController : LoadingController,
    private viewController : ViewController,
    private claimService : ClaimService,
    private claimProvider : ClaimProvider,
    public toastController : ToastController,
    public events : Events ) {
     
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

    let toast = this.toastController.create({
      duration: 2000,
      position: 'bottom'
    });

    if (this.authResponse.TypeResponse != enumAuthResponse.Success){
      toast.setMessage("Processo não encontrado.");
      toast.present();
      blockUi.dismiss();
    } else {
      return this.claimProvider.getClaimByUniqueId(this.authResponse.DataResult.UniqueId).then((result) => {
        if (result > 0){
            toast.setMessage("O processo já está em sua lista.");
            toast.present();
            blockUi.dismiss();
          } else {
            this.insertClaim(this.authResponse.DataResult).then(() =>{
              toast.setMessage("Processo adicionado com sucesso.");
              toast.present();
              blockUi.dismiss();
              this.dismiss();
              this.events.publish('getClaims', "");
            })
          }
      });
    }
  }

  dismiss(){
    this.viewController.dismiss();
  }

  insertClaim(data){
    return this.claimProvider.insertClaim(data);
  }




}