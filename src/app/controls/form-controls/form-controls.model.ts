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
  /** 是否隱藏控制項 */
  hidden?: boolean;

  /** Control 驗證條件 */
  // requiredList: RequiredElement[];

  constructor(
    id: string, displayName: string, controlType: ControlType,
    value?: string | boolean | string[], dataSource?: any,
    disable?: boolean, hidden?: boolean) { // , requiredList?: RequiredElement[]) {

    this.id = id;
    this.displayName = displayName;
    this.value = value;
    this.controlType = controlType;
    this.dataSource = dataSource;

    this.disable = disable === undefined ? false : disable;
    this.hidden = hidden === undefined ? false : hidden;
    // this.requiredList = requiredList === undefined ? [] : requiredList;
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

