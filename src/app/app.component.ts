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

  /** 使用者在資料表上已勾選的清單 */
  selectedList = [];
  /** 報表名稱 */
  reportName = '我是小資料報表';
  /** 資料表內容 */
  dataTableSource: Array<any>;
  /** 設定表單呈現內容 */
  controlData: ControlItem[] = this.dataService.getFilterConfing();

  constructor(public dialog: MatDialog, private dataService: DataService) { }

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
  // convertDialogData(arrayData) {
  //   return arrayData.reduce((obj: any, item: ControlItem) => {
  //     return {
  //       ...obj,
  //       [item.id]: item.value,
  //     };
  //   }, {});
  // }

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
      width: '350px',
      data: this.dataService.getTableSchema(),
    });

    // 2.Dialog 組件視窗關閉後的操作動作
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('關閉事件後接收到的的物件資料內容', result);

        // TODO 使用者新增一筆資料，透過 Service 重新查詢資料
        this.dataTableSource = [...this.dataTableSource, result];
      }
    });
  }

  /** 編輯一筆資料 */
  editData() {
    if (this.selectedList.length === 0) {
      alert('請至少選擇一筆進行編輯!!!');
    } else if (this.selectedList.length > 1) {
      alert(`請選擇單一筆進行編輯，您目前選取了 ${this.selectedList.length}`);
    } else {

      // 1. 提取使用者選取的資料列內容
      const dataDialog = this.dataService.getTableSchema();
      dataDialog.forEach(val => val.value = this.selectedList[0][val.id]);  // 範例結果 => val.id : 'position', this.selectedList[0][val.id] : 1

      // 2. 開啟 Dialog 組件視窗
      const dialogRef = this.dialog.open(DialogFormControlsComponent, {
        width: '350px',
        data: dataDialog,
      });

      // 3. Dialog 組件視窗關閉後的操作動作
      dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
          console.log('關閉事件後接收到的的物件資料內容', result);


          // TODO 使用者編輯一筆資料，透過 Service 重新查詢資料
          // ---------------------------------------------------
          if (this.dataService.editData(result) === true) {

            const editTempData = [...this.dataTableSource];

            editTempData.forEach((val) => {
              if (val.id === result.id) {
                alert('update success...');
                const editKeys = Object.keys(result.id);
                editKeys.forEach(valk => val[valk] = result[result]);
                console.log(editTempData);
              }
            });

            this.dataTableSource = [...editTempData];
          }
          // ---------------------------------------------------
        }
      });
    }
  }

  /** 批次刪除資料 */
  deleteCheckedList() {
    if (this.selectedList.length > 0) {
      console.log('使用者批次刪除');
      this.dataTableSource = this.dataTableSource.concat(this.selectedList).filter((val) => {
        return !this.dataTableSource.includes(val) || !this.selectedList.includes(val);
      });

      // TODO 使用者批次刪除資料，透過 Service 重新查詢資料

    } else {
      alert('請至少選擇一筆');
    }
  }
  // ---------------------------------------------------------------------

  /** 勾選事件發生 */
  isSelectedEvent(event: any) {
    // console.log('isSelected', event);
  }

  /** 全部勾選清單異動發生 */
  selectedAllValueChange(event: any) {
    this.selectedList = event;
    // console.log('selectedAll', event);
  }
}


// console.log() 快捷鍵 --> 'clo' + tab鍵盤
