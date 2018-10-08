import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { title: 'Dashboard', path: '/home', class: '', icon: 'dashboard' },
  { title: 'Projects', path: '/projects', class: '', icon: 'folder_open' },
  { title: 'Schemas', path: '/schemas', class: '', icon: 'device_hub' },
  { title: 'Datasets', path: '/datasets', class: '', icon: 'view_list' },
  { title: 'Databases', path: '/databases', class: '', icon: 'view_agenda',},
  { title: 'APIs', path: '/apis', class: '', icon: 'cloud' },
  { title: 'Scenarios', path: '/scenarios', class: '', icon: 'movie' },
  { title: 'Generators', path: '/generators', class: '', icon: 'autorenew' },
  { title: 'Setup', path: '/setup', class: '', icon: 'settings_input_component' },
  { title: 'Preferences', path: '/preferences', class: '', icon: 'settings' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
