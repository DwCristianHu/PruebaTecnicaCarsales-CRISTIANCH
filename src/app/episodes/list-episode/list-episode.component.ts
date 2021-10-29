import { Component, OnInit } from '@angular/core';
import { Episode, Info } from '../../models/episode';
import { EpisodesService } from '../../apis/episodes/episodes.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-episode',
  templateUrl: './list-episode.component.html',
  styleUrls: ['./list-episode.component.scss']
})
export class ListEpisodeComponent implements OnInit {

  public episodes : Episode[] | undefined; 
  public infoPaginator: Info | undefined;
  public page: string = '1';
  public nextPage: string | undefined;
  public prevPage: string | undefined;

  
  public filterSearch: string | undefined;

  public form = this.fb.group({
    search:  new FormControl('', [Validators.maxLength(10)]),
  });

  constructor(
    
    private episodesService : EpisodesService,
    private fb: FormBuilder,
    public router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.listEpisodes(this.page);
  }

  listEpisodes(page: string): void {

    this.episodesService.listEpisodes(page).subscribe(
      episodes => {
        this.infoPaginator = episodes.info;
        this.episodes = episodes.results;
        this.nextPage = episodes.info?.next?.substr(episodes.info.next.length -1 );
        this.prevPage = episodes.info?.prev?.substr(episodes.info.prev.length -1 );
      }
    )
  }

  changePage(page: string): void {
      switch (page) {
        case 'next':
          if(this.nextPage != undefined){
            this.listEpisodes(this.nextPage);  
          }
          break;
      
        case 'prev':
          if(this.prevPage != undefined){
            this.listEpisodes(this.prevPage);  
          }
          break;
      }
  }

  filterListEpisodes() : void {

    let code = this.form.get('search')?.value;
    console.log(code);
    if(this.form?.valid && code != undefined){

      
      this.episodesService.filterEpisodes(code).subscribe(
        episodes => {
          this.infoPaginator = episodes.info;
          this.episodes = episodes.results;
          this.nextPage = episodes.info?.next?.substr(episodes.info.next.length -1 );
          this.prevPage = episodes.info?.prev?.substr(episodes.info.prev.length -1 );
        }
      )
    }
  }

  resetFilterListEpisodes(): void {
    this.form.reset();
    this.listEpisodes(this.page);
  }

  viewEpisode(episode: Episode): void {
    this.router.navigate([episode.id], {relativeTo: this.route}).then();
  }
}
