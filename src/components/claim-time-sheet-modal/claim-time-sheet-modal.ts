/* Angular */

import { Component } from '@angular/core';
import { Events, NavController, LoadingController, AlertController, ModalController, ViewController, ToastController } from 'ionic-angular';

/* Providers */

import { IncidenceProvider } from '../../providers/incidenceProvider'
import { IncidenceTypeProvider } from '../../providers/incidenceTypeProvider'

/* Model */

import { ClaimTimeSheet } from '../../models/claimTimeSheet'


@Component({
  selector: 'component-time-sheet-modal',
  templateUrl: 'claim-time-sheet-modal.html'
})

export class ClaimTimeSheetModalComponent {

  claimCode = "";
  incidences : any [] = [];
  incidenceTypes : any [] = [];
  claimTimeSheet = new ClaimTimeSheet();


 
  constructor(
    private navCtrl: NavController, 
    private modalController : ModalController, 
    private incidenceProvider : IncidenceProvider,
    private incidenceTypeProvider : IncidenceTypeProvider,
    private alertController : AlertController,
    private loadingController : LoadingController,
    private viewController : ViewController,
    private toastController : ToastController,
    private events : Events ) {
     
  }

  ionViewDidLoad() {
    
   this.getIncidences();
  }

  getIncidences(){
    return this.incidenceProvider.getIncidences().then((result: any[]) => {
      this.incidences = result;
      console.log(result);
    });
  }

  getIncidenceTypesByIncidenceUniqueId (){
    console.log(this.claimTimeSheet.IncidenceUniqueId);
    return this.incidenceTypeProvider.getIncidenceTypeByIncidenceUniqueId(this.claimTimeSheet.IncidenceUniqueId).then((result : any[]) =>{
      this.incidenceTypes = result;
    })
  }

}