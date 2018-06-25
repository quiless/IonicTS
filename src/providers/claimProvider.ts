/* Angular */
import { Injectable } from '@angular/core';

/* Ionic */
import { SQLiteObject } from '@ionic-native/sqlite';

/* Database */
import { SQLiteProvider } from '../database/SQLite';

/* Models */

import { Claim } from '../models/claim'

import { NavController, LoadingController, AlertController } from 'ionic-angular';

@Injectable()
export class ClaimProvider {

  constructor(private database: SQLiteProvider, alertController : AlertController) { }

  public insertClaim (claim: Claim) {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into Claim (ClaimCode, InsuredSubmitDate, InsuranceNumber, UniqueId) values (?, ?, ?, ?)';
        let data = [claim.ClaimCode, claim.InsuredSubmitDate, claim.InsuranceNumber, claim.UniqueId];
        
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public deleteClaim (UniqueId: string) {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from Claim where UniqueId = ?';
        let data = [UniqueId];
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getClaimByUniqueId (UniqueId: string) {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from Claim where UniqueId = ?';
        let data = [UniqueId];

        return db.executeSql(sql, data)
          .then((data: any) => {
            return data.rows.length;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getClaims() {
    return this.database.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from Claim';

        return db.executeSql(sql, null)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let Claims: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var Claim = data.rows.item(i);
                Claims.push(Claim);
              }
              return Claims;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}
