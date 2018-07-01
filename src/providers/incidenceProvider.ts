/* Angular */
import { Injectable } from '@angular/core';

/* Ionic */
import { SQLiteObject } from '@ionic-native/sqlite';

/* Database */
import { SQLiteProvider } from '../database/SQLite';

/* Models */

import { Incidence } from '../models/incidence'

@Injectable()
export class IncidenceProvider {

    constructor(private database: SQLiteProvider) { }

    public insertIncidence (incidence: Incidence) {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'insert into Incidence (Name, UniqueId) values (?, ?)';
            let data = [incidence.Name, incidence.UniqueId];
            
            return db.executeSql(sql, data)
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }

    public updateIncidence( incidence : Incidence){
        return this.database.getDB()
        .then((db: SQLiteObject) => {
            let sql = 'update Incidence set Name = ? where UniqueId = ?';
            let data = [incidence.Name, incidence.UniqueId];
            
            return db.executeSql(sql, data)
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }
    
    public deleteIncidence (UniqueId: string) {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'delete from Incidence where UniqueId = ?';
            let data = [UniqueId];
            return db.executeSql(sql, data)
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }
    
    public getIncidenceByUniqueId (UniqueId: string) {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'select * from Incidence where UniqueId = ?';
            let data = [UniqueId];

            return db.executeSql(sql, data)
                .then((data: any) => {
                return data.rows.length;
                })
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }
    
    public getIncidences() {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'select * from Incidence';

        return db.executeSql(sql, null)
            .then((data: any) => {
            if (data.rows.length > 0) {
                let Incidences: any[] = [];
                for (var i = 0; i < data.rows.length; i++) {
                var Incidence = data.rows.item(i);
                Incidences.push(Incidence);
                }
                return Incidences;
            } else {
                return [];
            }
            })
            .catch((e) => console.error(e));
        })
        .catch((e) => console.error(e));
    }   
}