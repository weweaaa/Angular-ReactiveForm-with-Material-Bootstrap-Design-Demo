import { Component, forwardRef, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ControlItem } from '../../form-controls/form-controls.model';

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
export class KeydownInputComponent implements OnDestroy, AfterViewInit, ControlValueAccessor {

  control: FormControl = new FormControl();
  displayName: string;
  isHidden: boolean;

  @Input()
  public get controlItem(): ControlItem {
    return this._controlItem;
  }
  public set controlItem(v: ControlItem) {
    this._controlItem = v;

    if (this._controlItem) {
      this.displayName = this._controlItem.displayName;
    }
  }
  private _controlItem: ControlItem;

  private _onChange: (val: string) => void;
  private _onTouch: (val: string) => void;

  /** 釋放 subscribe 用的物件 */
  private destroy$ = new Subject<any>();

  constructor() { }

  /** 等到畫面渲染完成後再進行值改變的事件監聽訂閱 */
  ngAfterViewInit(): void {
    this.control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(val => this.noticeValueChange(val));
  }

  /** 只要 外部 傳入值發生了變化就會觸發 writeValue */
  writeValue(obj: any): void {
    this.isHidden = this._controlItem.hidden;
    this.control.setValue(obj);
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
