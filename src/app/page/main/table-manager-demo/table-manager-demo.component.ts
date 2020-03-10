import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormControlsComponent } from 'src/app/controls/dialog-form-controls/dialog-form-controls.component';
import { ControlItem, ControlType } from 'src/app/controls/form-controls/form-controls.model';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-table-manager-demo',
  templateUrl: './table-manager-demo.component.html',
  styleUrls: ['./table-manager-demo.component.css']
})
export class TableManagerDemoComponent implements OnInit {

  /** 前 凍結欄位清單 */
  dataTableStickyCols = [''];
  /** 後 凍結欄位清單 */
  dataTableStickyEndCols = [''];

  /** 使用者在資料表上已勾選的清單 */
  selectedList = [];
  /** 報表名稱 */
  reportName = '我是小資料報表';
  /** 資料表內容 */
  dataTableSource: Array<any>;
  /** 資料表欄位定義 */
  tableSchema: ControlItem<ControlType>[];

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getTableManagerSchema('data1').subscribe((val) => {
      this.tableSchema = val[0].schema;
      this.dataTableSource = val[0].data;
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
    // 1. 取得該筆資料 id 傳換成表單需要的物件樣貌
    const dataDialog = this.tableSchema;
    dataDialog.forEach(val => val.value = event[val.id]);

    // 2. 開啟 Dialog 組件視窗
    const dialogRef = this.dialog.open(DialogFormControlsComponent, {
      width: '680px',
      data: dataDialog,
    });

    // 3. Dialog 組件視窗關閉後的操作動作
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataTableSource = this.dataTableSource.filter(val => +val.id !== +event.id);
        // console.log('start this.dataTableSource :', this.dataTableSource);
        this.dataTableSource = [result, ...this.dataTableSource];
        // console.log('end this.dataTableSource :', this.dataTableSource);
        console.log('編輯一筆資料');
      }
    });
  }

  /** 批次刪除資料 */
  deleteCheckedList(event?: any) {
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
