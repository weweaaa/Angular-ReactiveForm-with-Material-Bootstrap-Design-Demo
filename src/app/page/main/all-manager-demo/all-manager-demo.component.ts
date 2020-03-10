import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormControlsComponent } from 'src/app/controls/dialog-form-controls/dialog-form-controls.component';
import { ControlItem, ControlType } from 'src/app/controls/form-controls/form-controls.model';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-all-manager-demo',
  templateUrl: './all-manager-demo.component.html',
  styleUrls: ['./all-manager-demo.component.css']
})
export class AllManagerDemoComponent implements OnInit {

  /** 使用者在資料表上已勾選的清單 */
  selectedList = [];

  /** 資料表內容 */
  dataTableSource: Array<any>;
  /** 資料表欄位定義 */
  tableSchema: ControlItem<ControlType>[];

  /** 查詢條件用 */
  controlData: ControlItem<ControlType>[];

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  // 減少查詢條件
  // 減少資料範圍大小

  ngOnInit(): void {
    this.dataService.getAllManager().subscribe((val) => {
      this.controlData = val['filter-schema'];
      this.tableSchema = val['table-schema'];
      this.dataTableSource = val.data;
    });
  }

  // ---------------------------------------------------------------------
  /** 新增一筆資料 */
  addData() {
    // 1.開啟 Dialog 組件視窗
    const dialogRef = this.dialog.open(DialogFormControlsComponent, {
      width: '680px',
      data: this.tableSchema,
    });

    // 2.Dialog 組件視窗關閉後的操作動作
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.dataTableSource = [...this.dataTableSource, result];
        console.log('使用者新增一筆資料');
      }
    });

  }

  /** 編輯一筆資料 */
  editData(event?: any) {

    // 取得該筆資料 id 傳換成表單需要的物件樣貌
    const dataDialog = this.tableSchema;
    dataDialog.forEach(val => val.value = event[val.id]);

    // 1. 開啟 Dialog 組件視窗
    const dialogRef = this.dialog.open(DialogFormControlsComponent, {
      width: '680px',
      data: dataDialog,
    });

    // 2. Dialog 組件視窗關閉後的操作動作
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataTableSource = this.dataTableSource.filter(val => +val.id !== +event.id);
        this.dataTableSource = [result, ...this.dataTableSource];
        console.log('編輯一筆資料');
      }
    });
  }

  /** 批次刪除資料 */
  deleteCheckedList(event?: any) {
    console.log('event', event);
    console.log('this.selectedList :', this.selectedList);
    /* ============ 由外部元件按鈕控制 table-manager 的作法 ============ */
    if (!event && this.selectedList.length > 0) {
      this.dataTableSource = this.dataTableSource.concat(this.selectedList).filter((val) => {
        return !this.dataTableSource.includes(val) || !this.selectedList.includes(val);
      });
      console.log('使用者批次刪除選取的資料');
    }

    /** ============ 直接操作 table-manager 事件的做法 ============ */
    if (event) {
      this.dataTableSource = this.dataTableSource.concat(event).filter(val => val !== event);
      console.log('使用者刪除一筆資料');
    }
  }
  // ---------------------------------------------------------------------

  /** 全部勾選清單異動發生 */
  selectedAllValueChange(event: any) {
    this.selectedList = event;
  }
}
