import { CommonModule } from '@angular/common';
import { IconsProviderModule } from '../icons-provider.module';
import { NgModule } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { ZorroLayoutComponent } from './layouts/zorro-layout.component';

const NZ_MODULES = [
  NzLayoutModule,
  NzMenuModule,
  NzDropDownModule,
  NzDividerModule,
];

@NgModule({
  imports: [CommonModule, RouterModule, IconsProviderModule, ...NZ_MODULES],
  declarations: [ZorroLayoutComponent],
  exports: [ZorroLayoutComponent],
})
export class ThemeModule {}
