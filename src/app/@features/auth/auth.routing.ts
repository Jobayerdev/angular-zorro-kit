import { RouterModule, Routes } from '@angular/router';

import { AuthLoginPageComponent } from './pages/auth-login-page/auth-login-page.component';
import { AuthRegisterPageComponent } from './pages/auth-register-page/auth-register-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthLoginPageComponent,
  },
  {
    path: 'register',
    component: AuthRegisterPageComponent,
  },
];

export const AuthRoutes = RouterModule.forChild(routes);
