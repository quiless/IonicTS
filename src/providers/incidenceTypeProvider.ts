/* Angular */
import { Injectable } from '@angular/core';

/* Ionic */
import { SQLiteObject } from '@ionic-native/sqlite';

/* Database */
import { SQLiteProvider } from '../database/SQLite';

/* Models */

import { IncidenceType } from '../models/incidenceType'

@Injectable()
export class IncidenceTypeProvider {

    constructor(private database: SQLiteProvider) { }

    public insertIncidenceType (incidenceType: IncidenceType) {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'insert into IncidenceType (Name, UniqueId, IncidenceName, IncidenceUniqueId) values (?, ?, ?, ?)';
            let data = [incidenceType.Name, incidenceType.UniqueId, incidenceType.IncidenceName, incidenceType.IncidenceUniqueId];
            
            return db.executeSql(sql, data)
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }

    public updateIncidenceType ( incidenceType : IncidenceType){
        return this.database.getDB()
        .then((db: SQLiteObject) => {
            let sql = 'update IncidenceType set Name = ?, IncidenceName = ?, IncidenceUniqueId = ? where UniqueId = ?';
            let data = [incidenceType.Name, incidenceType.IncidenceName,  incidenceType.IncidenceUniqueId, incidenceType.UniqueId];
            
            return db.executeSql(sql, data)
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }
    
    public deleteIncidenceType (UniqueId: string) {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'delete from IncidenceType where UniqueId = ?';
            let data = [UniqueId];
            return db.executeSql(sql, data)
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }
    
    public getIncidenceTypeByUniqueId (UniqueId: string) {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'select * from IncidenceType where UniqueId = ?';
            let data = [UniqueId];

            return db.executeSql(sql, data)
                .then((data: any) => {
                return data.rows.length;
                })
                .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }
    
    public getIncidenceTypeByIncidenceUniqueId(UniqueId : string) {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'select * from IncidenceType where IncidenceUniqueId = ?';
            let data = [UniqueId];

        return db.executeSql(sql, data)
            .then((data: any) => {
                console.log(data.rows);
            if (data.rows.length > 0) {
                let IncidenceTypes: any[] = [];
                for (var i = 0; i < data.rows.length; i++) {
                var IncidenceType = data.rows.item(i);
                IncidenceTypes.push(IncidenceType);
                }
                console.log(IncidenceTypes);
                return IncidenceTypes;
            } else {
                return [];
            }
            })
            .catch((e) => console.error(e));
        })
        .catch((e) => console.error(e));
    }   

    public getIncidenceTypes() {
        return this.database.getDB()
            .then((db: SQLiteObject) => {
            let sql = 'select * from IncidenceType';

        return db.executeSql(sql, null)
            .then((data: any) => {
            if (data.rows.length > 0) {
                let IncidenceTypes: any[] = [];
                for (var i = 0; i < data.rows.length; i++) {
                var IncidenceType = data.rows.item(i);
                IncidenceTypes.push(IncidenceType);
                }
                return IncidenceTypes;
            } else {
                return [];
            }
            })
            .catch((e) => console.error(e));
        })
        .catch((e) => console.error(e));
    }   
}