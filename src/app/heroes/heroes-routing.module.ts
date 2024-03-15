import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { ListComponent } from './pages/list/list.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroComponent } from './pages/hero/hero.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: 'list', component: ListComponent},
        { path: 'new', component: NewPageComponent},
        { path: 'search', component: SearchPageComponent},
        { path: 'edit/:id', component: NewPageComponent},
        { path: ':id', component: HeroComponent},
        { path: '**', redirectTo: 'list'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
