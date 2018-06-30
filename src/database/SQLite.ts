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
      ['CREATE TABLE IF NOT EXISTS Claim (Id INTEGER primary key AUTOINCREMENT NOT NULL, InsuredSubmitDate DATETIME, UniqueId TEXT, ClaimCode TEXT, InsuranceNumber TEXT)'],
      ['CREATE TABLE IF NOT EXISTS ClaimTimeSheet (Id INTEGER primary key AUTOINCREMENT NOT NULL, UniqueId TEXT, ClaimUniqueId TEXT, HasCashFlow  NUMERIC, IncidenceName TEXT, IncidenceUniqueId TEXT, IncidenceTypeName TEXT, IncidenceTypeUniqueId TEXT, CreateDate DATETIME, StartDate DATETIME, EndDate DATETIME, TimeSpentMinute INT, FeesGenerated INT, FeesToGenerate INT, Observation TEXT, HasCollection NUMERIC )'],
      //['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, price REAL, duedate DATE, active integer, category_id integer, FOREIGN KEY(category_id) REFERENCES categories(id))']
    ])
    .then(() => console.log('Tabelas criadas'))
    .catch(e => console.error('Erro ao criar as tabelas', e));
  }

  // /**
  //  * Incluindo os dados padrões
  //  * @param db
  //  */
  // private insertDefaultItems(db: SQLiteObject) {
  //   db.executeSql('select COUNT(id) as qtd from categories', {})
  //   .then((data: any) => {
  //     //Se não existe nenhum registro
  //     if (data.rows.item(0).qtd == 0) {

  //       // Criando as tabelas
  //       db.sqlBatch([
  //         ['insert into categories (name) values (?)', ['Hambúrgueres']],
  //         ['insert into categories (name) values (?)', ['Bebidas']],
  //         ['insert into categories (name) values (?)', ['Sobremesas']]
  //       ])
  //         .then(() => console.log('Dados padrões incluídos'))
  //         .catch(e => console.error('Erro ao incluir dados padrões', e));

  //     }
  //   })
  //   .catch(e => console.error('Erro ao consultar a qtd de categorias', e));
  // }
}