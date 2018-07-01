/* Angular */
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController, Events, ToastController } from 'ionic-angular';

/* Components */
import { ClaimModalComponent } from '../../components/claim-modal/claimModal'

/* Providers */
import { ClaimProvider } from '../../providers/claimProvider'

/* Views */
import { ClaimTimeSheetPage } from '../claim-time-sheet/claim-time-sheet'

@Component({
  selector: 'page-claim',
  templateUrl: 'claim.html',
  entryComponents:[ ClaimTimeSheetPage]
})

export class ClaimPage {

  claims: any[] = [];

 
  constructor(public navCtrl: NavController, 
    public alertController : AlertController, 
    public modalController : ModalController, 
    private claimProvider : ClaimProvider,
    public toastController : ToastController,
    public events : Events ) {

    this.events.subscribe('getClaims', () => {
      this.getClaims();
    });
  }

  ionViewDidLoad() {
    this.getClaims();
   
  }

  showClaimModal (){
    let profileModal = this.modalController.create(ClaimModalComponent);
    profileModal.present();
  }

  
  getClaims(){
    return this.claimProvider.getClaims().then((result : any[]) => {
      this.claims = result;
      let alert = this.alertController.create({
        buttons: ['Ok']
      });
      alert.setMessage(this.claims.length.toString());
        alert.present();
    });
  }

  redirectClaimTimeSheet(UniqueId, ClaimCode){
    this.navCtrl.push(ClaimTimeSheetPage, {UniqueID :UniqueId, ClaimCode : ClaimCode});
  }

}