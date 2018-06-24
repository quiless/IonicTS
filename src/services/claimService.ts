/* Angular */
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

/* Models */
import { UrlBase } from '../models/urlBase'

/* Native */
import { Storage } from '@ionic/storage';

@Injectable()
export class ClaimService {

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

    getClaim(data){
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": {
                "LossDate": "2015-10-22T00:00:00",
                "InsuredSubmitDate": "2015-10-27T21:00:00",
                "ReceivedDate": "2015-10-27T21:00:00",
                "UniqueId": "67fba1b4-aa71-4970-9f13-3f4be75998b1",
                "ClaimCode": "201510MF023",
                "OperationName": null,
                "CoverageName": null,
                "InsuranceName": null,
                "InsuranceNumber": "01.96.15.01705",
                "SponsorName": null,
                "ProductName": null,
                "InsuredName": null,
                "BrokerName": null,
                "BrokerContactName": null,
                "LastSituationName": null,
                "AdjusterName": null,
                "HasDocumentToReceive": false,
                "ClaimRequestDocuments": []
            },
            "Message": null,
            "Errors": null
        }
        //console.log(this.url);
        //return this.http.post(this.url,data, this.options);
        return json;
    }

}