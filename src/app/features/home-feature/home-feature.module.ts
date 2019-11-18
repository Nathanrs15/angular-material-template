import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFeatureRoutingModule } from './home-feature-routing.module';

import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

import { SpeedDialModule, DialogModule } from '@shared/modules';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const COMPONENTS = [
  HomeComponent,
  EditComponent
];

const MODULES = [
  CommonModule,
  HomeFeatureRoutingModule,
  SpeedDialModule,
  DialogModule
];

const MATERIAL_MODULES = [
  MatTableModule,
  MatCheckboxModule,
  MatCardModule,
  MatButtonModule
];

const ENTRY_COMPONENTS = [
  EditComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES,
    ...MATERIAL_MODULES
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ]
})
export class HomeFeatureModule { }
