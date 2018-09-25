import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MdcDrawer} from "@angular-mdc/web";
import {AuthService} from "./auth.service";

class Link {
  label: string;
  href?: string;
  icon: string;
  menu?: Link[];
}

const LINKS: Link[] = [{
  label: 'Home',
  href: '/',
  icon: 'home',
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit {
  @ViewChild('drawer') drawer: MdcDrawer;
  email;
  password;
  title = 'Diggly';
  links: Link[] = LINKS;
  imageIndex = 1;
  signup = {
    label: 'Signup',
    icon: 'person_add'
  };
  login = {
    label: 'Login',
    icon: 'lock_open'
  };
  logout = {
    label: 'logout',
    icon: 'lock'
  };
  auth: Link = this.login;
  loggedIn = false;
  showDrawerLabels = true;
  showAuthForm = false;
  drawerToggleIcon: string = 'apps';

  constructor(private authentication: AuthService) {}

  ngAfterViewInit(): void {
    this.drawer.open();
  }

  toggleDrawer() {
    this.showDrawerLabels = !this.showDrawerLabels;
    this.drawerToggleIcon = this.showDrawerLabels? 'apps' : 'view_list';
  }

  toggleAuthType(type: string) {
    this.showDrawerLabels = true;
    this.drawerToggleIcon = 'view_list';
    this.showAuthForm = true;
    switch (type) {
      case 'signup': this.auth = this.signup; break;
      case 'login': this.auth = this.login; break;
      default: this.auth = this.logout;
    }
  document.getElementById('google-button').scrollIntoView();
  }

  submit(emailInput: string, passwordInput: string) {
    this.email = emailInput;
    this.password = passwordInput;
    switch (this.auth) {
      case this.signup: this.doSignup(); break;
      case this.login: this.doLogin(); break;
      default: this.doLogout();
    }
  }

  doSignup() {
    this.authentication.signup(this.email, this.password, () => this.handleAuthSuccess());
  }

  doLogin() {
    this.authentication.login(this.email, this.password, () => this.handleAuthSuccess());
  }

  doGoogleLogin() {
    this.authentication.google(() => this.handleAuthSuccess());
  }

  doLogout() {
    this.authentication.logout();
    this.loggedIn = false;
    this.auth = this.login;
    this.showAuthForm = false;
  }

  cycleHeaderImages() {
    if (this.imageIndex == 16) {
      this.imageIndex = 0;
    }
    this.imageIndex++;
    let url = "url('assets/img/wall-" + this.imageIndex + ".jpg')";
    console.log(this.imageIndex, url);
    document.body.style.backgroundImage = url;
  }

  handleAuthSuccess() {
    this.loggedIn = true;
    this.auth = this.logout;
  }

  dismissForm() {
    this.showAuthForm = false;
  }
}
