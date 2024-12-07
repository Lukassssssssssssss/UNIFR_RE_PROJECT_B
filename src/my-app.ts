import { IRoute } from '@aurelia/router';
import { customElement } from 'aurelia';

@customElement({
  name: 'my-app',
  template: `<template>
    <au-viewport></au-viewport>
  </template>`
})
export class MyApp {
  static routes: IRoute[] = [
    { path: ['', 'login'], component: () => import('./views/login/login'), title: 'Login' },
    { path: '2authentification', component: () => import('./views/2authetification/2authentification'), title: '2-Factor Auth' },
  ];
}
