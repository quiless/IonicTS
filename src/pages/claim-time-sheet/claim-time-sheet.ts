/* Angular */
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController, Events, NavParams, ToastController } from 'ionic-angular';

/* Components */

import { ClaimTimeSheetCard } from '../../components/claim-time-sheet-card/claim-time-sheet-card'

/* Providers */
import { ClaimTimeSheetProvider } from '../../providers/claimTimeSheetProvider'

/* Services */

import { ClaimTimeSheetService } from '../../services/claimTimeSheetService'

/* Models */

import { AuthResponse } from '../../models/authResponse';
import { enumAuthResponse } from '../../models/enumAuthResponse';

@Component({
  selector: 'page-claim-time-sheet',
  templateUrl: 'claim-time-sheet.html',
  
})

export class ClaimTimeSheetPage {

  claimTimeSheets: any[] = [];
  authResponse = new AuthResponse();
  ClaimCode = "";
  UniqueId = "";


  constructor(public navCtrl: NavController,
    public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public claimTimeSheetProvider: ClaimTimeSheetProvider,
    private claimTimeSheetService: ClaimTimeSheetService,
    private navParams: NavParams,
    public events: Events) {

    this.ClaimCode = navParams.get('ClaimCode');
    this.UniqueId = navParams.get('UniqueId');

   
  }

  ionViewDidLoad() {
    this.getClaimTimeSheetsApi();

  }

  getClaimTimeSheetsApi() {
   

    this.authResponse = this.claimTimeSheetService.getClaimTimeSheet(this.UniqueId);
    let blockUi = this.loadingController.create({
      spinner: 'ios',
      duration: 2000
    });

    if (this.authResponse.TypeResponse == enumAuthResponse.Success) {
      let toast = this.toastController.create({
        duration: 2000,
        position: 'bottom'
      });

      for (var i = 0; i < this.authResponse.DataResult.length; i++) {
        let result = this.authResponse.DataResult[i];
        this.getClaimTimeSheetByUniqueId(this.authResponse.DataResult[i].UniqueId).then((response) => {
          if (response == 0){
            this.insertClaimTimeSheet(result).then((retorno) => { 
            });
          } else {
            this.updateClaimTimeSheet(result);
          }
        }).then(() => {
          this.getClaimTimeSheets();
        })
      }
    }
  }

  getClaimTimeSheetByUniqueId(data){
    return this.claimTimeSheetProvider.getClaimTimeSheetByUniqueId(data);
  }

  insertClaimTimeSheet(data) {
    
    return this.claimTimeSheetProvider.insertClaimTimeSheet(data);
  }

  updateClaimTimeSheet(data){
    return this.claimTimeSheetProvider.updateClaimTimeSheet(data);
  }

  getClaimTimeSheets() {
    return this.claimTimeSheetProvider.getClaimTimeSheets().then((result: any[]) => {
      this.claimTimeSheets = result;
      let toast = this.toastController.create({
        duration: 2000,
        position: 'bottom'
      });

      toast.setMessage("passou aqui 2");
      toast.present();
    });
  }
}