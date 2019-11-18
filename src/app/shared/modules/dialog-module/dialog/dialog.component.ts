import { Component, OnInit, Inject, Injector } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '@model';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { DialogService } from '@service';
import { PORTAL_DATA } from '@feature/InjectionToken';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  portal: ComponentPortal<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<DialogComponent>,
    private dialogService: DialogService,
    private injector: Injector
  ) { }

  ngOnInit() {
    this.portal = new ComponentPortal(this.data.component, null, this.PortalInjector(this.data.item));

    this.dialogService.getDataSource()
      .subscribe(response => {
        if (response !== null || undefined) {
          this.dialogRef.close(response);
        }
      });
  }

  PortalInjector(data: any | any[]): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(PORTAL_DATA, data);
    return new PortalInjector(this.injector, injectorTokens);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

