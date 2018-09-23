import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MdcDrawer} from "@angular-mdc/web";

class Link {
  label: string;
  href: string;
  icon: string;
  menu?: Link[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  @ViewChild('drawer') drawer:MdcDrawer;
  imageIndex = 1;
  title = 'Diggly';
  showDrawerLabels = true;
  drawerToggleIcon: string = 'apps';
  links: Link[] = [{
    label: 'Home',
    href: '/',
    icon: 'home',
    menu: []
  }, {
    label: 'Login',
    href: '/login',
    icon: 'lock',
    menu: []
  }, {
    label: 'Projects',
    href: '/projects',
    icon: 'folder_open',
    menu: [{
      label: 'Project 1',
      href: '/projects/1',
      icon: ''
    }]
  }, {
    label: 'Schemas',
    href: '/schemas',
    icon: 'device_hub',
    menu: [{
      label: 'Schema 1',
      href: '/schemas/1',
      icon: ''
    }, {
      label: 'Schema 2',
      href: '/schemas/2',
      icon: ''
    }]
  }, {
    label: 'Datasets',
    href: '/datasets',
    icon: 'view_list',
    menu: [{
      label: 'Dataset 1',
      href: '/datasets/1',
      icon: ''
    }, {
      label: 'Dataset 2',
      href: '/datasets/2',
      icon: ''
    }]
  }, {
    label: 'Databases',
    href: '/databases',
    icon: 'view_agenda',
    menu: [{
      label: 'Database 1',
      href: '/databases/1',
      icon: ''
    }]
  }, {
    label: 'APIs',
    href: '/apis',
    icon: 'cloud',
    menu: [{
      label: 'API 1',
      href: '/apis/1',
      icon: ''
    }]
  }, {
    label: 'Scenarios',
    href: '/scenarios',
    icon: 'movie',
    menu: [{
      label: 'Scenario 1',
      href: '/scenarios/1',
      icon: ''
    }]
  }, {
    label: 'Generators',
    href: '/generators',
    icon: 'autorenew',
    menu: [{
      label: 'Generator 1',
      href: '/generators/1',
      icon: ''
    }]
  }, {
    label: 'Setup',
    href: '/setup',
    icon: 'settings_input_component',
    menu: []
  }, {
    label: 'Preferences',
    href: '/preferences',
    icon: 'settings',
    menu: []
  }];

  ngAfterViewInit(): void {
    this.drawer.open();
  }

  toggleDrawer() {
    this.showDrawerLabels = !this.showDrawerLabels;
    this.drawerToggleIcon = this.showDrawerLabels? 'apps' : 'view_list';
    console.log(this.drawerToggleIcon, this.showDrawerLabels);
  }

  cycleHeaderImages() {
    if (this.imageIndex == 10) {
      this.imageIndex = 0;
    }
    this.imageIndex++;
  }


}
