/**
 * 查詢條件需要使用的物件定義
 */
export class FilterElement {
  /** 查詢條件 Key Word */
  id: string;
  /** 查詢條件 顯示名稱 */
  name: string;
  /** 查詢條件 值 */
  value: string;
  /** 查詢條件 類型 */
  type: FilterType;
  /** 查詢條件 驗證條件 */
  // requiredList: RequiredElement[];

  constructor(id: string, name: string, value: string, type: FilterType) { // , requiredList?: RequiredElement[]) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.type = type;
    // this.requiredList = requiredList === undefined ? [] : requiredList;
  }
}

/**
 * 查詢條件驗證物件
 */
export class RequiredElement {
  /** 查詢條件 驗證類型 ID */
  id: string;
  /** 查詢條件 驗證條件 */
  value: string;

  constructor(id?: string, value?: string) {
    this.id = id;
    this.value = value;
  }
}

/**
 * 目前支援的查詢條件類型
 */
export enum FilterType {
  InputTextBox,
  DatePicker,
}

