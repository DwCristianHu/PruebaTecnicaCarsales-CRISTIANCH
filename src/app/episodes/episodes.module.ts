import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { ListEpisodeComponent } from './list-episode/list-episode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEpisodeComponent } from './view-episode/view-episode.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ListEpisodeComponent, ViewEpisodeComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class EpisodesModule { }
