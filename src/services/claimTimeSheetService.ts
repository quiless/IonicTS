/* Angular */
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

/* Models */
import { UrlBase } from '../models/urlBase'

/* Native */
import { Storage } from '@ionic/storage';

@Injectable()
export class ClaimTimeSheetService {

    header = new Headers();
    options = new RequestOptions();
    url = new UrlBase().getBaseURL();

    constructor(public http: Http,private storage: Storage){
        this.header.append('Access-Control-Allow-Origin' , '*');
        this.header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.header.append('Accept','application/json');
        this.header.append('content-type','application/json');
        this.options = new RequestOptions({
        headers: this.header,
        });
        
    }

    getClaimTimeSheet(data){
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": [
                {
                    "UniqueId": "324772bb-fd5d-4af7-aedc-64442eaee66b",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Documentos",
                    "IncidenceTypeUniqueId": "04fee9da-afae-4620-82ee-3244b618ec05",
                    "CreateDate": "2016-04-28T11:25:12.83",
                    "StartDate": "2016-02-29T09:00:00",
                    "EndDate": "2016-02-29T10:00:00",
                    "TimeSpentMinute": 60,
                    "FeesGenerated": 250,
                    "FeesToGenerate": 0,
                    "Observation": "Análise documentos e e-mail de reiteração",
                    "HasCollection": true
                },
                {
                    "UniqueId": "eb18f532-b46c-4106-bd1c-b37cf64925b7",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Relatório",
                    "IncidenceTypeUniqueId": "f9707dcc-9219-489b-899c-9bdf01e580f0",
                    "CreateDate": "2016-04-28T11:32:33.543",
                    "StartDate": "2016-04-15T10:00:00",
                    "EndDate": "2016-04-15T15:30:00",
                    "TimeSpentMinute": 330,
                    "FeesGenerated": 1375,
                    "FeesToGenerate": 0,
                    "Observation": "Encerramento do Processo conforme instruções por Decurso de Prazo",
                    "HasCollection": true
                },
                {
                    "UniqueId": "b332d81c-0c29-4b33-8b33-6af308c450ce",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Documentos",
                    "IncidenceTypeUniqueId": "04fee9da-afae-4620-82ee-3244b618ec05",
                    "CreateDate": "2016-04-28T11:42:13.803",
                    "StartDate": "2016-01-13T09:00:00",
                    "EndDate": "2016-01-13T11:30:00",
                    "TimeSpentMinute": 150,
                    "FeesGenerated": 625,
                    "FeesToGenerate": 0,
                    "Observation": "Análise documentos recepcionados e reiteração dos faltantes",
                    "HasCollection": true
                },
                {
                    "UniqueId": "3a14dbcb-f0b7-46d1-9bf6-32db12e1f2d2",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Contatos telefônicos",
                    "IncidenceTypeUniqueId": "4dde8244-7a21-4d7f-995e-7028e3ee1148",
                    "CreateDate": "2016-04-28T11:44:59.3",
                    "StartDate": "2016-02-10T09:00:00",
                    "EndDate": "2016-02-10T09:20:00",
                    "TimeSpentMinute": 20,
                    "FeesGenerated": 83.33333333333325,
                    "FeesToGenerate": 0,
                    "Observation": "Contato com o Segurado Sr. Wlademir para explicações solicitadas em relação aos documentos necessários",
                    "HasCollection": true
                },
                {
                    "UniqueId": "c5e09b77-2bd3-47b8-8a05-22dbaa0820d7",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Documentos",
                    "IncidenceTypeUniqueId": "04fee9da-afae-4620-82ee-3244b618ec05",
                    "CreateDate": "2016-04-28T11:56:00.19",
                    "StartDate": "2016-02-12T09:00:00",
                    "EndDate": "2016-02-12T11:20:00",
                    "TimeSpentMinute": 140,
                    "FeesGenerated": 583.3333333333325,
                    "FeesToGenerate": 0,
                    "Observation": "Análise de novos documentos recepcionados e reiteração de documentos faltantes",
                    "HasCollection": true
                },
                {
                    "UniqueId": "88e0b463-42fd-4c2c-9b56-7e42a58b69c2",
                    "ClaimUniqueId": "4171E590-6B6B-448B-9206-2E646B167808",
                    "HasCashFlow": true,
                    "IncidenceName": "Serviço Interno",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "CurrencyId": 1,
                    "IncidenceTypeName": "Contatos telefônicos",
                    "IncidenceTypeUniqueId": "4dde8244-7a21-4d7f-995e-7028e3ee1148",
                    "CreateDate": "2016-04-28T12:00:36.187",
                    "StartDate": "2016-02-16T10:00:00",
                    "EndDate": "2016-02-16T10:30:00",
                    "TimeSpentMinute": 30,
                    "FeesGenerated": 125,
                    "FeesToGenerate": 0,
                    "Observation": "Reunião via fone com o Técnico Luiz Carlos da empresa Geratech, responsável pelo equpamento do Segurado",
                    "HasCollection": true
                }
            ],
            "Message": null,
            "Errors": null
        }
        //return this.http.post(this.url,data, this.options);
        return json;
    }

}