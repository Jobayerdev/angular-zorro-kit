import { AnalyticsDashboardPageComponent } from './pages/analytics-dashboard-page/analytics-dashboard-page.component';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { NgModule } from '@angular/core';

const COMPONENTS = [AnalyticsDashboardPageComponent];

@NgModule({
    imports: [CommonModule, DashboardRoutes],
    declarations: [...COMPONENTS],
})
export class DashboardModule {}
