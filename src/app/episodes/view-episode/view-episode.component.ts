import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode } from '../../models/episode';
import { EpisodesService } from '../../apis/episodes/episodes.service';
import { Character } from '../../models/character';
import { CharactersService } from '../../apis/characters/characters.service';

@Component({
  selector: 'app-view-episode',
  templateUrl: './view-episode.component.html',
  styleUrls: ['./view-episode.component.scss']
})
export class ViewEpisodeComponent implements OnInit {

  private sub: any;
  public episode: Episode = new Episode();
  public characters: Character [] = [];
  public listIdCharacters: string [] = [];

  constructor(
    public router: Router, 
    private route: ActivatedRoute,
    private episodesService: EpisodesService,
    private chactersService: CharactersService

  ) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {

      this.episode.id = +params.id;
      this.getEpisode(); 
    });
  }

  getEpisode(): void{

    this.episodesService.getEpisode(this.episode).subscribe(
      episode => {
        this.episode = episode;
        this.listCharacters();
      }
    )
    
  }

  listCharacters(): void{

    this.episode.characters.forEach((item) => {
      
      let id = item.match(/\d+/g)?.toString();
      if(id != undefined) this.listIdCharacters.push(id);
    });
    
    this.chactersService.getCharactersByListId(this.listIdCharacters).subscribe(
      characters => {
        this.characters = characters;
      }
    )
  }

}
