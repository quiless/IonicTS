/* Angular */
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

/* Models */
import { UrlBase } from '../models/urlBase'

/* Native */
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthService {

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

    authenticate(data){
        var json = {    
                "Type": "Success",
                "TypeResponse": 1,
                "DataResult": {
                    "ResultType": 0,
                    "userInfoAuthToken": "2f647676-803a-43f6-8a5e-63962ae1ea2d",
                    "userInfoUniqueId": "d5c1b34b-9172-4502-9843-deb08120a770",
                    "userInfoDisplayName": "Luis Felipe Dutra",
                    "userInfoPersonDisplayName": "Luis Felipe Dutra",
                    "userType": "Employee",
                    "jwtToken": null
                },
                "Message": null,
                "Errors": null
        }
        //console.log(this.url);
        //return this.http.post(this.url,data, this.options);
        return json;
    }

}
