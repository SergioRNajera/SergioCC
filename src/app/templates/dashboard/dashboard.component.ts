import { Component } from '@angular/core';

import {steps, sleep} from './data';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss','./style.css'],
})
export class DashboardTemplateComponent {
  // Chart
  steps: any[];
  sleep: any[];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Hours slept';

  colorScheme: any = {
    domain: ['#9575CD', '#4FC3F7', '#4DD0E1', '#4DB6AC', '#66BB6A', '#9CCC65'],
  };

  colorSchemeDark: any = {
    domain: ['#5E35B1', '#0277BD', '#00695C', '#558B2F', '#9E9D24'],
  };

  // line, area
  autoScale: boolean = true;

  constructor() {
    // Cards
    Object.assign(this, {steps});
    // Chart
    Object.assign(this, {sleep});
  }
}
