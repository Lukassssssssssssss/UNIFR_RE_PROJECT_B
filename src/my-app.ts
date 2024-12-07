import { Route } from '@aurelia/router';
import { Login } from './views/login/login';
import { TwoAuth } from './views/2authetification/2authentification';

export class MyApp {
  static routes: Route[] = [
  
    { path: 'login', component: Login, title: 'Login' }, // Verwende `component` anstelle von `viewModel`
    { path: '2authentification', component: TwoAuth, title: '2-Factor Authentication' }, // Verwende ebenfalls `component`
  ];
}
