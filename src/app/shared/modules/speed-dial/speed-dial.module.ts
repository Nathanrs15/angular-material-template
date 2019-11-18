import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';


const MODULES = [
  CommonModule
];

const MATERIAL_MODULES = [
  MatTooltipModule,
  MatButtonModule
]

const COMPONENTS = [
  SpeedDialComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES,
    ...MATERIAL_MODULES
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SpeedDialModule { }
