import {Injectable} from '@angular/core';
import {Http, RequestMethod, RequestOptions, Request} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RestService {
  apiUrl = 'http://recruits.siennsoft.com/swagger/v1/';

  constructor(private http: Http) {
  }


  private _request(reqArgs) {
    const options = reqArgs;
    const reqOptions = new RequestOptions(options);
    const req = new Request(reqOptions);
    return this.http.request(req);
  }

  public post(url: string, body: any): Observable<any> {
    return this._request({method: RequestMethod.Post, body: body, url: this.apiUrl + url});
  }

  public get(url: string): Observable<any> {
    return this._request({method: RequestMethod.Get, body: '', url: this.apiUrl + url});
  }

  public delete(url: string): Observable<any> {
    return this._request({method: RequestMethod.Delete, body: '', url: this.apiUrl + url});
  }

  public put(url: string, body): Observable<any> {
    return this._request({method: RequestMethod.Put, body: body, url: this.apiUrl + url});
  }

  public patch(url: string, body): Observable<any> {
    return this._request({method: RequestMethod.Patch, body: body, url: this.apiUrl + url});
  }

}
