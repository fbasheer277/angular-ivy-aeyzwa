import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { MenuHeaderComponent } from './menu-header/menu-header.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeTabComponent } from './app-tabs/home-tab/home-tab.component';
import { FarmTabComponent } from './app-tabs/farm-tab/farm-tab.component';
import { SnacksTabComponent } from './app-tabs/snacks-tab/snacks-tab.component';
import { MenuNavItemComponent } from './menu-nav-item/menu-nav-item.component';
import { AnimalsTabComponent } from './app-tabs/farm-tab/animals-tab/animals-tab.component';
import { PlantsTabComponent } from './app-tabs/farm-tab/plants-tab/plants-tab.component';
import { ToolsTabComponent } from './app-tabs/farm-tab/tools-tab/tools-tab.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    HomeTabComponent,
    FarmTabComponent,
    SnacksTabComponent,
    MenuNavItemComponent,
    AnimalsTabComponent,
    PlantsTabComponent,
    ToolsTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
