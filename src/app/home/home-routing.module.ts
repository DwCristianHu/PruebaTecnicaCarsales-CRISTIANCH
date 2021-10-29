import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
      path: '',
      children: [
          {path: '', component: MainPageComponent},
          {path: 'episodes', loadChildren: () => import('../episodes/episodes.module').then(m => m.EpisodesModule)},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
