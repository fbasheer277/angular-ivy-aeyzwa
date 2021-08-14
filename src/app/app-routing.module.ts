import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsTabComponent } from './app-tabs/farm-tab/animals-tab/animals-tab.component';
import { FarmTabComponent } from './app-tabs/farm-tab/farm-tab.component';
import { PlantsTabComponent } from './app-tabs/farm-tab/plants-tab/plants-tab.component';
import { ToolsTabComponent } from './app-tabs/farm-tab/tools-tab/tools-tab.component';
import { HomeTabComponent } from './app-tabs/home-tab/home-tab.component';
import { SnacksTabComponent } from './app-tabs/snacks-tab/snacks-tab.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: `/home`,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeTabComponent,
    children: []
  },
  {
    path: 'farm-supplies',
    component: FarmTabComponent,
    children: [
      {
        path: 'livestock',
        component: AnimalsTabComponent,
      },
      {
        path: 'plants',
        component: PlantsTabComponent,
      },
      {
        path: 'tools',
        component: ToolsTabComponent,
      }
    ]
  },
  {
    path: 'snacks',
    component: SnacksTabComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
