/**
 * 定義外部傳入 Custom FormControls 的資料格式
 */
export class ControlItem {

  /** Control Key */
  id: string;

  /** Control 顯示名稱 */
  displayName: string;

  /** Control 類型 */
  controlType: ControlType;

  /** Control 值 */
  value?: string | boolean;

  dataSource?: any;

  constructor(id: string, displayName: string, controlType: ControlType, value?: string, dataSource?: any) {
    this.id = id;
    this.displayName = displayName;
    this.controlType = controlType;
    this.value = value;
    this.dataSource = dataSource;
  }
}


/**
 * 目前支援的 FormControl 類型
 */
export enum ControlType {
  /** 字串 查詢條件 */
  KeywordInput,

  /** true/false 查詢條件 */
  CheckBox,
  SlideChecked,

  /** 日期 查詢條件 */
  DatePicker,
  /** 時間 查詢條件 */
  TimePicker,

  /** 選單 查詢條件 */
  DropDownList,
  RadioButtonList,
  CheckBoxList,
}

