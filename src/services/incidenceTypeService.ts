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
                    "UniqueId": "346db5a5-71a6-4a9d-bbe5-d4eaf043d0d5",
                    "IncidenceUniqueId": "dcf78620-01ba-47f2-8447-a43df37ee9d4",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Documentos"
                },
                {
                    "UniqueId": "15b24b3b-b483-4a36-93dd-70e159be67da",
                    "IncidenceUniqueId": "dcf78620-01ba-47f2-8447-a43df37ee9d4",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Emails"
                },
                {
                    "UniqueId": "8bcb0676-d065-4318-beb1-008e3b1cc61b",
                    "IncidenceUniqueId": "dcf78620-01ba-47f2-8447-a43df37ee9d4",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Contatos telefônicos"
                },
                {
                    "UniqueId": "c14ed1f2-7566-4e07-a434-b024a58dbc9f",
                    "IncidenceUniqueId": "dcf78620-01ba-47f2-8447-a43df37ee9d4",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Relatório"
                },
                {
                    "UniqueId": "28515932-1a38-4ebf-9bbd-c2becf067f63",
                    "IncidenceUniqueId": "dcf78620-01ba-47f2-8447-a43df37ee9d4",
                    "IncidenceName": "Serviço Interno",
                    "Name": "Interno"
                },
                {
                    "UniqueId": "233d1afa-b3f3-4a5c-8f0b-aebeab82ea9f",
                    "IncidenceUniqueId": "ed6fff8c-12c5-4f0a-871d-fa435cf3efe6",
                    "IncidenceName": "Serviço Externo",
                    "Name": "Vistoria"
                },
                {
                    "UniqueId": "60d90c73-c7ec-4f02-a226-7eaf145de20a",
                    "IncidenceUniqueId": "ed6fff8c-12c5-4f0a-871d-fa435cf3efe6",
                    "IncidenceName": "Serviço Externo",
                    "Name": "Reunião"
                },
                {
                    "UniqueId": "4ec7c245-64ab-4283-8c2b-13b1b7f07fc3",
                    "IncidenceUniqueId": "ed6fff8c-12c5-4f0a-871d-fa435cf3efe6",
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