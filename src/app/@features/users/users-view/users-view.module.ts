import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserViewComponent } from './views/user-view/user-view.component';
import { UsersViewComponent } from './views/users-view/users-view.component';
import { UsersViewRoutes } from './users-view.routing';

const VIEW_COMPONENTS = [UsersViewComponent, UserViewComponent];
const COMPONENTS = [];

@NgModule({
  imports: [CommonModule, UsersViewRoutes],
  declarations: [...VIEW_COMPONENTS],
})
export class UsersViewModule {}
