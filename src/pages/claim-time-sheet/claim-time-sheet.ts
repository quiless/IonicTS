/* Angular */
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController, Events, NavParams, ToastController } from 'ionic-angular';

/* Components */

import { ClaimTimeSheetCard } from '../../components/claim-time-sheet-card/claim-time-sheet-card'
import { ClaimTimeSheetModalComponent } from '../../components/claim-time-sheet-modal/claim-time-sheet-modal'

/* Providers */
import { ClaimTimeSheetProvider } from '../../providers/claimTimeSheetProvider'
import { IncidenceProvider } from '../../providers/incidenceProvider'
import { IncidenceTypeProvider } from '../../providers/incidenceTypeProvider'
import { CurrencyProvider } from '../../providers/currencyProvider'

/* Services */

import { ClaimTimeSheetService } from '../../services/claimTimeSheetService'
import { IncidenceService } from '../../services/incidenceService'
import { IncidenceTypeService } from '../../services/incidenceTypeService'
import { CurrencyService } from '../../services/currencyService'

/* Models */

import { AuthResponse } from '../../models/authResponse';
import { enumAuthResponse } from '../../models/enumAuthResponse';

@Component({
  selector: 'page-claim-time-sheet',
  templateUrl: 'claim-time-sheet.html',
  
})

export class ClaimTimeSheetPage {

  claimTimeSheets: any[] = [];
  incidences : any [] = [];
  incidenceTypes : any [] = [];
  currencies : any [] = [];
  authResponse = new AuthResponse();
  ClaimCode = "";
  UniqueId = "";


  constructor(public navCtrl: NavController,
    private alertController: AlertController,
    private modalController: ModalController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private currencyProvider : CurrencyProvider,
    private currencyService : CurrencyService,
    private claimTimeSheetProvider: ClaimTimeSheetProvider,
    private incidenceProvider : IncidenceProvider,
    private incidenceTypeProvider : IncidenceTypeProvider,
    private incidenceTypeService : IncidenceTypeService,
    private incidenceService : IncidenceService,
    private claimTimeSheetService: ClaimTimeSheetService,
    private navParams: NavParams,
    private events: Events) {

    this.ClaimCode = navParams.get('ClaimCode');
    this.UniqueId = navParams.get('UniqueId');

    this.events.subscribe('getClaimTimeSheets', () => {
      this.getClaimTimeSheets();
    });

   
  }

  ionViewDidLoad() {
    this.getClaimTimeSheetsApi();
    this.getIncidencesApi();
    this.getIncidenceTypesApi();
    this.getCurrenciesApi();
  }

  getCurrenciesApi (){
    this.authResponse = this.currencyService.getCurrencies();

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
        this.getCurrencyByUniqueId(this.authResponse.DataResult[i].UniqueId).then((response) => {
          if (response == 0){
            this.insertCurrency(result).then((retorno) => { 
            });
          } else {
            this.updateCurrency(result);
          }
        }).then(() => {
          this.getCurrencies();
        })
      }
    }
  }

  getCurrencies(){
    return this.currencyProvider.getCurrencies().then((result: any[]) => {
      this.currencies = result;
      console.log(result);
    });
  }

  insertCurrency(data) {
    return this.currencyProvider.insertCurrency(data);
  }

  updateCurrency(data){
    return this.currencyProvider.updateCurrency(data);
  }

  getCurrencyByUniqueId(data){
    return this.currencyProvider.getCurrencyByUniqueId(data);
  }

  getIncidenceTypesApi (){
    this.authResponse = this.incidenceTypeService.getIncidenceTypes();

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
        this.getIncidenceTypeByUniqueId(this.authResponse.DataResult[i].UniqueId).then((response) => {
          if (response == 0){
            this.insertIncidenceType(result).then((retorno) => { 
            });
          } else {
            this.updateIncidenceType(result);
          }
        }).then(() => {
          this.getIncidenceTypes();
        })
      }
    }
  }

  getIncidencesApi (){
    this.authResponse = this.incidenceService.getIncidences();

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
        this.getIncidenceByUniqueId(this.authResponse.DataResult[i].UniqueId).then((response) => {
          if (response == 0){
            this.insertIncidence(result).then((retorno) => { 
            });
          } else {
            this.updateIncidence(result);
          }
        }).then(() => {
          this.getIncidences();
        })
      }
    }
  }

  getIncidenceTypes(){
    return this.incidenceTypeProvider.getIncidenceTypes().then((result: any[]) => {
      this.incidenceTypes = result;
      let toast = this.toastController.create({
        duration: 2000,
        position: 'bottom'
      });
    });
  }

  getIncidences(){
    return this.incidenceProvider.getIncidences().then((result: any[]) => {
      this.incidences = result;
      let toast = this.toastController.create({
        duration: 2000,
        position: 'bottom'
      });
    });
  }

  showClaimTimeSheetModal (data){
    let claimTimeSheetModal = this.modalController.create(ClaimTimeSheetModalComponent, data);
    claimTimeSheetModal.present();
  }

  insertIncidenceType(data) {
    return this.incidenceTypeProvider.insertIncidenceType(data);
  }

  updateIncidenceType(data){
    return this.incidenceTypeProvider.updateIncidenceType(data);
  }

  insertIncidence(data) {
    return this.incidenceProvider.insertIncidence(data);
  }

  updateIncidence(data){
    return this.incidenceProvider.updateIncidence(data);
  }

  getIncidenceByUniqueId (data){
    return this.incidenceProvider.getIncidenceByUniqueId(data);
  }

  getIncidenceTypeByUniqueId (data){
    return this.incidenceTypeProvider.getIncidenceTypeByUniqueId(data);
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
      console.log(result);
      let toast = this.toastController.create({
        duration: 2000,
        position: 'bottom'
      });
    });
  }
}