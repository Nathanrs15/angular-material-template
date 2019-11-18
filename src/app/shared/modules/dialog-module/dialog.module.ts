import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { PortalModule } from '@angular/cdk/portal';


@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    PortalModule
  ],
  exports: [DialogComponent],
  entryComponents: [DialogComponent]
})
export class DialogModule { }
