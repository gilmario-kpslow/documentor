import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DicasService {

  url = 'http://localhost:8080/dica'
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.url);
  }

  salvar(dica: any) {
    return this.http.post(this.url, dica);
  }
}
