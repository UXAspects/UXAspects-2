import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsetModule } from '@ux-aspects/ux-aspects';
import 'chart.js';
import { DocumentationComponentsModule } from '../../components/components.module';
import { ChartsPageComponent } from './charts.component';


const ROUTES: Routes = [
    {
        path: '',
        component: ChartsPageComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'bar-charts' },
            { path: 'bar-charts', loadChildren: './charts-sections/bar-charts/bar-charts.module#ChartsBarChartsModule' },
            { path: 'donut-charts', loadChildren: './charts-sections/donut-charts/donut-charts.module#ChartsDonutChartsModule' },
            { path: 'line-charts', loadChildren: './charts-sections/line-charts/line-charts.module#ChartsLineChartsModule' },
            { path: 'live-chart', loadChildren: './charts-sections/live-charts/live-charts.module#ChartsLiveChartsModule' },
            { path: 'organization-chart', loadChildren: './charts-sections/organization-chart/organization-chart.module#ChartsOrganizationChartModule' },
            { path: 'partition-map', loadChildren: './charts-sections/partition-map/partition-map.module#ChartsPartitionMapModule' },
            { path: 'sankey-chart', loadChildren: './charts-sections/sankey-chart/sankey-charts.module#ChartsSankeyChartModule' },
            { path: 'scrollable-chart', loadChildren: './charts-sections/scrollable-chart/scrollable-chart.module#ChartsScrollableChartModule' },
            { path: 'spark-charts', loadChildren: './charts-sections/spark-charts/spark-charts.module#ChartsSparkChartsModule' },
            { path: 'timeline-chart', loadChildren: './charts-sections/timeline-chart/timeline-chart.module#ChartsTimelineChartModule' }
        ],
    },
    {
        path: '**',
        redirectTo: '/bar-charts'
    }
];

@NgModule({
    imports: [
        DocumentationComponentsModule,
        TabsetModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [ChartsPageComponent],
    declarations: [ChartsPageComponent]
})
export class ChartsPageModule {

}
