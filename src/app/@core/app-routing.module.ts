import { RouterModule, Routes } from '@angular/router';

import { AuthorizedGuard } from '../@shared/guard/authorized.guard';
import { NgModule } from '@angular/core';
import { UnAuthorizationGuard } from './../@shared/guard/unAuthorized.guard';
import { ZorroLayoutComponent } from '../@theme/layouts/zorro-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () =>
      import('../@features/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [UnAuthorizationGuard],
  },
  {
    path: 'admin',
    component: ZorroLayoutComponent,
    canActivate: [AuthorizedGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../@features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../@features/users/users-view/users-view.module').then(
            (m) => m.UsersViewModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
