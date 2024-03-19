import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  public sidebarItems = [
    {
      label: 'List',
      icon: 'label',
      url: './list'
    },
    {
      label: 'New Hero',
      icon: 'add',
      url: './new'
    },
    {
      label: 'Search',
      icon: 'search',
      url: './search'
    }
  ]
}
