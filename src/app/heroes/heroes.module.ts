import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroComponent } from './pages/hero/hero.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListComponent } from './pages/list/list.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroImagePipe } from './pipes/image-hero.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroComponent,
    LayoutComponent,
    ListComponent,
    NewPageComponent,
    SearchPageComponent,
    HeroCardComponent,
    HeroImagePipe,
  ],
  imports: [CommonModule, HeroesRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class HeroesModule {}
