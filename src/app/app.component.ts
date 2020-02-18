import { Component, OnInit } from '@angular/core';
import { ControlItem, ControlType } from './controls/form-controls/form-controls.model';
import { DialogFormControlsComponent } from './controls/dialog-form-controls/dialog-form-controls.component';
import { MatDialog } from '@angular/material';
import { DataService } from './Core/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /** 前 凍結欄位清單 */
  dataTableStickyCols = ['position'];
  /** 後 凍結欄位清單 */
  dataTableStickyEndCols = ['symbol29'];
  /** 報表名稱 */
  reportName = '我是小資料報表';
  /** 資料表內容 */
  dataTableSource: Array<any>;

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  /** 設定表單呈現內容 */
  controlData: ControlItem[] = [
    { id: 't1', displayName: 'Input', controlType: ControlType.KeywordInput, value: 'xx' },
    { id: 't2', displayName: 'CKkk', controlType: ControlType.CheckBox, value: true },
    {
      id: 't3',
      displayName: 'test3',
      controlType: ControlType.RadioButtonList,
      value: 'A',
      dataSource: [{ key: 'A', value: 'A!' }, { key: 'B', value: 'B!' }]
    },
    { id: 't4', displayName: 'test4', controlType: ControlType.SlideChecked, value: true },
    { id: 't5', displayName: 'test5', controlType: ControlType.KeywordInput, value: '' },
    {
      id: 't6',
      displayName: 'test3',
      controlType: ControlType.DropDownList,
      value: 'A',
      dataSource: [{ key: 'A', value: 'A!' }, { key: 'B', value: 'B!' }]
    },
    { id: 't7', displayName: 'test6', controlType: ControlType.DatePicker, value: '' },
    { id: 't8', displayName: 'test7', controlType: ControlType.TimePicker, value: '' },
    { id: 't9', displayName: 'test8', controlType: ControlType.CheckBox, value: '' },
  ];

  ngOnInit(): void {
    this.dataTableSource = this.dataService.getData1(this.getFilterData());
  }

  /** 轉換使用者輸入的內容變成查詢條件物件 */
  getFilterData() {
    return this.controlData.reduce((obj, { id, value }) => {
      return { ...obj, [id]: value };
    }, {});
  }

  /** 將使用者的輸入轉化成 資料表 需要的物件 */
  convertDialogData(arrayData) {
    return arrayData.reduce((obj: any, item: ControlItem) => {
      return {
        ...obj,
        [item.id]: item.value,
      };
    }, {});
  }

  /** 使用者進行查詢條件內容變化 */
  filterChange(event: { key: string, value: string | boolean }) {
    console.log('app 接收到事件', event);
    this.dataTableSource = this.dataService.getData1(event);
  }

  // ---------------------------------------------------------------------
  /** 新增一筆資料 */
  addData() {
    // 1.開啟 Dialog 組件視窗
    const dialogRef = this.dialog.open(DialogFormControlsComponent, {
      // TODO Dialog 測試用資料
      data: [
        { id: 'position', name: 'Position 查詢', value: '', controlType: ControlType.KeywordInput, dataSource: undefined },
        { id: 'name', name: 'name', value: '', controlType: ControlType.KeywordInput, dataSource: undefined },
        { id: 'weight', name: 'weight', value: '', controlType: ControlType.KeywordInput, dataSource: undefined },
        { id: 'symbol', name: 'symbol', value: '', controlType: ControlType.KeywordInput, dataSource: undefined }
      ],
    });

    // 2.Dialog 組件視窗關閉後的操作動作
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('關閉事件後接收到的的物件資料內容', result);

        // TODO 使用者新增一筆資料，透過 Service 更新
        this.dataTableSource = [...this.dataTableSource, result];
      }
    });
  }

  /** 編輯一筆資料 */
  editData() {

  }

  /** 批次刪除資料 */
  deleteCheckedList() {

  }
  // ---------------------------------------------------------------------

}
