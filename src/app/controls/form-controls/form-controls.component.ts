import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ControlItem, ControlType } from './form-controls.model';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {

  @Input()
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(v: Array<ControlItem>) {
    const controlsConfig = v.reduce((obj, { id, value, disabled, requiredList }) => {

      // Angular 運行時，可以使用的中斷點
      // debugger;
      if (requiredList && requiredList.length > 0) {
        /** 設定檢查規則 */
        return { ...obj, [id]: [{ value, disabled }, requiredList] };
      } else {
        return { ...obj, [id]: [value, { disabled }] };
      }
    }, {});

    this.customForm = this.fb.group(controlsConfig);
    this._dataSource = v;

    // setInterval(() => {
    //   console.log('error :', this.form.valid);
    // }, 1000);
  }
  // tslint:disable-next-line: variable-name
  private _dataSource: Array<ControlItem>;

  // 提供給外部控制表單的物件定義
  customForm: FormGroup;
  // 提供給表單強行別判斷要產出的項目
  CType = ControlType;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  /** 判斷是否需要呈現 class="w-100" DIV Block  */
  getDivW100(index: number) {
    return (index !== 0) && (index % 2 === 0);
  }

  /** 測試操作 */
  TestE2E() {
    // 模擬預設外部動態調整及傳入設定的情境
    setTimeout(() => {
      console.log('兩秒後在 t1 FormControl 內輸入 orz 值');
      this.customForm.get('t1').setValue('orz');

      setTimeout(() => {
        console.log('接著再兩秒後將 t1 FormControl disable');
        this.customForm.get('t1').disable();

        setTimeout(() => {
          console.log('接著再兩秒後將 t1 FormControl enable');
          this.customForm.get('t1').enable();
        }, 2000);
      }, 2000);
    }, 2000);
  }
}


// 補充技巧：
//     - 如果想要 tslint 不判斷命名格式，可以使用以下設定放在 tslint 設定區
//     - 網址說明：https://palantir.github.io/tslint/rules/variable-name/
// "variable-name": {
//   "options": [
//     "ban-keywords",  // [不建議使用]，允許使用某些 TypeScript keywords 當作變數使用
//     "check-format", // 可以強制執行某種命名格式。默認情況下，該規則僅允許lowerCamelCased或UPPER_CASED變量名
//     "allow-leading-underscore",  // 允許在開頭加下劃線
//     "allow-pascal-case" // 除了 lowerCamelCase 之外，還允許 PascalCase
//   ]
// }
