/**
 * 定義外部傳入 Custom FormControls 的資料格式
 */
export class ControlItem<TControlType extends ControlType> {
  /** Control 建構子
   * @param id Control Key Word
   * @param controlType Control 類型
   * @param displayName Control 顯示名稱
   * @param groupId Control 群組分類
   * @param value Control 值
   * @param dateSource Control 初始化資料 [DDL: array, TreeView: obj]
   * @param disabled 是否鎖定控制項
   * @param hidden 是否隱藏控制項
   * @param requiredList Control 驗證條件
   */
  constructor(
    public readonly id: string,
    public readonly controlType: TControlType,
    public readonly displayName: string,
    public readonly groupId?: number,
    public value?: string | boolean | string[],
    public dataSource?: string | Array<{ key: string; lable: string }>,
    public disabled?: boolean,
    public hidden?: boolean,

    // 如果 ControlValidator 有沒有定義到 'TControlType' 類型就會出現紅字級以下錯誤訊息
    //      ErrorMsg：類型 'TControlType' 無法用來為類型 'ControlValidator' 編制索引。
    public validatorList?: ControlValidator[TControlType]
  ) { }
}

/**
 * 目前支援的 FormControl 類型
 */
export enum ControlType {
  /** 關鍵字 輸入框 */
  KeywordInput = 'KeywordInput',

  /** 勾選 選擇器 */
  CheckBox = 'CheckBox',
  /** 開關 選擇器 */
  SlideToggle = 'SlideToggle',

  /** 日期 選擇器 */
  DatePicker = 'DatePicker',
  /** 時間 選擇器 */
  TimePicker = 'TimePicker',

  /** 下拉式選單 選擇器 */
  DropDownList = 'DropDownList',
  /** 點選 選擇器 */
  RadioButton = 'RadioButton',
  /** 勾選清單 選擇器 */
  CheckBoxList = 'CheckBoxList',
}

/**
 * 目前支援的 Form Control 輸入資料型態對應表
 */
export interface ControlValueType {
  [ControlType.KeywordInput]: string;

  [ControlType.CheckBox]: boolean;

  [ControlType.SlideToggle]: boolean;

  [ControlType.DatePicker]: string;

  [ControlType.TimePicker]: string;

  [ControlType.DropDownList]: string;

  [ControlType.RadioButton]: string;

  [ControlType.CheckBoxList]: Array<string>;
}

// [驗證物件 定義]
// -----------------------------------------------------------------------------

/** 目前支援的 Form Control 的驗證物件模型 */
export interface ControlValidator {

  [ControlType.KeywordInput]: {
    /** 不可為空值 */
    required?: BaseValidator;
    /** 限制 最小長度 */
    minlength?: MinLengthValidator;
    /** 限制 最大長度 */
    maxlength?: MaxLengthValidator;
    /** 限制 信箱 格式 */
    email?: BaseValidator;
    /** 限制 身分證格式 */
    idNumber?: BaseValidator;
    /** 限制 電話 格式 */
    phone?: BaseValidator;
    /** 限制 民國年日期 格式 */
    rocDate?: BaseValidator;
    /** 限制 統一編號 格式 */
    taxIdNumber?: BaseValidator;
  };

  [ControlType.CheckBox]: {
    /** 至少選擇一種狀態 */
    required?: BaseValidator;
  };

  [ControlType.SlideToggle]: {
    /** 至少選擇一種狀態 */
    required?: BaseValidator;
  };

  [ControlType.DatePicker]: {
    /** 依據條件參數進行 日期範圍 判斷 */
    dateRange?: DateRangeValidator;
  };

  [ControlType.TimePicker]: {
    /** 依據條件參數進行 時間範圍 判斷 */
    dateRange?: TimeRangeValidator
  };

  [ControlType.DropDownList]: {
    /** 至少選擇一種 */
    required?: BaseValidator
  };

  [ControlType.RadioButton]: {
    /** 至少選擇一種 */
    required?: BaseValidator
  };

  [ControlType.CheckBoxList]: {
    /** 勾選指定最少數量 */
    minlength?: MinLengthValidator
    /** 勾選指定最多數量 */
    maxlength?: MaxLengthValidator
  };
}

// [驗證類型 定義]
// -----------------------------------------------------------------------------

/** 所有驗證類型的 根物件 */
interface BaseValidator {
  message?: string;
}

/** 最小長度驗證 */
interface MinLengthValidator extends BaseValidator {
  value: number;
}

/** 最大長度驗證 */
interface MaxLengthValidator extends BaseValidator {
  value: number;
}

/** 日期範圍驗證 */
interface DateRangeValidator extends BaseValidator {

  /** 判斷 起始日期 必須大於... */
  start?: number;
  /** 判斷 結束日期 必須小於... */
  end?: number;
}

/** 時間範圍驗證 */
interface TimeRangeValidator extends BaseValidator {

  /** 判斷 起始時間 必須大於... */
  start?: number | Date;
  /** 判斷 結束時間 必須小於... */
  end?: number | Date;
}

/** 取得 字串 命名
 *
 * 自訂實作 nameof 功能，使用方式
 *
 * 範例使用：nameof<ControlItem>('controlType'); ----> 可以正常顯示，不會有紅色錯誤
 *
 * 範例使用：nameof<ControlItem>('aaaaaa'); ----> 因為 ControlItem class 當中沒有 aaaaaa 屬性，所以開發時期就會知道有打錯問題
 */
// export function nameof<T>(propertyName: keyof T) {
//   return propertyName;
// }
