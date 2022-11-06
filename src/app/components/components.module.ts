import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { NgModule } from '@angular/core';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  imports: [CommonModule, NzSpinModule],
  declarations: [GlobalLoaderComponent],
  exports: [GlobalLoaderComponent],
})
export class ComponentsModule {}
