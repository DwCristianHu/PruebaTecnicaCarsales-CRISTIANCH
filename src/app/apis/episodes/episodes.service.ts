import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Episode, Episodes } from '../../models/episode';
import { JsonConvert } from 'json2typescript';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private httpClient: HttpClient) { }

  getEpisode(episode: Episode): Observable<Episode> {

    return this.httpClient.get<Episode>(`${API_URL}episode/${episode.id}`).pipe(
        map(e =>
            new JsonConvert().deserializeObject(e, Episode)
        )
    );
  }

  listEpisodes(page: string): Observable<Episodes> {

    return this.httpClient.get<Episodes>(`${API_URL}episode?page=${page}`).pipe(
        map(e =>
            new JsonConvert().deserializeObject(e, Episodes)
        )
    );
  }

  filterEpisodes(code: string): Observable<Episodes> {

    return this.httpClient.get<Episodes>(`${API_URL}episode?episode=${code}`).pipe(
        map(e =>
            new JsonConvert().deserializeObject(e, Episodes)
        )
    );
  }
}
