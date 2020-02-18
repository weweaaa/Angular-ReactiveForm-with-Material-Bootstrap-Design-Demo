import { Component, forwardRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// 要在元件中實作自訂的 FormControl，記得要 providers 註冊以下內容
// 教學文：https://dotblogs.com.tw/wellwind/2017/03/20/angular-advanced-customize-component-with-ngmodel
export const KEYDOWN_INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => KeydownInputComponent),
  multi: true
};

@Component({
  selector: 'app-keydown-input',
  templateUrl: './keydown-input.component.html',
  styleUrls: ['./keydown-input.component.css'],
  providers: [KEYDOWN_INPUT_VALUE_ACCESSOR]
})
export class KeydownInputComponent implements OnDestroy, ControlValueAccessor {

  control: FormControl;

  private _onChange: (val: string) => void;
  private _onTouch: (val: string) => void;

  /** 釋放 subscribe 用的物件 */
  private destroy$ = new Subject<any>();

  constructor() { }

  /** 只要 外部 傳入值發生了變化就會觸發 writeValue */
  writeValue(obj: any): void {
    // 判斷 control 是否為 undefined，如果是則 new FormControl 物件出來，並訂閱 判斷值是否改變的事件
    if (!this.control) {
      this.control = new FormControl(obj);

      // 當外部傳入值 obj 引發 control.valueChanges 實，內部同步引發 noticeValueChange()
      // takeUntil(this.destroy$) 就是為了在 valueChanges 前送出一個訊息到 Subject，以便 Complete Observable
      this.control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(val => this.noticeValueChange(val));
    } else {
      // 如果不是 undefined 則僅需要設定新的值即可
      this.control.setValue(obj);
    }
  }

  /** 登記註冊 OnChange */
  registerOnChange(fn: any): void {
    /** 內部自訂實作 OnChange */
    this._onChange = fn;
  }

  /** 登記註冊 OnTouched */
  registerOnTouched(fn: any): void {
    /** 內部自訂實作 onTouch */
    this._onTouch = fn;
  }

  /** 外部觸發 Disable/Enable 事件 */
  setDisabledState?(isDisabled: boolean): void {
    // 內部依據外部傳入設定實作
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  /** 內部實作資料改變事件 */
  noticeValueChange(val: string) {
    this._onChange(val);
    this._onTouch(val);
  }

  /** 因為有實作 subscribe，所以要記得自己實作 destroy，否則 subscribe 會一直存在，並且重複持續增長 */
  ngOnDestroy() {
    this.destroy$.next(); // 實作 Subject 接收到新值時，next 被調用
    this.destroy$.complete(); // 實作 Subject 訂閱的 Observable 結束後，complete 被調用
  }
}
