import {Injectable} from '@angular/core';
import {RestService} from '../core/rest.service';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
import {ResponseContentType} from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private rest: RestService) {
  }


  login(payload: any){
    return this.rest.post('Jwt', payload);
  }

}
