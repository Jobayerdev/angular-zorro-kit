import { RouterModule, Routes } from '@angular/router';

import { UserViewComponent } from './views/user-view/user-view.component';
import { UsersViewComponent } from './views/users-view/users-view.component';

const routes: Routes = [
  {
    path: '',
    component: UsersViewComponent,
  },
  {
    path: ':id',
    component: UserViewComponent,
  },
];

export const UsersViewRoutes = RouterModule.forChild(routes);
