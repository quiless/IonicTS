import { MyApp } from './app.component';

/* Angular */ 
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/* Viwes */
import { LoginPage } from '../pages/login/login';
import { ClaimPage } from '../pages/claim/claim';

/* Components */

import { ClaimModalComponent } from '../components/claim-modal/claimModal'
import {  ClaimCard } from '../components/claim-card/claimCard'

/* Providers */

import { ClaimProvider } from '../providers/claimProvider'
import {SQLiteProvider} from '../database/SQLite'

/* Services */

import { AuthService } from '../services/authService';
import { ClaimService } from '../services/claimService';

/* Natives */
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite'







@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ClaimPage,
    ClaimModalComponent,
    ClaimCard
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ClaimPage,
    ClaimModalComponent,
    ClaimCard
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ClaimService,
    ClaimProvider,
    SQLiteProvider,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
