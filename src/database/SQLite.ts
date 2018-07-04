import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class SQLiteProvider {

  constructor(private sqlite: SQLite) { }

  /* Cria um banco caso não exista ou pega um banco existente com o nome no parametro */

  public getDB() {
    return this.sqlite.create({
      name: 'gclaims.db',
      location: 'default'
    });
  }

  /* Cria a estrutura inicial do banco de dados */

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
        // Criando as tabelas
        this.createTables(db);
      })
      .catch(e => console.log(e));
  }

  /**
   * Criando as tabelas no banco de dados
   * @param db
   */
  private createTables(db: SQLiteObject) {
    // Criando as tabelas
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS Incidence (Name TEXT, UniqueId TEXT)'],
      ['CREATE TABLE IF NOT EXISTS Currency (Id INTEGER, Name TEXT, UniqueId TEXT, Symbol TEXT, LastCurrencyQuotationBid TEXT, LastCurrencyQuotationOffer TEXT, Initials TEXT)'],
      ['CREATE TABLE IF NOT EXISTS IncidenceType (Name TEXT, UniqueId TEXT, IncidenceName TEXT, IncidenceUniqueId TEXT)'],
      ['CREATE TABLE IF NOT EXISTS Claim (Id INTEGER primary key AUTOINCREMENT NOT NULL, InsuredSubmitDate DATETIME, UniqueId TEXT, ClaimCode TEXT, InsuranceNumber TEXT)'],
      ['CREATE TABLE IF NOT EXISTS ClaimTimeSheet (Id INTEGER primary key AUTOINCREMENT NOT NULL, UniqueId TEXT, ClaimUniqueId TEXT, HasCashFlow  NUMERIC, IncidenceName TEXT, IncidenceUniqueId TEXT, IncidenceTypeName TEXT, IncidenceTypeUniqueId TEXT, CreateDate DATETIME, StartDate DATETIME, EndDate DATETIME, TimeSpentMinute INT, FeesGenerated INT, FeesToGenerate INT, Observation TEXT, HasCollection NUMERIC, CurrencyId INT)'],
      //['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, price REAL, duedate DATE, active integer, category_id integer, FOREIGN KEY(category_id) REFERENCES categories(id))']
    ])
    .then(() => console.log('Tabelas criadas'))
    .catch(e => console.error('Erro ao criar as tabelas', e));
  }
}