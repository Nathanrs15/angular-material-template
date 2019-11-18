import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { PageNotFoundComponent } from './components/';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WebviewDirective } from './directives/';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

const COMPONENTS = [
  PageNotFoundComponent,
  WebviewDirective,
  DashboardComponent
];

const MODULES = [
  CommonModule,
  RouterModule
];

const EXPORTS = [
  WebviewDirective,
  DashboardComponent
];

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, ...MATERIAL_MODULES],
  exports: [...EXPORTS, ...MATERIAL_MODULES]
})
export class SharedModule { }
