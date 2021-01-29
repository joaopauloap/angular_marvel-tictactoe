import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Personagem } from './personagens.model';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  constructor(private http: HttpClient) { }

  showOnConsole(msg: string) {
    console.log(msg)
  }

  read():any {
    return this.http.get<any>("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7d667955e9a3836990a5a529ac097762&hash=9b564cbeccdf68457cbb46b70684614e")
  }

}
