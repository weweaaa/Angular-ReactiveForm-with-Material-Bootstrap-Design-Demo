import { Component, OnInit } from '@angular/core';
import { ControlItem, ControlType } from './controls/form-controls/form-controls.model';
import { DialogFormControlsComponent } from './controls/dialog-form-controls/dialog-form-controls.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from './core/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /** 前 凍結欄位清單 */
  dataTableStickyCols = ['position'];
  /** 後 凍結欄位清單 */
  dataTableStickyEndCols = ['weight10'];

  /** 使用者在資料表上已勾選的清單 */
  selectedList = [];
  /** 報表名稱 */
  reportName = '我是小資料報表';
  /** 資料表內容 */
  dataTableSource: Array<any>;
  /** 資料表欄位定義 */
  tableSchema: ControlItem<ControlType>[];
  /** 設定表單呈現內容 */
  controlData: ControlItem<ControlType>[] = this.dataService.getFilterConfing();

  change = true;

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(): void {
    if (this.change === true) {
      this.tableSchema = this.dataService.getTableSchema2(this.getFilterData());
      this.dataTableSource = this.dataService.getData2(this.getFilterData());
      this.change = false;
    } else {
      this.tableSchema = this.dataService.getTableSchema1(this.getFilterData());
      this.dataTableSource = this.dataService.getData1(this.getFilterData());
      this.change = true;
    }
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
    if (this.change === true) {
      this.tableSchema = this.dataService.getTableSchema2(this.getFilterData());
      this.dataTableSource = this.dataService.getData2(this.getFilterData());
      this.change = false;
    } else {
      this.tableSchema = this.dataService.getTableSchema1(this.getFilterData());
      this.dataTableSource = this.dataService.getData1(this.getFilterData());
      this.change = true;
    }
  }

  // ---------------------------------------------------------------------
  /** 新增一筆資料 */
  addData() {
    // 1.開啟 Dialog 組件視窗
    const dialogRef = this.dialog.open(DialogFormControlsComponent, {
      width: '400px',
      data: this.change === true ? this.dataService.getTableSchema1() : this.dataService.getTableSchema2(),
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
  editData(event?: any) {
    /* ============ 由外部元件控制 table-manager 的作法 ============
    if (this.selectedList.length === 0) {
      alert('請至少選擇一筆進行編輯!!!');
    } else if (this.selectedList.length > 1) {
      alert(`請選擇單一筆進行編輯，您目前選取了 ${this.selectedList.length}`);
    } else {

      // 1. 提取使用者選取的資料列內容
      const dataDialog = this.dataService.getTableSchema1();
      dataDialog.forEach(val => val.value = this.selectedList[0][val.id]);  // 範例結果 => val.id : 'position', this.selectedList[0][val.id] : 1

      // 2. 開啟 Dialog 組件視窗
      const dialogRef = this.dialog.open(DialogFormControlsComponent, {
        width: '400px',
        data: dataDialog,
      });
    */

    /** ============ 直接操作 table-manager 事件的做法 ============ */
    // 2. 開啟 Dialog 組件視窗
    const dataDialog = this.dataService.getTableSchema1();
    dataDialog.forEach(val => val.value = event[val.id]);

    const dialogRef = this.dialog.open(DialogFormControlsComponent, {
      width: '400px',
      data: dataDialog,
    });

    // 3. Dialog 組件視窗關閉後的操作動作
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('關閉事件後接收到的的物件資料內容', result);


        // TODO 使用者編輯一筆資料，透過 Service 重新查詢資料
        // ---------------------------------------------------
        if (this.dataService.editData(result) === true) {

          this.dataTableSource = this.dataTableSource.filter(val => +val.id !== +event.id);

          console.log('start this.dataTableSource :', this.dataTableSource);

          this.dataTableSource = [result, ...this.dataTableSource];

          console.log('end this.dataTableSource :', this.dataTableSource);
        }
        // ---------------------------------------------------
      }
    });
    /* } */
  }

  /** 批次刪除資料 */
  deleteCheckedList(event?: any) {
    console.log('使用者批次刪除');

    /* ============ 由外部元件控制 table-manager 的作法 ============ */
    if (!event && this.selectedList.length > 0) {
      this.dataTableSource = this.dataTableSource.concat(this.selectedList).filter((val) => {
        return !this.dataTableSource.includes(val) || !this.selectedList.includes(val);
      });
      // TODO 使用者批次刪除資料，透過 Service 重新查詢資料
    } else {
      // alert('請至少選擇一筆');
    }

    /** ============ 直接操作 table-manager 事件的做法 ============ */
    if (event) {
      this.dataTableSource = this.dataTableSource.concat(event).filter(val => val !== event);
      // TODO 使用者批次刪除資料，透過 Service 重新查詢資料
    } else {
      // console.log('selected data is null');
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
