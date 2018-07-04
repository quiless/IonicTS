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
import { Network } from '@ionic-native/network';


@Component({
  selector: 'page-claim',
  templateUrl: 'claim.html',
  entryComponents:[ ClaimTimeSheetPage]
})

export class ClaimPage {

  claims: any[] = [];
  conection =  "";
  alert = this.alertController.create();

 
  constructor(private navCtrl: NavController, 
    private storage : Storage,
    private network : Network,
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
    

   
    // var userInfo = this.storage.get('UserInfo');
    // var login = this.storage.get('Login');

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

    if (this.network.type == "none"){
      this.conection = "Sem conexão com a internet"
      setTimeout(() => {
        event.complete();
      }, 3000)
    } else {
      this.conection = "Sincronizando no " + this.network.type + ".";
      setTimeout(() => {
        event.complete();
      }, 3000)
    }

    

    


    
  }

}