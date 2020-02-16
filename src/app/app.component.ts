import { Component } from '@angular/core';
import { ControlItem, ControlType } from './controls/form-controls/form-controls.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** 設定表單呈現內容 */
  controlItemList: Array<ControlItem> = [
    { id: 't1', displayName: 'Input', controlType: ControlType.KeydownInput, value: '' },
    { id: 't2', displayName: 'CKkk', controlType: ControlType.CheckedBox, value: true },
    {
      id: 't3',
      displayName: 'test3',
      controlType: ControlType.RadioButton,
      value: 'A',
      dataSource: [{ key: 'A', value: 'A!' }, { key: 'B', value: 'B!' }]
    },
    { id: 't4', displayName: 'test4', controlType: ControlType.SlideToggle, value: true },
    { id: 't5', displayName: 'test5', controlType: ControlType.KeydownInput, value: '' },
    {
      id: 't6',
      displayName: 'test3',
      controlType: ControlType.DropDownList,
      value: 'A',
      dataSource: [{ key: 'A', value: 'A!' }, { key: 'B', value: 'B!' }]
    },
    { id: 't7', displayName: 'test6', controlType: ControlType.DatePicker, value: '' },
    { id: 't8', displayName: 'test7', controlType: ControlType.TimePicker, value: '' },
    { id: 't9', displayName: 'test8', controlType: ControlType.CheckedBox, value: '' },
  ];

  addTableData(event: any) {
    // TODO 向資料庫新增一筆資料


    // TODO 更新資料表呈現

  }
}
