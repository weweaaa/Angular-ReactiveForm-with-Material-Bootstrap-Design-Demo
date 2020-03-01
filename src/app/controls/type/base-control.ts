import { ControlValueAccessor, FormControl, ControlContainer } from '@angular/forms';
import { AfterViewInit, OnDestroy, Input, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ControlItem, ControlType, ControlValueType } from '../form-controls/form-controls.model';

export class BaseControl<TControlType extends ControlType> implements ControlValueAccessor, AfterViewInit, OnDestroy {

  @Input() controlItem: ControlItem<ControlType>;
  @Input() set formControlName(name: string) {
    this.outsideContorl = this.injector.get(ControlContainer)?.control?.get(name) as FormControl;
  }

  control: FormControl = new FormControl();
  outsideContorl: FormControl;

  protected _onChange: (val: ControlValueType[TControlType]) => void;
  protected _onTouch: (val: ControlValueType[TControlType]) => void;

  /** 釋放 subscribe 用的物件 */
  protected destroy$ = new Subject<any>();

  constructor(private injector: Injector) { }

  /** 等到畫面渲染完成後再進行值改變的事件監聽訂閱 */
  ngAfterViewInit(): void {
    this.control.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(val => this.noticeValueChange(val));
  }

  /** 內部實作資料改變事件 */
  noticeValueChange(val: ControlValueType[TControlType]) {
    if (this._onChange) {
      this._onChange(val);
    }
    if (this._onTouch) {
      this._onTouch(val);
    }
  }

  // --------------- ControlValueAccessor ---------------

  /** 外部傳入值變化就會觸發此方法 */
  writeValue(val: ControlValueType[TControlType]): void {
    this.control.setValue(val);
  }

  registerOnChange(fn: (val: ControlValueType[TControlType]) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: (val: ControlValueType[TControlType]) => void): void {
    this._onTouch = fn;
  }

  /** 外部觸發 Disable/Enable 事件 */
  setDisabledState?(isDisabled: boolean): void {
    // 依據外部傳入的設定控制 Disable/Enable
    isDisabled ? this.control?.disable() : this.control?.enable();
  }

  // --------------- OnDestroy ---------------

  /** 取消 subscribe 訂閱，釋放資源 */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
