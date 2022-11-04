import { AuthLoginPageComponent } from './pages/auth-login-page/auth-login-page.component';
import { AuthRoutes } from './auth.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [AuthLoginPageComponent];
const NZ_MODULES = [
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
    NzIconModule,
    NzSelectModule,
    NzDropDownModule,
    NzToolTipModule,
];
@NgModule({
    imports: [CommonModule, AuthRoutes, ...NZ_MODULES, ReactiveFormsModule],
    declarations: [...COMPONENTS],
})
export class AuthModule {}
