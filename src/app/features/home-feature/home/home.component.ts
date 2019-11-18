import { Component, OnInit, ViewChild, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FocusService } from '@service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFocus, IFabButton, ISpeedDialConfiguration } from '@model';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@shared/modules/dialog-module/dialog/dialog.component';
import { EditComponent } from '../edit/edit.component';
import { SignalRService } from '@service';

const FAB_BUTTONS: IFabButton[] = [
  { icon: 'delete', tooltip: 'Eliminar foco', action: 'delete' },
  { icon: 'edit', tooltip: 'Editar foco', action: 'edit' }
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  speedDialConf: ISpeedDialConfiguration =
    {
      fabButtons: FAB_BUTTONS,
      mode: 'nested',
      position: 'right'
    };


  displayedColumns: string[] = ['select', 'name', 'description'];
  selection = new SelectionModel<IFocus>(false, []);

  focus = new BehaviorSubject<IFocus>(null);

  dataSource$: Observable<IFocus[]>;


  constructor(
    private focusService: FocusService,
    public dialog: MatDialog,
    private signalRService: SignalRService
  ) { }

  ngOnInit() {
    this.fetch_data();
    // this.signalRService.startConnection();
    // this.signalRService.addMessageListener();
  }

  fetch_data() {
    this.dataSource$ = this.focusService.focus_GetAll();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { component: EditComponent, title: `Editar ${this.focus.value.name}`, item: this.focus.value }
    });

    dialogRef.afterClosed().subscribe(response => {
      console.log('closed dialog response: ', response);
    });
  }



  onSelectedAction(event: string) {
    switch (event) {
      case 'edit':
        this.onEditFocus();
        break;
      case 'delete':
        this.onDeleteFocus(this.focus.value.focusId);
        break;

      default:
        break;
    }
  }

  private onDeleteFocus(id: number) {
    this.focusService.focus_Delete(id).subscribe(() => this.fetch_data());
  }

  private onEditFocus() {
    this.openDialog();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    return 1 === numSelected;
  }

  getSelection(item: IFocus) {
    if (this.selection.isSelected(item)) {
      this.focus.next(item);
      console.log('row selected: ', this.focus.value.name);
      return true;
    }
    return false;

  }

  masterToggle() {
    this.selection.clear();

  }

  checkboxLabel(row?: IFocus): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

  ngOnDestroy() {
    // this.signalRService.closeConnection();
  }

}
