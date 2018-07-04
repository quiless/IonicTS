/* Angular */
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

/* Models */
import { UrlBase } from '../models/urlBase'

@Injectable()
export class CurrencyService {

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

    getCurrencies(){
        var json = {
            "Type": "Success",
            "TypeResponse": 1,
            "DataResult": [
                {
                    "Id": 1,
                    "Name": "Real",
                    "Initials": "BRL",
                    "Symbol": "R$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "2beb76b5-0f49-4745-b4be-512c81eb0645",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 2,
                    "Name": "Dolar Americano",
                    "Initials": "USD",
                    "Symbol": "U$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "8afbdfca-c2d6-4074-b33d-3aa2313f956f",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 3,
                    "Name": "Euro",
                    "Initials": "EUR",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "cfe68a08-9255-4e6d-8695-b99563ec8734",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 4,
                    "Name": "Libra esterlina",
                    "Initials": "GBP",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "94f34f94-89cd-4181-ae17-a7ef9a36d771",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 5,
                    "Name": "Franco suiço",
                    "Initials": "CHF",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "51c0664c-a11c-4bc1-9616-f98153958a3a",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 6,
                    "Name": "Coroa Dinamarquesa",
                    "Initials": "DKK",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "d58f344f-41c2-4ea5-93ee-30531b00ee99",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 7,
                    "Name": "Coroa Norueguesa",
                    "Initials": "NOK",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "0acb820c-834e-4b86-890d-39f7cc84ba95",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 8,
                    "Name": "Coroa Sueca",
                    "Initials": "SEK",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "ebcca933-e005-42cc-a7d7-6c4ae14df368",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 9,
                    "Name": "Dolar Australiano",
                    "Initials": "AUD",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "363e66b0-2f3d-4963-81d1-74039e600ab2",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 10,
                    "Name": "Dolar Canadense",
                    "Initials": "CAD",
                    "Symbol": "$",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "93facb9f-262c-41ac-abe4-e0478f5a7794",
                    "ExtendedProperties": {}
                },
                {
                    "Id": 11,
                    "Name": "Iene",
                    "Initials": "JPY",
                    "Symbol": "Y",
                    "LastCurrencyQuotationBid": null,
                    "LastCurrencyQuotationOffer": null,
                    "UniqueId": "a8173d5c-69dc-469c-aef0-eacb820a8360",
                    "ExtendedProperties": {}
                }
            ],
            "Message": null,
            "Errors": null
        }
        //return this.http.post(this.url,data, this.options);
        return json;
    }
}
