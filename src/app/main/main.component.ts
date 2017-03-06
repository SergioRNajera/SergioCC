import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
      title: 'Messages',
      route: '/',
      icon: 'mail',
    }, {
      title: 'View all users',
      route: '/users',
      icon: 'people_outline',
    }, {
      title: 'Settings',
      route: '/',
      icon: 'settings',
    }, {
      title: 'Support',
      route: '/',
      icon: 'build',
    }, {
      title: 'Sign out',
      route: '/',
      icon: 'power_settings_new',
    },
  ];

  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
