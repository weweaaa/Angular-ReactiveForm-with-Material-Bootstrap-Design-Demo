import { Component, OnDestroy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlItem } from '../../form-controls/form-controls.model';
import { MatDatepickerInputEvent } from '@angular/material';
import { Moment } from 'moment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const DATE_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
};

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [DATE_PICKER_VALUE_ACCESSOR]
})
export class DatePickerComponent implements ControlValueAccessor, OnDestroy {

  control: FormControl;
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

  /** 內部實作資料改變事件 */
  noticeValueChange(val: string) {
    this._onChange(val);
    this._onTouch(val);
  }

  // --------------- ControlValueAccessor ---------------

  /** 外部傳入值變化就會觸發此方法 */
  writeValue(obj: any): void {

    // 判斷 control 是否為 undefined
    if (!this.control) {
      this.control = new FormControl(obj);

      /** 判斷是否需要鎖定控制項，統一透過 ReactForm 的方式處理 */
      // this.setDisabledState(this._controlItem.disabled);
      /** 判斷是否需要引藏控制項 */
      this.isHidden = this._controlItem.hidden;

      // 訂閱資料發生變化事件
      this.control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(val => this.noticeValueChange(val));
    } else {
      this.control.setValue(obj);
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  /** 外部觸發 Disable/Enable 事件 */
  setDisabledState?(isDisabled: boolean): void {

    // 依據外部傳入的設定控制 Disable/Enable
    isDisabled ? this.control.disable() : this.control.enable();
  }

  // --------------- OnDestroy ---------------

  /** 取消 subscribe 訂閱，釋放資源 */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // --------------- Custom Setting ---------------
  /** 使用者設定時間查詢條件 */
  // setTimeValue(setDate: MatDatepickerInputEvent<Moment>) {
  //   this.controlItem.value = setDate.value.format('YYYY-MM-DD');
  // }

  /** 取得今天日期 */
  getNowDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }
}
