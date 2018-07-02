/* Angular */
import { Component, Input } from '@angular/core';
import { NavController, LoadingController, AlertController, DateTime, ToastController, Events } from 'ionic-angular';

/* Providers */
import { ClaimProvider } from '../../providers/claimProvider'

@Component({
  selector: 'claim-card',
  templateUrl: 'claimCard.html'
})

export class ClaimCard {

  @Input("ClaimCode")
  ClaimCode: string = "";
  
  @Input("InsuredSubmitDate")
  InsuredSubmitDate: DateTime;

  @Input("UniqueId")
  UniqueId: string;

  constructor(private claimProvider : ClaimProvider, 
    public loadingController : LoadingController,
    public toastController : ToastController,
    public events : Events) { 

  }

  deleteClaim(){

    let blockUi = this.loadingController.create({
      spinner: 'ios',
      duration: 2000
    });

    let toast = this.toastController.create({
      message: 'Processo deletado com sucesso!',
      duration: 2000,
      position: 'bottom'
    });

    blockUi.present();
    
    return this.claimProvider.deleteClaim(this.UniqueId).then(() => {
      blockUi.dismiss();
      toast.present();
      this.events.publish('getClaims', "");
    })
  }
}