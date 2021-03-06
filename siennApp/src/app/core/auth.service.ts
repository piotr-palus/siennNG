import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}`;
  }

  login(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Jwt`, `UserName=${payload.UserName}&Password=${payload.Password}`);
  }

}
