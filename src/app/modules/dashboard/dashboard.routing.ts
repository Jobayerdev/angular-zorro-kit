import { RouterModule, Routes } from '@angular/router';

import { AnalyticsDashboardPageComponent } from './pages/analytics-dashboard-page/analytics-dashboard-page.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'analytics',
    },
    {
        path: 'analytics',
        component: AnalyticsDashboardPageComponent,
    },
];

export const DashboardRoutes = RouterModule.forChild(routes);
