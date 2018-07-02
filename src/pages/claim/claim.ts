/* Angular */
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController, Events, ToastController } from 'ionic-angular';

/* Components */
import { ClaimModalComponent } from '../../components/claim-modal/claimModal'

/* Providers */
import { ClaimProvider } from '../../providers/claimProvider'

/* Views */
import { ClaimTimeSheetPage } from '../claim-time-sheet/claim-time-sheet'

/* Native */
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-claim',
  templateUrl: 'claim.html',
  entryComponents:[ ClaimTimeSheetPage]
})

export class ClaimPage {

  claims: any[] = [];

 
  constructor(private navCtrl: NavController, 
    private storage : Storage,
    private alertController : AlertController, 
    private modalController : ModalController, 
    private claimProvider : ClaimProvider,
    private toastController : ToastController,
    private events : Events ) {

    this.events.subscribe('getClaims', () => {
      this.getClaims();
    });
  }

  ionViewDidLoad() {
    this.getClaims();

    console.log(this.storage);
   
    var userInfo = this.storage.get('UserInfo');
    var login = this.storage.get('Login');

    console.log(userInfo);
    console.log(login);
  }

  showClaimModal (){
    let profileModal = this.modalController.create(ClaimModalComponent);
    profileModal.present();
  }

  
  getClaims(){
    return this.claimProvider.getClaims().then((result : any[]) => {
      this.claims = result;
    });
  }

  redirectClaimTimeSheet(UniqueId, ClaimCode){
    this.navCtrl.push(ClaimTimeSheetPage, {UniqueID :UniqueId, ClaimCode : ClaimCode});
  }

  synchronize(event){
    setTimeout(() => {
      event.complete();
    }, 2000)
  }

}