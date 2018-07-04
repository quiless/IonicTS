/* Angular */
import { Injectable } from '@angular/core';

/* Ionic */
import { SQLiteObject } from '@ionic-native/sqlite';

/* Database */
import { SQLiteProvider } from '../database/SQLite';

/* Models */

import { Currency } from '../models/currency'

@Injectable()
export class CurrencyProvider {

    constructor(private database: SQLiteProvider) { }

    Id : number;
    Name : String;
    Initials : String;
    Symbol : String;
    LastCurrencyQuotationBid : any;
    LastCurrencyQuotationOffer : any;
    UniqueId : String;

    public insertCurrency (currency: Currency) {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'insert into Currency (Id,Name, Initials, Symbol, LastCurrencyQuotationBid, LastCurrencyQuotationOffer, UniqueId) values (?, ?, ?, ?, ?, ?, ?)';
            let data = [currency.Id, currency.Name, currency.Initials, currency.Symbol, currency.LastCurrencyQuotationBid, currency.LastCurrencyQuotationOffer, currency.UniqueId];
            
            return db.executeSql(sql, data)
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }

    public updateCurrency ( currency: Currency){
        return this.database.getDB()
        .then((db: SQLiteObject) => {
            let sql = 'update Currency set Name = ?, Initials = ?, Symbol = ?,  LastCurrencyQuotationBid = ?, LastCurrencyQuotationOffer = ? where UniqueId = ?';
            let data = [currency.Name, currency.Initials, currency.Symbol, currency.LastCurrencyQuotationBid, currency.LastCurrencyQuotationOffer, currency.UniqueId];
            
            return db.executeSql(sql, data)
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }
    
    public deleteCurrency (UniqueId: string) {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'delete from Currency where UniqueId = ?';
            let data = [UniqueId];
            return db.executeSql(sql, data)
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }

    public getCurrencyByUniqueId (UniqueId: string) {
        return this.database.getDB()
          .then((db: SQLiteObject) => {
            let sql = 'select * from Currency where UniqueId = ?';
            let data = [UniqueId];
    
            return db.executeSql(sql, data)
              .then((data: any) => {
                return data.rows.length;
              })
              .catch((e) => console.error(e));
          })
          .catch((e) => console.error(e));
      }
    
    
    public getCurrencies () {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'select * from Currency';

        return db.executeSql(sql, null)
            .then((data: any) => {
            if (data.rows.length > 0) {
                let Currencies: any[] = [];
                for (var i = 0; i < data.rows.length; i++) {
                var Currency = data.rows.item(i);
                Currencies.push(Currency);
                }
                return Currencies;
            } else {
                return [];
            }
            })
            .catch((e) => console.error(e));
        })
        .catch((e) => console.error(e));
    }   
}