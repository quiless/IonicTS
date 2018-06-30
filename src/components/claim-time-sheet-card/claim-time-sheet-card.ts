/* Angular */
import { Component, Input } from '@angular/core';
import { NavController, LoadingController, AlertController, DateTime, ToastController, Events } from 'ionic-angular';

/* Providers */
import { ClaimTimeSheetProvider } from '../../providers/claimTimeSheetProvider'

@Component({
  selector: 'claim-time-sheet-card',
  templateUrl: 'claim-time-sheet-card.html'
})

export class ClaimTimeSheetCard {

  @Input("IncidenceName")
  IncidenceName: string = "";
  
  @Input("IncidenceTypeName")
  IncidenceTypeName: DateTime;

  @Input("UniqueId")
  UniqueId: string;

  
  @Input("TimeSpentMinute")
  TimeSpentMinute: string = "";

  constructor(private claimTimeSheetProvider : ClaimTimeSheetProvider, 
    public loadingController : LoadingController,
    public toastController : ToastController,
    public events : Events) { 

  }

  deleteClaimTimeSheet(){

    let blockUi = this.loadingController.create({
      spinner: 'ios',
      duration: 2000
    });

    let toast = this.toastController.create({
      message: 'TimeSheet deletado com sucesso!',
      duration: 2000,
      position: 'bottom'
    });

    blockUi.present();
    
    return this.claimTimeSheetProvider.deleteClaimTimeSheet(this.UniqueId).then(() => {
      blockUi.dismiss();
      toast.present();
      this.events.publish('getClaims', "");
    })
  }

  editClaimTimeSheet () {
    
  }
  

}