import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEpisodeComponent } from './list-episode/list-episode.component';
import { ViewEpisodeComponent } from './view-episode/view-episode.component';

const routes: Routes = [
  {
      path: '',
      children: [
          {path: '', component: ListEpisodeComponent},
          {path: ':id', component: ViewEpisodeComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
