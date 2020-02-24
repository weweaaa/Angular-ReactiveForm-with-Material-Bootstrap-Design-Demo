import { Component, OnDestroy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ControlItem } from '../../form-controls/form-controls.model';

export const DROP_DOWN_LIST_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropDownListComponent),
  multi: true
};


@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css'],
  providers: [DROP_DOWN_LIST_VALUE_ACCESSOR]
})
export class DropDownListComponent implements ControlValueAccessor, OnDestroy {

  control: FormControl;
  displayName: string;
  isHidden: boolean;
  dataSource: string | Array<{ key: string, lable: string }>;

  @Input()
  public get controlItem(): ControlItem {
    return this._controlItem;
  }
  public set controlItem(v: ControlItem) {
    this._controlItem = v;
    if (this._controlItem) {
      this.displayName = this._controlItem.displayName;
      this.dataSource = this._controlItem.dataSource;
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

      /** 判斷是否需要鎖定控制項 */
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
}
