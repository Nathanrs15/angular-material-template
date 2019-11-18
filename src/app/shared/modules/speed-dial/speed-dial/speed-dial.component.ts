import { Component, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animations';
import { IFabButton, ISpeedDialConfiguration } from '@model';


@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss'],
  animations: speedDialFabAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeedDialComponent {
  @Input() configuration: ISpeedDialConfiguration;

  @Output() clicked = new EventEmitter();
  @Output() action = new EventEmitter<string>();

  buttons: IFabButton[] = [];
  fabTogglerState = 'inactive';

  constructor() { }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.configuration.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  sendAction(action: string) {
    this.action.emit(action);
    this.hideItems();
  }

  onToggleFab() {
    if (this.configuration.mode === 'nested') {
      this.buttons.length ? this.hideItems() : this.showItems();
    } else {
      this.clicked.emit();
    }
  }

}
