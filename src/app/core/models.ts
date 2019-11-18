export interface IFocus {
  focusId: number;
  name: string;
  description: string;
  inService: number;
  analyzers: IAnalyzer[];
}

export interface IAnalyzer {
  analyzerId: number;
  focusId: number;
  manufacturer: string;
  model: string;
  serialNumber: string;
  focus: IFocus;
}

export interface IFabButton {
  icon: string;
  tooltip: string;
  action: string;
}

export interface ISpeedDialConfiguration {
  fabButtons: IFabButton[];
  mode: SpeedDialMode;
  position: speedDialPosition;

}

type SpeedDialMode = 'flat' | 'nested';
type speedDialPosition = 'left' | 'right';

export interface DialogData {
  component: any;
  title: string;
  item: any | any[];
}
