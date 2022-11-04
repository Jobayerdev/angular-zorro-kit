import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Component } from '@angular/core';
import { RouteLinks } from '../../config/routes.config';
import { UntilDestroy } from '@ngneat/until-destroy';
import { storage } from 'src/app/services/utils/localStorage.utilservice';

@Component({
  selector: 'app-zorro-layout',
  templateUrl: './zorro-layout.component.html',
  styleUrls: ['./zorro-layout.component.scss'],
})
@UntilDestroy()
export class ZorroLayoutComponent {
  isCollapsed = false;
  routeLinks = RouteLinks;
  name: string = 'Default Title';

  constructor(private authService: AuthService) {}

  userName: string = storage.getDate('USER_NAME');
  userAvatar: string = '';

  onLogout() {
    this.authService.logout();
  }
}
