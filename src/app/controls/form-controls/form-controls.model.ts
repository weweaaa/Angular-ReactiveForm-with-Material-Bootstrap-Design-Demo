import { ValidatorFn } from '@angular/forms';

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
  disabled?: boolean;
  /** 是否隱藏控制項 */
  hidden?: boolean;

  /** Control 驗證條件 */
  requiredList?: ValidatorFn[];

  constructor(
    id: string, displayName: string, controlType: ControlType,
    value?: string | boolean | string[], dataSource?: any,
    disabled?: boolean, hidden?: boolean, requiredList?: ValidatorFn[]) {

    this.id = id;
    this.displayName = displayName;
    this.value = value;
    this.controlType = controlType;
    this.dataSource = dataSource;

    this.disabled = disabled === undefined ? false : disabled;
    this.hidden = hidden === undefined ? false : hidden;
    this.requiredList = requiredList === undefined ? [] : requiredList;
  }
}


/**
 * 目前支援的 FormControl 類型
 */
export enum ControlType {
  /** 字串 查詢條件 */
  KeydownInput,

  /** true/false 查詢條件 */
  CheckBox,
  SlideToggle,

  /** 日期 查詢條件 */
  DatePicker,
  /** 時間 查詢條件 */
  TimePicker,

  /** 選單 查詢條件 */
  DropDownList,
  RadioButton,
  CheckBoxList,
}

/** 取得 字串 命名
 *
 * 自訂實作 nameof 功能，使用方式
 *
 * 範例使用：nameof<ControlItem>('controlType'); ----> 可以正常顯示，不會有紅色錯誤
 *
 * 範例使用：nameof<ControlItem>('aaaaaa'); ----> 因為 ControlItem class 當中沒有 aaaaaa 屬性，所以開發時期就會知道有打錯問題
 */
export function nameof<T>(propertyName: keyof T) {
  return propertyName;
}
