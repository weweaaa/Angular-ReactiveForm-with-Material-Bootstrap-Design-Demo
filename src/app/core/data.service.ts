import { Injectable } from '@angular/core';
import { ControlItem, ControlType } from '../controls/form-controls/form-controls.model';
import { StickyType } from '../tables/table-manager/table-manager.model';
import { Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

/**
 * 負責處理資料取得相關的服務
 */
export class DataService {

  constructor() { }

  /** 使用者呼叫更新資料 */
  public editData(data: any): boolean {
    return true;
  }

  /** 取得資料表定義 */
  public getTableSchema1(filterItem?: any): ControlItem[] {
    return [
      { id: 'id', displayName: '我是 ID', value: '', disabled: true, hidden: false, controlType: ControlType.KeywordInput },
      { id: 'position', displayName: '我是 Position', value: '', controlType: ControlType.DatePicker },
      { id: 'name', displayName: '我是 Name', value: '', controlType: ControlType.KeywordInput },
      { id: 'weight', displayName: '我是 Weight', value: '', controlType: ControlType.KeywordInput },
      { id: 'symbol', displayName: '我是 Symbol', value: '', controlType: ControlType.KeywordInput }
    ];
  }

  /** 取得資料表定義 */
  public getTableSchema2(filterItem?: any): ControlItem[] {
    // TODO 依據查詢條件回傳 Filter 後的結果
    if (filterItem !== undefined && filterItem.CKB === false) {
      return this.getTableSchema1(undefined);
    }

    return [
      { id: 'position', displayName: '我是 Position', value: '', controlType: ControlType.DatePicker },
      {
        id: 'name', displayName: '我是 Name', value: '',
        controlType: ControlType.RadioButtonList,
        dataSource: [{ key: 'A', lable: 'A!' }, { key: 'B', lable: 'B!' }]
      },
      { id: 'weight', displayName: '我是 Weight', value: '', controlType: ControlType.KeywordInput },
      {
        id: 'symbol', displayName: '我是 Symbol', value: '',
        controlType: ControlType.DropDownList,
        dataSource: [{ key: 'A', lable: 'A!' }, { key: 'B', lable: 'B!' }]
      },

      { id: 'position1', displayName: '我是 Position1', value: '', controlType: ControlType.TimePicker },
      {
        id: 'name1', displayName: '我是 Name1', value: '',
        controlType: ControlType.RadioButtonList,
        dataSource: [{ key: 'A', lable: 'A!' }, { key: 'B', lable: 'B!' }]
      },
      { id: 'weight1', displayName: '我是 Weight1', value: '', controlType: ControlType.SlideChecked },
      {
        id: 'symbol1', displayName: '我是 Symbol1', value: '',
        controlType: ControlType.DropDownList,
        dataSource: [{ key: 'A', lable: 'A!' }, { key: 'B', lable: 'B!' }]
      },
      { id: 'position2', displayName: '我是 Position2', value: '', controlType: ControlType.DatePicker },
      { id: 'name2', displayName: '我是 Name2', value: '', controlType: ControlType.KeywordInput },
      { id: 'weight2', displayName: '我是 Weight2', value: '', controlType: ControlType.KeywordInput },
      { id: 'symbol2', displayName: '我是 Symbol2', value: '', controlType: ControlType.KeywordInput },

      { id: 'position3', displayName: '我是 Position3', value: '', controlType: ControlType.DatePicker },
      { id: 'name3', displayName: '我是 Name3', value: '', controlType: ControlType.KeywordInput },
      { id: 'weight3', displayName: '我是 Weight3', value: '', controlType: ControlType.KeywordInput },
      { id: 'symbol3', displayName: '我是 Symbol3', value: '', controlType: ControlType.KeywordInput },

      { id: 'position4', displayName: '我是 Position4', value: '', controlType: ControlType.DatePicker },
      { id: 'name4', displayName: '我是 Name4', value: '', controlType: ControlType.KeywordInput },
      { id: 'weight4', displayName: '我是 Weight4', value: '', controlType: ControlType.KeywordInput },
      { id: 'symbol4', displayName: '我是 Symbol4', value: '', controlType: ControlType.KeywordInput },

      { id: 'position5', displayName: '我是 Position5', value: '', controlType: ControlType.DatePicker },
      { id: 'name5', displayName: '我是 Name5', value: '', controlType: ControlType.KeywordInput },
      { id: 'weight5', displayName: '我是 Weight5', value: '', controlType: ControlType.KeywordInput },
      { id: 'symbol5', displayName: '我是 Symbol5', value: '', controlType: ControlType.KeywordInput },

      { id: 'position6', displayName: '我是 Position6', value: '', controlType: ControlType.DatePicker },
      { id: 'name6', displayName: '我是 Name6', value: '', controlType: ControlType.KeywordInput },
      { id: 'weight6', displayName: '我是 Weight6', value: '', controlType: ControlType.KeywordInput },
      { id: 'symbol6', displayName: '我是 Symbol6', value: '', controlType: ControlType.KeywordInput },

      { id: 'position7', displayName: '我是 Position7', value: '', controlType: ControlType.DatePicker },
      { id: 'name7', displayName: '我是 Name7', value: '', controlType: ControlType.KeywordInput },
      { id: 'weight7', displayName: '我是 Weight7', value: '', controlType: ControlType.KeywordInput },
      { id: 'symbol7', displayName: '我是 Symbol7', value: '', controlType: ControlType.KeywordInput },

      { id: 'position8', displayName: '我是 Position8', value: '', controlType: ControlType.DatePicker },
      { id: 'name8', displayName: '我是 Name8', value: '', controlType: ControlType.KeywordInput },
      { id: 'weight8', displayName: '我是 Weight8', value: '', controlType: ControlType.KeywordInput },
      { id: 'symbol8', displayName: '我是 Symbol8', value: '', controlType: ControlType.KeywordInput },

      { id: 'position9', displayName: '我是 Position9', value: '', controlType: ControlType.DatePicker },
      { id: 'name9', displayName: '我是 Name9', value: '', controlType: ControlType.KeywordInput },
      { id: 'weight9', displayName: '我是 Weight9', value: '', controlType: ControlType.KeywordInput },
      { id: 'symbol9', displayName: '我是 Symbol9', value: '', controlType: ControlType.KeywordInput },

      { id: 'position10', displayName: '我是 Position10', value: '', controlType: ControlType.DatePicker },
      { id: 'name10', displayName: '我是 Name10', value: '', controlType: ControlType.KeywordInput },
      { id: 'weight10', displayName: '我是 Weight10', value: '', controlType: ControlType.KeywordInput },
      { id: 'symbol10', displayName: '我是 Symbol10', value: '', controlType: ControlType.KeywordInput },
    ];
  }

  /** 取得查詢條件設定檔 */
  public getFilterConfing(): ControlItem[] {
    return [
      {
        id: 'position',
        displayName: 'Position 查詢',
        value: '123@gmail.com',
        disabled: true,
        hidden: false,
        controlType: ControlType.KeywordInput,
        dataSource: undefined,
        requiredList: [
          // Validators.minLength(2),
          // Validators.maxLength(100),
          // validateEmail   // 使用自訂的驗證 Email 格式方法
        ]
      },
      {
        id: 'position2',
        displayName: 'Position2 輸入測試',
        value: '',
        disabled: false,
        hidden: false,
        controlType: ControlType.KeywordInput,
        dataSource: undefined,
        requiredList: [
          // Validators.pattern('[a-zA-Z ]*'),  // 使用者自訂正規運算式，限定只能輸入英文大小寫字母
          // Validators.pattern('abc') // 限定輸入必須是 abc，或是不輸入全空
        ]
      },
      {
        id: 'position3',
        displayName: 'Position3 email 輸入測試',
        value: 'zzzzz',
        disabled: false,
        hidden: false,
        controlType: ControlType.KeywordInput,
        dataSource: undefined,
        requiredList: [
          // Validators.email  // 使用官方的驗證 Email 格式
        ]
      },
      {
        id: 'DatePicker',
        displayName: 'DatePicker 查詢',
        value: '',
        controlType: ControlType.DatePicker, dataSource: undefined
      },
      {
        id: 'SlideChecked',
        displayName: 'SlideChecked 查詢',
        value: 'true',
        controlType: ControlType.SlideChecked,
        dataSource: undefined
      },
      {
        id: 'Time',
        displayName: 'Time 查詢',
        value: '',
        controlType: ControlType.TimePicker,
        dataSource: undefined
      },
      {
        id: 'CKB',
        displayName: '查詢大資料',
        value: 'true',
        controlType: ControlType.CheckBoxList, dataSource: undefined
      },
      {
        id: 'CKB2',
        displayName: '查詢大資料',
        value: ['B'],
        disabled: false,
        hidden: false,
        controlType: ControlType.CheckBoxList,
        dataSource: [
          { key: 'A', lable: 'A!' }, { key: 'B', lable: 'B!' }
        ],
        requiredList: [
          Validators.required   // 至少勾選一筆
        ]
      },
      {
        id: 'DDL',
        displayName: 'DDL 查詢',
        value: '',
        controlType: ControlType.DropDownList,
        dataSource: [
          { key: 'A', lable: 'A!' }, { key: 'B', lable: 'B!' }
        ]
      },
      {
        id: 'Radio',
        displayName: 'Radio 查詢',
        value: '',
        controlType: ControlType.RadioButtonList,
        dataSource: [
          { key: 'A', lable: 'A!' }, { key: 'B', lable: 'B!' }]
      }
    ];
  }

  /**
   * 取得範例一資料
   */
  public getData1(filterItem?: any): Array<any> {
    return [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', _HideSticky: StickyType.sticky },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', _HideSticky: StickyType.none },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', _HideSticky: StickyType.none },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', _HideSticky: StickyType.none },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', _HideSticky: StickyType.none },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', _HideSticky: StickyType.none },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', _HideSticky: StickyType.none },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', _HideSticky: StickyType.none },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', _HideSticky: StickyType.none },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', _HideSticky: StickyType.none },
    ];
  }

  /**
   * 取得範例二資料
   */
  public getData2(filterItem?: any): Array<any> {
    // TODO 依據查詢條件回傳 Filter 後的結果
    if (filterItem !== undefined && filterItem.t2 === false) {
      return this.getData1(undefined);
    }

    return [
      {
        position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',
        position1: 1, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H',
        position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H',
        position3: 1, name3: 'Hydrogen', weight3: 1.0079, symbol3: 'H',
        position4: 1, name4: 'Hydrogen', weight4: 1.0079, symbol4: 'H',
        position5: 1, name5: 'Hydrogen', weight5: 1.0079, symbol5: 'H',
        position6: 1, name6: 'Hydrogen', weight6: 1.0079, symbol6: 'H',
        position7: 1, name7: 'Hydrogen', weight7: 1.0079, symbol7: 'H',
        position8: 1, name8: 'Hydrogen', weight8: 1.0079, symbol8: 'H',
        position9: 1, name9: 'Hydrogen', weight9: 1.0079, symbol9: 'H',

        position10: 1, name10: 'Hydrogen', weight10: 1.0079, symbol10: 'H',
        position12: 1, name12: 'Hydrogen', weight12: 1.0079, symbol12: 'H',
        position13: 1, name13: 'Hydrogen', weight13: 1.0079, symbol13: 'H',
        position14: 1, name14: 'Hydrogen', weight14: 1.0079, symbol14: 'H',
        position15: 1, name15: 'Hydrogen', weight15: 1.0079, symbol15: 'H',
        position16: 1, name16: 'Hydrogen', weight16: 1.0079, symbol16: 'H',
        position17: 1, name17: 'Hydrogen', weight17: 1.0079, symbol17: 'H',
        position18: 1, name18: 'Hydrogen', weight18: 1.0079, symbol18: 'H',
        position19: 1, name19: 'Hydrogen', weight19: 1.0079, symbol19: 'H',

        position20: 1, name20: 'Hydrogen', weight20: 1.0079, symbol20: 'H',
        position21: 1, name21: 'Hydrogen', weight21: 1.0079, symbol21: 'H',
        position22: 1, name22: 'Hydrogen', weight22: 1.0079, symbol22: 'H',
        position23: 1, name23: 'Hydrogen', weight23: 1.0079, symbol23: 'H',
        position24: 1, name24: 'Hydrogen', weight24: 1.0079, symbol24: 'H',
        position25: 1, name25: 'Hydrogen', weight25: 1.0079, symbol25: 'H',
        position26: 1, name26: 'Hydrogen', weight26: 1.0079, symbol26: 'H',
        position27: 1, name27: 'Hydrogen', weight27: 1.0079, symbol27: 'H',
        position28: 1, name28: 'Hydrogen', weight28: 1.0079, symbol28: 'H',
        position29: 1, name29: 'Hydrogen', weight29: 1.0079, symbol29: 'H',
      },
      {
        position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',
        position1: 2, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H',
        position2: 2, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H',
        position3: 2, name3: 'Hydrogen', weight3: 1.0079, symbol3: 'H',
        position4: 2, name4: 'Hydrogen', weight4: 1.0079, symbol4: 'H',
        position5: 2, name5: 'Hydrogen', weight5: 1.0079, symbol5: 'H',
        position6: 2, name6: 'Hydrogen', weight6: 1.0079, symbol6: 'H',
        position7: 2, name7: 'Hydrogen', weight7: 1.0079, symbol7: 'H',
        position8: 2, name8: 'Hydrogen', weight8: 1.0079, symbol8: 'H',
        position9: 2, name9: 'Hydrogen', weight9: 1.0079, symbol9: 'H',

        position10: 1, name10: 'Hydrogen', weight10: 1.0079, symbol10: 'H',
        position12: 1, name12: 'Hydrogen', weight12: 1.0079, symbol12: 'H',
        position13: 1, name13: 'Hydrogen', weight13: 1.0079, symbol13: 'H',
        position14: 1, name14: 'Hydrogen', weight14: 1.0079, symbol14: 'H',
        position15: 1, name15: 'Hydrogen', weight15: 1.0079, symbol15: 'H',
        position16: 1, name16: 'Hydrogen', weight16: 1.0079, symbol16: 'H',
        position17: 1, name17: 'Hydrogen', weight17: 1.0079, symbol17: 'H',
        position18: 1, name18: 'Hydrogen', weight18: 1.0079, symbol18: 'H',
        position19: 1, name19: 'Hydrogen', weight19: 1.0079, symbol19: 'H',

        position20: 1, name20: 'Hydrogen', weight20: 1.0079, symbol20: 'H',
        position21: 1, name21: 'Hydrogen', weight21: 1.0079, symbol21: 'H',
        position22: 1, name22: 'Hydrogen', weight22: 1.0079, symbol22: 'H',
        position23: 1, name23: 'Hydrogen', weight23: 1.0079, symbol23: 'H',
        position24: 1, name24: 'Hydrogen', weight24: 1.0079, symbol24: 'H',
        position25: 1, name25: 'Hydrogen', weight25: 1.0079, symbol25: 'H',
        position26: 1, name26: 'Hydrogen', weight26: 1.0079, symbol26: 'H',
        position27: 1, name27: 'Hydrogen', weight27: 1.0079, symbol27: 'H',
        position28: 1, name28: 'Hydrogen', weight28: 1.0079, symbol28: 'H',
        position29: 1, name29: 'Hydrogen', weight29: 1.0079, symbol29: 'H',
      },
      {
        position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',
        position1: 3, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H',
        position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H',
        position3: 1, name3: 'Hydrogen', weight3: 1.0079, symbol3: 'H',
        position4: 1, name4: 'Hydrogen', weight4: 1.0079, symbol4: 'H',
        position5: 1, name5: 'Hydrogen', weight5: 1.0079, symbol5: 'H',
        position6: 1, name6: 'Hydrogen', weight6: 1.0079, symbol6: 'H',
        position7: 1, name7: 'Hydrogen', weight7: 1.0079, symbol7: 'H',
        position8: 1, name8: 'Hydrogen', weight8: 1.0079, symbol8: 'H',
        position9: 1, name9: 'Hydrogen', weight9: 1.0079, symbol9: 'H',

        position10: 1, name10: 'Hydrogen', weight10: 1.0079, symbol10: 'H',
        position12: 1, name12: 'Hydrogen', weight12: 1.0079, symbol12: 'H',
        position13: 1, name13: 'Hydrogen', weight13: 1.0079, symbol13: 'H',
        position14: 1, name14: 'Hydrogen', weight14: 1.0079, symbol14: 'H',
        position15: 1, name15: 'Hydrogen', weight15: 1.0079, symbol15: 'H',
        position16: 1, name16: 'Hydrogen', weight16: 1.0079, symbol16: 'H',
        position17: 1, name17: 'Hydrogen', weight17: 1.0079, symbol17: 'H',
        position18: 1, name18: 'Hydrogen', weight18: 1.0079, symbol18: 'H',
        position19: 1, name19: 'Hydrogen', weight19: 1.0079, symbol19: 'H',

        position20: 1, name20: 'Hydrogen', weight20: 1.0079, symbol20: 'H',
        position21: 1, name21: 'Hydrogen', weight21: 1.0079, symbol21: 'H',
        position22: 1, name22: 'Hydrogen', weight22: 1.0079, symbol22: 'H',
        position23: 1, name23: 'Hydrogen', weight23: 1.0079, symbol23: 'H',
        position24: 1, name24: 'Hydrogen', weight24: 1.0079, symbol24: 'H',
        position25: 1, name25: 'Hydrogen', weight25: 1.0079, symbol25: 'H',
        position26: 1, name26: 'Hydrogen', weight26: 1.0079, symbol26: 'H',
        position27: 1, name27: 'Hydrogen', weight27: 1.0079, symbol27: 'H',
        position28: 1, name28: 'Hydrogen', weight28: 1.0079, symbol28: 'H',
        position29: 1, name29: 'Hydrogen', weight29: 1.0079, symbol29: 'H',
      },
      {
        position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',
        position1: 4, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H',
        position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H',
        position3: 1, name3: 'Hydrogen', weight3: 1.0079, symbol3: 'H',
        position4: 1, name4: 'Hydrogen', weight4: 1.0079, symbol4: 'H',
        position5: 1, name5: 'Hydrogen', weight5: 1.0079, symbol5: 'H',
        position6: 1, name6: 'Hydrogen', weight6: 1.0079, symbol6: 'H',
        position7: 1, name7: 'Hydrogen', weight7: 1.0079, symbol7: 'H',
        position8: 1, name8: 'Hydrogen', weight8: 1.0079, symbol8: 'H',
        position9: 1, name9: 'Hydrogen', weight9: 1.0079, symbol9: 'H',

        position10: 1, name10: 'Hydrogen', weight10: 1.0079, symbol10: 'H',
        position12: 1, name12: 'Hydrogen', weight12: 1.0079, symbol12: 'H',
        position13: 1, name13: 'Hydrogen', weight13: 1.0079, symbol13: 'H',
        position14: 1, name14: 'Hydrogen', weight14: 1.0079, symbol14: 'H',
        position15: 1, name15: 'Hydrogen', weight15: 1.0079, symbol15: 'H',
        position16: 1, name16: 'Hydrogen', weight16: 1.0079, symbol16: 'H',
        position17: 1, name17: 'Hydrogen', weight17: 1.0079, symbol17: 'H',
        position18: 1, name18: 'Hydrogen', weight18: 1.0079, symbol18: 'H',
        position19: 1, name19: 'Hydrogen', weight19: 1.0079, symbol19: 'H',

        position20: 1, name20: 'Hydrogen', weight20: 1.0079, symbol20: 'H',
        position21: 1, name21: 'Hydrogen', weight21: 1.0079, symbol21: 'H',
        position22: 1, name22: 'Hydrogen', weight22: 1.0079, symbol22: 'H',
        position23: 1, name23: 'Hydrogen', weight23: 1.0079, symbol23: 'H',
        position24: 1, name24: 'Hydrogen', weight24: 1.0079, symbol24: 'H',
        position25: 1, name25: 'Hydrogen', weight25: 1.0079, symbol25: 'H',
        position26: 1, name26: 'Hydrogen', weight26: 1.0079, symbol26: 'H',
        position27: 1, name27: 'Hydrogen', weight27: 1.0079, symbol27: 'H',
        position28: 1, name28: 'Hydrogen', weight28: 1.0079, symbol28: 'H',
        position29: 1, name29: 'Hydrogen', weight29: 1.0079, symbol29: 'H',
      },
      {
        position: 5, name: 'Boron', weight: 10.811, symbol: 'B',
        position1: 5, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H',
        position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H',
        position3: 1, name3: 'Hydrogen', weight3: 1.0079, symbol3: 'H',
        position4: 1, name4: 'Hydrogen', weight4: 1.0079, symbol4: 'H',
        position5: 1, name5: 'Hydrogen', weight5: 1.0079, symbol5: 'H',
        position6: 1, name6: 'Hydrogen', weight6: 1.0079, symbol6: 'H',
        position7: 1, name7: 'Hydrogen', weight7: 1.0079, symbol7: 'H',
        position8: 1, name8: 'Hydrogen', weight8: 1.0079, symbol8: 'H',
        position9: 1, name9: 'Hydrogen', weight9: 1.0079, symbol9: 'H',

        position10: 1, name10: 'Hydrogen', weight10: 1.0079, symbol10: 'H',
        position12: 1, name12: 'Hydrogen', weight12: 1.0079, symbol12: 'H',
        position13: 1, name13: 'Hydrogen', weight13: 1.0079, symbol13: 'H',
        position14: 1, name14: 'Hydrogen', weight14: 1.0079, symbol14: 'H',
        position15: 1, name15: 'Hydrogen', weight15: 1.0079, symbol15: 'H',
        position16: 1, name16: 'Hydrogen', weight16: 1.0079, symbol16: 'H',
        position17: 1, name17: 'Hydrogen', weight17: 1.0079, symbol17: 'H',
        position18: 1, name18: 'Hydrogen', weight18: 1.0079, symbol18: 'H',
        position19: 1, name19: 'Hydrogen', weight19: 1.0079, symbol19: 'H',

        position20: 1, name20: 'Hydrogen', weight20: 1.0079, symbol20: 'H',
        position21: 1, name21: 'Hydrogen', weight21: 1.0079, symbol21: 'H',
        position22: 1, name22: 'Hydrogen', weight22: 1.0079, symbol22: 'H',
        position23: 1, name23: 'Hydrogen', weight23: 1.0079, symbol23: 'H',
        position24: 1, name24: 'Hydrogen', weight24: 1.0079, symbol24: 'H',
        position25: 1, name25: 'Hydrogen', weight25: 1.0079, symbol25: 'H',
        position26: 1, name26: 'Hydrogen', weight26: 1.0079, symbol26: 'H',
        position27: 1, name27: 'Hydrogen', weight27: 1.0079, symbol27: 'H',
        position28: 1, name28: 'Hydrogen', weight28: 1.0079, symbol28: 'H',
        position29: 1, name29: 'Hydrogen', weight29: 1.0079, symbol29: 'H',
      },
      {
        position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',
        position1: 6, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H',
        position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H',
        position3: 1, name3: 'Hydrogen', weight3: 1.0079, symbol3: 'H',
        position4: 1, name4: 'Hydrogen', weight4: 1.0079, symbol4: 'H',
        position5: 1, name5: 'Hydrogen', weight5: 1.0079, symbol5: 'H',
        position6: 1, name6: 'Hydrogen', weight6: 1.0079, symbol6: 'H',
        position7: 1, name7: 'Hydrogen', weight7: 1.0079, symbol7: 'H',
        position8: 1, name8: 'Hydrogen', weight8: 1.0079, symbol8: 'H',
        position9: 1, name9: 'Hydrogen', weight9: 1.0079, symbol9: 'H',

        position10: 1, name10: 'Hydrogen', weight10: 1.0079, symbol10: 'H',
        position12: 1, name12: 'Hydrogen', weight12: 1.0079, symbol12: 'H',
        position13: 1, name13: 'Hydrogen', weight13: 1.0079, symbol13: 'H',
        position14: 1, name14: 'Hydrogen', weight14: 1.0079, symbol14: 'H',
        position15: 1, name15: 'Hydrogen', weight15: 1.0079, symbol15: 'H',
        position16: 1, name16: 'Hydrogen', weight16: 1.0079, symbol16: 'H',
        position17: 1, name17: 'Hydrogen', weight17: 1.0079, symbol17: 'H',
        position18: 1, name18: 'Hydrogen', weight18: 1.0079, symbol18: 'H',
        position19: 1, name19: 'Hydrogen', weight19: 1.0079, symbol19: 'H',

        position20: 1, name20: 'Hydrogen', weight20: 1.0079, symbol20: 'H',
        position21: 1, name21: 'Hydrogen', weight21: 1.0079, symbol21: 'H',
        position22: 1, name22: 'Hydrogen', weight22: 1.0079, symbol22: 'H',
        position23: 1, name23: 'Hydrogen', weight23: 1.0079, symbol23: 'H',
        position24: 1, name24: 'Hydrogen', weight24: 1.0079, symbol24: 'H',
        position25: 1, name25: 'Hydrogen', weight25: 1.0079, symbol25: 'H',
        position26: 1, name26: 'Hydrogen', weight26: 1.0079, symbol26: 'H',
        position27: 1, name27: 'Hydrogen', weight27: 1.0079, symbol27: 'H',
        position28: 1, name28: 'Hydrogen', weight28: 1.0079, symbol28: 'H',
        position29: 1, name29: 'Hydrogen', weight29: 1.0079, symbol29: 'H',
      },
      {
        position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',
        position1: 7, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H',
        position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H',
        position3: 1, name3: 'Hydrogen', weight3: 1.0079, symbol3: 'H',
        position4: 1, name4: 'Hydrogen', weight4: 1.0079, symbol4: 'H',
        position5: 1, name5: 'Hydrogen', weight5: 1.0079, symbol5: 'H',
        position6: 1, name6: 'Hydrogen', weight6: 1.0079, symbol6: 'H',
        position7: 1, name7: 'Hydrogen', weight7: 1.0079, symbol7: 'H',
        position8: 1, name8: 'Hydrogen', weight8: 1.0079, symbol8: 'H',
        position9: 1, name9: 'Hydrogen', weight9: 1.0079, symbol9: 'H',

        position10: 1, name10: 'Hydrogen', weight10: 1.0079, symbol10: 'H',
        position12: 1, name12: 'Hydrogen', weight12: 1.0079, symbol12: 'H',
        position13: 1, name13: 'Hydrogen', weight13: 1.0079, symbol13: 'H',
        position14: 1, name14: 'Hydrogen', weight14: 1.0079, symbol14: 'H',
        position15: 1, name15: 'Hydrogen', weight15: 1.0079, symbol15: 'H',
        position16: 1, name16: 'Hydrogen', weight16: 1.0079, symbol16: 'H',
        position17: 1, name17: 'Hydrogen', weight17: 1.0079, symbol17: 'H',
        position18: 1, name18: 'Hydrogen', weight18: 1.0079, symbol18: 'H',
        position19: 1, name19: 'Hydrogen', weight19: 1.0079, symbol19: 'H',

        position20: 1, name20: 'Hydrogen', weight20: 1.0079, symbol20: 'H',
        position21: 1, name21: 'Hydrogen', weight21: 1.0079, symbol21: 'H',
        position22: 1, name22: 'Hydrogen', weight22: 1.0079, symbol22: 'H',
        position23: 1, name23: 'Hydrogen', weight23: 1.0079, symbol23: 'H',
        position24: 1, name24: 'Hydrogen', weight24: 1.0079, symbol24: 'H',
        position25: 1, name25: 'Hydrogen', weight25: 1.0079, symbol25: 'H',
        position26: 1, name26: 'Hydrogen', weight26: 1.0079, symbol26: 'H',
        position27: 1, name27: 'Hydrogen', weight27: 1.0079, symbol27: 'H',
        position28: 1, name28: 'Hydrogen', weight28: 1.0079, symbol28: 'H',
        position29: 1, name29: 'Hydrogen', weight29: 1.0079, symbol29: 'H',
      },
      {
        position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',
        position1: 8, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H',
        position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H',
        position3: 1, name3: 'Hydrogen', weight3: 1.0079, symbol3: 'H',
        position4: 1, name4: 'Hydrogen', weight4: 1.0079, symbol4: 'H',
        position5: 1, name5: 'Hydrogen', weight5: 1.0079, symbol5: 'H',
        position6: 1, name6: 'Hydrogen', weight6: 1.0079, symbol6: 'H',
        position7: 1, name7: 'Hydrogen', weight7: 1.0079, symbol7: 'H',
        position8: 1, name8: 'Hydrogen', weight8: 1.0079, symbol8: 'H',
        position9: 1, name9: 'Hydrogen', weight9: 1.0079, symbol9: 'H',

        position10: 1, name10: 'Hydrogen', weight10: 1.0079, symbol10: 'H',
        position12: 1, name12: 'Hydrogen', weight12: 1.0079, symbol12: 'H',
        position13: 1, name13: 'Hydrogen', weight13: 1.0079, symbol13: 'H',
        position14: 1, name14: 'Hydrogen', weight14: 1.0079, symbol14: 'H',
        position15: 1, name15: 'Hydrogen', weight15: 1.0079, symbol15: 'H',
        position16: 1, name16: 'Hydrogen', weight16: 1.0079, symbol16: 'H',
        position17: 1, name17: 'Hydrogen', weight17: 1.0079, symbol17: 'H',
        position18: 1, name18: 'Hydrogen', weight18: 1.0079, symbol18: 'H',
        position19: 1, name19: 'Hydrogen', weight19: 1.0079, symbol19: 'H',

        position20: 1, name20: 'Hydrogen', weight20: 1.0079, symbol20: 'H',
        position21: 1, name21: 'Hydrogen', weight21: 1.0079, symbol21: 'H',
        position22: 1, name22: 'Hydrogen', weight22: 1.0079, symbol22: 'H',
        position23: 1, name23: 'Hydrogen', weight23: 1.0079, symbol23: 'H',
        position24: 1, name24: 'Hydrogen', weight24: 1.0079, symbol24: 'H',
        position25: 1, name25: 'Hydrogen', weight25: 1.0079, symbol25: 'H',
        position26: 1, name26: 'Hydrogen', weight26: 1.0079, symbol26: 'H',
        position27: 1, name27: 'Hydrogen', weight27: 1.0079, symbol27: 'H',
        position28: 1, name28: 'Hydrogen', weight28: 1.0079, symbol28: 'H',
        position29: 1, name29: 'Hydrogen', weight29: 1.0079, symbol29: 'H',
      },
      {
        position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',
        position1: 9, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H',
        position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H',
        position3: 1, name3: 'Hydrogen', weight3: 1.0079, symbol3: 'H',
        position4: 1, name4: 'Hydrogen', weight4: 1.0079, symbol4: 'H',
        position5: 1, name5: 'Hydrogen', weight5: 1.0079, symbol5: 'H',
        position6: 1, name6: 'Hydrogen', weight6: 1.0079, symbol6: 'H',
        position7: 1, name7: 'Hydrogen', weight7: 1.0079, symbol7: 'H',
        position8: 1, name8: 'Hydrogen', weight8: 1.0079, symbol8: 'H',
        position9: 1, name9: 'Hydrogen', weight9: 1.0079, symbol9: 'H',

        position10: 1, name10: 'Hydrogen', weight10: 1.0079, symbol10: 'H',
        position12: 1, name12: 'Hydrogen', weight12: 1.0079, symbol12: 'H',
        position13: 1, name13: 'Hydrogen', weight13: 1.0079, symbol13: 'H',
        position14: 1, name14: 'Hydrogen', weight14: 1.0079, symbol14: 'H',
        position15: 1, name15: 'Hydrogen', weight15: 1.0079, symbol15: 'H',
        position16: 1, name16: 'Hydrogen', weight16: 1.0079, symbol16: 'H',
        position17: 1, name17: 'Hydrogen', weight17: 1.0079, symbol17: 'H',
        position18: 1, name18: 'Hydrogen', weight18: 1.0079, symbol18: 'H',
        position19: 1, name19: 'Hydrogen', weight19: 1.0079, symbol19: 'H',

        position20: 1, name20: 'Hydrogen', weight20: 1.0079, symbol20: 'H',
        position21: 1, name21: 'Hydrogen', weight21: 1.0079, symbol21: 'H',
        position22: 1, name22: 'Hydrogen', weight22: 1.0079, symbol22: 'H',
        position23: 1, name23: 'Hydrogen', weight23: 1.0079, symbol23: 'H',
        position24: 1, name24: 'Hydrogen', weight24: 1.0079, symbol24: 'H',
        position25: 1, name25: 'Hydrogen', weight25: 1.0079, symbol25: 'H',
        position26: 1, name26: 'Hydrogen', weight26: 1.0079, symbol26: 'H',
        position27: 1, name27: 'Hydrogen', weight27: 1.0079, symbol27: 'H',
        position28: 1, name28: 'Hydrogen', weight28: 1.0079, symbol28: 'H',
        position29: 1, name29: 'Hydrogen', weight29: 1.0079, symbol29: 'H',
      },
      {
        position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',
        position1: 10, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H',
        position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H',
        position3: 1, name3: 'Hydrogen', weight3: 1.0079, symbol3: 'H',
        position4: 1, name4: 'Hydrogen', weight4: 1.0079, symbol4: 'H',
        position5: 1, name5: 'Hydrogen', weight5: 1.0079, symbol5: 'H',
        position6: 1, name6: 'Hydrogen', weight6: 1.0079, symbol6: 'H',
        position7: 1, name7: 'Hydrogen', weight7: 1.0079, symbol7: 'H',
        position8: 1, name8: 'Hydrogen', weight8: 1.0079, symbol8: 'H',
        position9: 1, name9: 'Hydrogen', weight9: 1.0079, symbol9: 'H',

        position10: 1, name10: 'Hydrogen', weight10: 1.0079, symbol10: 'H',
        position12: 1, name12: 'Hydrogen', weight12: 1.0079, symbol12: 'H',
        position13: 1, name13: 'Hydrogen', weight13: 1.0079, symbol13: 'H',
        position14: 1, name14: 'Hydrogen', weight14: 1.0079, symbol14: 'H',
        position15: 1, name15: 'Hydrogen', weight15: 1.0079, symbol15: 'H',
        position16: 1, name16: 'Hydrogen', weight16: 1.0079, symbol16: 'H',
        position17: 1, name17: 'Hydrogen', weight17: 1.0079, symbol17: 'H',
        position18: 1, name18: 'Hydrogen', weight18: 1.0079, symbol18: 'H',
        position19: 1, name19: 'Hydrogen', weight19: 1.0079, symbol19: 'H',

        position20: 1, name20: 'Hydrogen', weight20: 1.0079, symbol20: 'H',
        position21: 1, name21: 'Hydrogen', weight21: 1.0079, symbol21: 'H',
        position22: 1, name22: 'Hydrogen', weight22: 1.0079, symbol22: 'H',
        position23: 1, name23: 'Hydrogen', weight23: 1.0079, symbol23: 'H',
        position24: 1, name24: 'Hydrogen', weight24: 1.0079, symbol24: 'H',
        position25: 1, name25: 'Hydrogen', weight25: 1.0079, symbol25: 'H',
        position26: 1, name26: 'Hydrogen', weight26: 1.0079, symbol26: 'H',
        position27: 1, name27: 'Hydrogen', weight27: 1.0079, symbol27: 'H',
        position28: 1, name28: 'Hydrogen', weight28: 1.0079, symbol28: 'H',
        position29: 1, name29: 'Hydrogen', weight29: 1.0079, symbol29: 'H',
      },
    ];
  }
}


/** 測試自訂驗證方法 */
export function validateEmail(c: FormControl) {
  // tslint:disable-next-line: max-line-length
  const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}
