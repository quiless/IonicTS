/* Angular */

import { Component } from '@angular/core';
import { Events, NavController, LoadingController, NavParams, AlertController, ModalController, ViewController, ToastController } from 'ionic-angular';

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
    private navParams : NavParams,
    private modalController : ModalController, 
    private incidenceProvider : IncidenceProvider,
    private incidenceTypeProvider : IncidenceTypeProvider,
    private alertController : AlertController,
    private loadingController : LoadingController,
    private viewController : ViewController,
    private toastController : ToastController,
    private events : Events ) {

      this.getIncidences().then(() => {
          if (navParams.data != undefined && navParams.data != null ){
            this.claimTimeSheet = navParams.data;
            this.calculateTime();
            this.claimTimeSheet.IncidenceUniqueId = 'dcf78620-01ba-47f2-8447-a43df37ee9d4'
          
          }
      });
  }

  ionViewDidLoad() {
    console.log(this.claimTimeSheet);
    console.log(this.incidences);
  }

  getIncidences(){
    return this.incidenceProvider.getIncidences().then((result: any[]) => {
      this.incidences = result;
    });
  }

  getIncidenceTypesByIncidenceUniqueId (){
    return this.incidenceTypeProvider.getIncidenceTypeByIncidenceUniqueId(this.claimTimeSheet.IncidenceUniqueId).then((result : any[]) =>{
      this.incidenceTypes = result;
    })
  }

  
  dismiss(){
    this.viewController.dismiss();
  }

  calculateTime (){
    if (this.claimTimeSheet.StartDate != null && this.claimTimeSheet.EndDate != null){

      this.claimTimeSheet.TimeSpentMinute = undefined;
      this.claimTimeSheet.TimeSpentHourMinute = undefined;

      /* Calcula o campo Duração (Min) */

      let startDate = Date.parse(this.claimTimeSheet.StartDate.toString());
      let endDate = Date.parse(this.claimTimeSheet.EndDate.toString());
      let diffMileseconds = endDate - startDate;
      let minutes = Math.floor((diffMileseconds/1000)/60);
      let seconds = minutes * 60;
      this.claimTimeSheet.TimeSpentMinute = minutes;
      let hours = Math.floor(((diffMileseconds/1000)/60)/60);

      /* Calcula o campo Total Lançado (hh:mm) */

      seconds = seconds % 60;

      minutes = minutes % 60;

      if (hours < 9 && minutes > 9){
        this.claimTimeSheet.TimeSpentHourMinute = "0" + hours.toString() + ':' + minutes.toString();
      } else if (hours < 9 && minutes < 9) {
        this.claimTimeSheet.TimeSpentHourMinute = "0" + hours.toString() + ':' + "0" + minutes.toString();
      } else if (hours > 9 && minutes < 9){
        this.claimTimeSheet.TimeSpentHourMinute = hours.toString() + ':' + "0" + minutes.toString();
      } else {
        this.claimTimeSheet.TimeSpentHourMinute =  hours.toString() + ':' + minutes.toString();
      }

    } else {
      this.claimTimeSheet.TimeSpentMinute = undefined;
      this.claimTimeSheet.TimeSpentHourMinute = undefined;
    }
  }

}