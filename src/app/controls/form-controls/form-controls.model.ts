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
  value?: string | boolean | string[];

  dataSource?: string | Array<{ key: string, lable: string }>;

  /** 是否鎖定控制項 */
  disable?: boolean;
  /** 是否顯示控制項 */
  hidden?: boolean;

  constructor(
    id: string, displayName: string, controlType: ControlType,
    value?: string | boolean  | string[], dataSource?: string | Array<{ key: string, lable: string }>,
    disable?: boolean, hidden?: boolean) {
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

