/* Angular */
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController } from 'ionic-angular';

/* Components */
import { ClaimModalComponent } from '../../components/claim-modal/claimModal'

/* Providers */
import { ClaimProvider } from '../../providers/claimProvider'

@Component({
  selector: 'page-claim',
  templateUrl: 'claim.html'
})

export class ClaimPage {

  claims: any[] = [];

 
  constructor(public navCtrl: NavController, public alertController : AlertController, public modalController : ModalController, private claimProvider : ClaimProvider ) {
  }

  ionViewDidLoad() {
    this.getClaims();
   
  }

  getClaimModal (){
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

}