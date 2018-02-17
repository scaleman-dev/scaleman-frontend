import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Util } from './util';

@Injectable()
export class HttpService {

    constructor(private http: Http, private util: Util) {

    }

    get(endpoint, params?) {
        let headers = new Headers({});
        let requestOptions = new RequestOptions({headers: headers});
        let url = this.urlBuilder(endpoint, params);
        return this.http.get(url, requestOptions);
    }

    post(endpoint, params?, urlParams?, formData?) {
        console.log(endpoint);
        let headers = new Headers({});
        let url = this.urlBuilder(endpoint, urlParams);
        if (formData === undefined) {
            headers = new Headers({'Content-Type' : 'application/json'});
            let requestOptions = new RequestOptions({headers: headers});
            console.log('sending json data');
            console.log(params);

            return this.http.post(url, JSON.stringify(params), requestOptions);
        } else {
            console.log('sending form data');
            headers = new Headers({});
            let requestOptions = new RequestOptions({headers: headers});
            console.log(params);
            return this.http.post(url, params, requestOptions);
        }
    }

    urlBuilder(endpoint, params?) {
        let url = this.util.host + endpoint;
        if (params !== null) {
            for (let key in params) {
              if (url.indexOf('?') === -1) {
                  url += '?' + key + '=' + params[key];
              } else {
                  url += '&' + key + '=' + params[key];
              }
            }
        }
        return url;
    }
}