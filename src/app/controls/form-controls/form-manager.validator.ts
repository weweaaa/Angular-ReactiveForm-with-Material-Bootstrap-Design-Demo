import { ValidatorFn, Validators } from '@angular/forms';
import { FubonValidators } from '../validators';
import { ControlType, ControlValidator } from './form-controls.model';

/** 取得 字串 命名
 *
 * 自訂實作 nameof 功能，使用方式
 *
 * 範例使用：nameof<ControlItem>('controlType'); ----> 可以正常顯示，不會有紅色錯誤
 *
 * 範例使用：nameof<ControlItem>('aaaaaa'); ----> 因為 ControlItem class 當中沒有 aaaaaa 屬性，所以開發時期就會知道有打錯問題
 */
export function nameof<T>(propertyName: keyof T) {
  return propertyName;
}

/**
 * [轉換黑盒子]
 * 由開發人員定義客製化調整定義轉換
 *
 * @export
 * @param string validKey 驗證規則的 key
 * @param any param 要給予驗證規則用的參數
 * @returns ValidatorFn 驗證規則物件
 */
export function getValidMapTable(controlType: ControlType, validatorList: any): ValidatorFn[] {
  if (validatorList) {
    switch (controlType) {
      case ControlType.KeydownInput: {
        return getKeywordInputValidators(validatorList);
      }
      case ControlType.CheckBoxList: {
        return getCheckBoxListValidators(validatorList);
      }
      default:
        console.log('controlType not defined -> ', controlType);
        return undefined;
    }
  }
}

/** 字串輸入 相關驗證規則 */
export function getKeywordInputValidators(validatorList: ControlValidator[ControlType.KeydownInput]): ValidatorFn[] {

  const validators = [];

  if (validatorList.required) {
    validators.push(Validators.required);
  }

  if (validatorList.minlength) {
    validators.push(Validators.minLength(validatorList.minlength.value));
  }

  if (validatorList.rocDate) {
    validators.push(FubonValidators.rocDate);
  }

  if (validatorList.email) {
    validators.push(Validators.email);
  }

  if (validatorList.phone) {
    validators.push(FubonValidators.phone);
  }

  if (validatorList.idNumber) {
    validators.push(FubonValidators.idNumber);
  }

  return validators;
}

/** 勾選清單 相關驗證規則 */
export function getCheckBoxListValidators(validatorList: ControlValidator[ControlType.CheckBoxList]): ValidatorFn[] {
  const { maxlength, minlength } = validatorList;
  const validators = [];


  if (maxlength) {
    validators.push(FubonValidators.maxlength(maxlength.value));
  }

  if (minlength) {
    validators.push(FubonValidators.minlength(minlength.value));
  }


  return validators;
}
