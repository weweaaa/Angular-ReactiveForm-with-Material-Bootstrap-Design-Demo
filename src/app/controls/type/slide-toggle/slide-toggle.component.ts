import { Component, OnDestroy, forwardRef, Input, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ControlItem } from '../../form-controls/form-controls.model';

export const SLIDE_TOGGLE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SlideToggleComponent),
  multi: true
};

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css'],
  providers: [SLIDE_TOGGLE_VALUE_ACCESSOR]
})
export class SlideToggleComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {

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

  /** 內部實作資料改變事件 */
  noticeValueChange(val: string) {
    this._onChange(val);
    this._onTouch(val);
  }

  // --------------- ControlValueAccessor ---------------

  /** 外部傳入值變化就會觸發此方法 */
  writeValue(obj: any): void {
    this.isHidden = this._controlItem.hidden;
    this.control.setValue(obj);
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
