import { Component, OnInit, Inject } from '@angular/core';
import { PORTAL_DATA } from '@feature/InjectionToken';
import { DialogService } from '@service';
import { IFocus } from '@model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    @Inject(PORTAL_DATA) public data: IFocus,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    console.log('PORTAL_DATA: ', this.data);
  }

  onSubmit() {
    this.data.description = 'Description modified';
    this.dialogService.setDataSource(this.data);
  }

}
