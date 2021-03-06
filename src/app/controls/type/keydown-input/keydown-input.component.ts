import { Component, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlType } from '../../form-controls/form-controls.model';
import { BaseControl } from '../base-control';

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
export class KeydownInputComponent extends BaseControl<ControlType.KeywordInput> {

  constructor(injector: Injector) {
    super(injector);
  }

  /** 測試子類別實作覆寫 destroy 後的流程操作 */
  // onDestroy() {
  //   console.log('keyword input destroy complete.');
  // }
}
