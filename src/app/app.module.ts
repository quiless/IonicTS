import { MyApp } from './app.component';

/* Angular */ 
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/* Viwes */
import { LoginPage } from '../pages/login/login';
import { ClaimPage } from '../pages/claim/claim';
import { ClaimTimeSheetPage } from '../pages/claim-time-sheet/claim-time-sheet'

/* Components */
import { ClaimTimeSheetModalComponent } from '../components/claim-time-sheet-modal/claim-time-sheet-modal'
import { ClaimModalComponent } from '../components/claim-modal/claimModal'
import { ClaimCard } from '../components/claim-card/claimCard'
import { ClaimTimeSheetCard } from '../components/claim-time-sheet-card/claim-time-sheet-card'

/* Providers */

import { ClaimProvider } from '../providers/claimProvider'
import {ClaimTimeSheetProvider} from '../providers/claimTimeSheetProvider'
import {SQLiteProvider} from '../database/SQLite'
import {IncidenceProvider} from '../providers/incidenceProvider'
import {IncidenceTypeProvider} from '../providers/incidenceTypeProvider'

/* Services */

import { AuthService } from '../services/authService';
import { ClaimService } from '../services/claimService';
import { ClaimTimeSheetService } from '../services/claimTimeSheetService'
import { IncidenceService } from '../services/incidenceService'
import { IncidenceTypeService } from '../services/incidenceTypeService'

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
    ClaimTimeSheetModalComponent,
    ClaimTimeSheetPage,
    ClaimTimeSheetCard,
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
    ClaimTimeSheetModalComponent,
    ClaimTimeSheetPage,
    ClaimTimeSheetCard,
    ClaimCard
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ClaimService,
    ClaimProvider,
    SQLiteProvider,
    IncidenceTypeProvider,
    ClaimTimeSheetProvider,
    ClaimTimeSheetService,
    IncidenceService,
    IncidenceTypeService,
    SQLite,
    IncidenceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
