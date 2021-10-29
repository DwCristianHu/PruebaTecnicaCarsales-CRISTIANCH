import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonConvert } from 'json2typescript';
import { map } from 'rxjs/operators';
import { CharacterList, Character } from '../../models/character';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  
  constructor(private httpClient: HttpClient) { }

  getCharactersByListId(listId: string[]): Observable<any[]> {

    return this.httpClient.get<any[]>(`${API_URL}character/${listId}`)
  }
}
