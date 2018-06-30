/* Angular */
import { Injectable } from '@angular/core';

/* Ionic */
import { SQLiteObject } from '@ionic-native/sqlite';

/* Database */
import { SQLiteProvider } from '../database/SQLite';

/* Models */

import { ClaimTimeSheet } from '../models/claimTimeSheet'

import { NavController, LoadingController, AlertController } from 'ionic-angular';

@Injectable()
export class ClaimTimeSheetProvider {

  constructor(private database: SQLiteProvider, alertController : AlertController) { }

  public insertClaimTimeSheet (claimTimeSheet: ClaimTimeSheet) {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into ClaimTimeSheet (UniqueId,ClaimUniqueId,HasCashFlow,IncidenceName,IncidenceUniqueId,IncidenceTypeName,IncidenceTypeUniqueId,CreateDate,StartDate,EndDate,TimeSpentMinute,FeesGenerated,FeesToGenerate,Observation,HasCollection) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        let data = [claimTimeSheet.UniqueId, claimTimeSheet.ClaimUniqueId, claimTimeSheet.HasCashFlow, claimTimeSheet.IncidenceName, claimTimeSheet.IncidenceUniqueId, claimTimeSheet.IncidenceTypeName, claimTimeSheet.IncidenceTypeUniqueId, claimTimeSheet.CreateDate, claimTimeSheet.StartDate, claimTimeSheet.EndDate, claimTimeSheet.TimeSpentMinute, claimTimeSheet.FeesGenerated, claimTimeSheet.FeesToGenerate, claimTimeSheet.Observation, claimTimeSheet.HasCollection];
        
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public updateClaimTimeSheet (claimTimeSheet: ClaimTimeSheet) {
    console.log(claimTimeSheet);
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update ClaimTimeSheet set ClaimUniqueId = ?, HasCashFlow = ?, IncidenceName = ?, IncidenceUniqueId = ?, IncidenceTypeName = ?, IncidenceTypeUniqueId = ?, CreateDate = ?, StartDate = ?, EndDate = ?,  TimeSpentMinute = ?, FeesGenerated = ?, FeesToGenerate = ?, Observation = ?, HasCollection = ? where UniqueId = ?';
        let data = [claimTimeSheet.ClaimUniqueId, claimTimeSheet.HasCashFlow, claimTimeSheet.IncidenceName, claimTimeSheet.IncidenceUniqueId, claimTimeSheet.IncidenceTypeName, claimTimeSheet.IncidenceTypeUniqueId, claimTimeSheet.CreateDate, claimTimeSheet.StartDate, claimTimeSheet.EndDate, claimTimeSheet.TimeSpentMinute, claimTimeSheet.FeesGenerated, claimTimeSheet.FeesToGenerate, claimTimeSheet.Observation, claimTimeSheet.HasCollection, claimTimeSheet.UniqueId];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public deleteClaimTimeSheet (UniqueId: string) {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from ClaimTimeSheet where UniqueId = ?';
        let data = [UniqueId];
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getClaimTimeSheetByUniqueId (UniqueId: string) {
    console.log(UniqueId);
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from ClaimTimeSheet where UniqueId = ?';
        let data = [UniqueId];

        return db.executeSql(sql, data)
          .then((data: any) => {
            return data.rows.length;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }



  public getClaimTimeSheets() {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from ClaimTimeSheet';

        return db.executeSql(sql, null)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let ClaimTimeSheets: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var ClaimTimeSheet = data.rows.item(i);
                ClaimTimeSheets.push(ClaimTimeSheet);
              }
              return ClaimTimeSheets;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}
