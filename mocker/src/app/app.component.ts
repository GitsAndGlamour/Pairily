import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diggly';
  links = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Login',
    href: '/login'
  }, {
    name: 'Setup',
    href: '/setup'
  }, {
    name: 'Schemas',
    href: '/schemas'
  }, {
    name: 'Schema Detail',
    href: '/schemas/1'
  }, {
    name: 'Scenarios',
    href: '/scenarios'
  }, {
    name: 'Scenario Detail',
    href: '/scenarios/1'
  }, {
    name: 'Projects',
    href: '/projects'
  }, {
    name: 'Project Detail',
    href: '/projects/1'
  }, {
    name: 'Preferences',
    href: '/preferences'
  }, {
    name: 'Datasets',
    href: '/datasets'
  }, {
    name: 'Dataset Detail',
    href: '/datasets/1'
  }, {
    name: 'Databases',
    href: '/databases'
  }, {
    name: 'Database Detail',
    href: '/databases/1'
  }, {
    name: 'APIs',
    href: '/apis'
  }, {
    name: 'API Detail',
    href: '/apis/1'
  }, {
    name: 'Generators',
    href: '/generators'
  }]
}
