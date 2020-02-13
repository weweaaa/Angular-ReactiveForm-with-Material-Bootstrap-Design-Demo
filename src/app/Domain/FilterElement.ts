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
  /** 查詢條件 初始化資料 [DDL: array, TreeView: obj] */
  filterInit: any;

  /** 查詢條件 驗證條件 */
  // requiredList: RequiredElement[];

  constructor(id: string, name: string, value: string, type: FilterType, filterInit?: any) { // , requiredList?: RequiredElement[]) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.type = type;
    this.filterInit = filterInit;
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
  /** 字串 查詢條件 */
  StringInput,
  /** 勾選 查詢條件 */
  CheckBoxInput,
  /** 數字 查詢條件 */
  NumberInput,
  /** 郵件 查詢條件 */
  MailInput,

  /** 日期 查詢條件 */
  DatePicker,
  /** 時間 查詢條件 */
  TimePicker,

  /** 下拉式選單 查詢條件 */
  DDL,
}

