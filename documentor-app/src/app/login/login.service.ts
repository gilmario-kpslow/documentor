import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {

  url = 'environment.api';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${this.url}/autenticar`, { username, password });
  }
}
