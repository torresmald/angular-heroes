import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroComponent } from './pages/hero/hero.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListComponent } from './pages/list/list.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HeroComponent,
    LayoutComponent,
    ListComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
