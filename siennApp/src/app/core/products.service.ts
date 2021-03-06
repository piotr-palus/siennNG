import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductsService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}`;
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Products`);
  }

}
