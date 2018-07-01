/* Angular */
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

/* Models */
import { UrlBase } from '../models/urlBase'

@Injectable()
export class IncidenceService {

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

    getIncidences(){
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": [
                {
                    "UniqueId": "dcf78620-01ba-47f2-8447-a43df37ee9d4",
                    "Name": "Serviço Interno"
                },
                {
                    "UniqueId": "ed6fff8c-12c5-4f0a-871d-fa435cf3efe6",
                    "Name": "Serviço Externo"
                }
            ],
            "Message": null,
            "Errors": null
        }
        //return this.http.post(this.url,data, this.options);
        return json;
    }
}