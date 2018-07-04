/* Angular */
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

/* Models */
import { UrlBase } from '../models/urlBase'

@Injectable()
export class IncidenceTypeService {

    header = new Headers();
    options = new RequestOptions();
    url = new UrlBase().getBaseURL();

    constructor(public http: Http){
        this.header.append('Access-Control-Allow-Origin' , '*');
        this.header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.header.append('Accept','application/json');
        this.header.append('content-type','application/json');
        this.options = new RequestOptions({
        headers: this.header,
        });
        
    }

    getIncidenceTypes(){
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": [
                {
                    "UniqueId": "9115c247-45f9-45ef-93bb-e38660dde8cd",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Interno"
                },
                {
                    "UniqueId": "225b7427-dea8-4faf-b2cd-6d9f969e4588",
                    "IncidenceUniqueId": "1aa419af-fdfa-470d-b784-8da74a372b56",
                    "IncidenceName": "Serviço Externo",
                    "Name": "Vistoria"
                },
                {
                    "UniqueId": "04fee9da-afae-4620-82ee-3244b618ec05",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Documentos"
                },
                {
                    "UniqueId": "be063880-7e0d-4231-8d9c-715cce159eba",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Emails"
                },
                {
                    "UniqueId": "4dde8244-7a21-4d7f-995e-7028e3ee1148",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Contatos telefônicos"
                },
                {
                    "UniqueId": "f9707dcc-9219-489b-899c-9bdf01e580f0",
                    "IncidenceUniqueId": "7230fcdd-f89d-4eab-9411-11d406acfb7d",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Relatório"
                },
                {
                    "UniqueId": "b5ce35ee-ba48-4372-aeac-9bfcfb42894f",
                    "IncidenceUniqueId": "1aa419af-fdfa-470d-b784-8da74a372b56",
                    "IncidenceName": "Serviço Externo",
                    "Name": "Reunião"
                },
                {
                    "UniqueId": "4465831f-ea3f-47e5-bef0-4f54caa6fb73",
                    "IncidenceUniqueId": "1aa419af-fdfa-470d-b784-8da74a372b56",
                    "IncidenceName": "Serviço Externo",
                    "Name": "Outros"
                }
            ],
            "Message": null,
            "Errors": null
        }
        //return this.http.post(this.url,data, this.options);
        return json;
    }
}