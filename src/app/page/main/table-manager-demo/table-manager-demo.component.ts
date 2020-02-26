import { Component, OnInit } from '@angular/core';
import { ControlItem } from 'src/app/controls/form-controls/form-controls.model';
import { DialogFormControlsComponent } from 'src/app/controls/dialog-form-controls/dialog-form-controls.component';
import { DataService } from 'src/app/core/data.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-manager-demo',
  templateUrl: './table-manager-demo.component.html',
  styleUrls: ['./table-manager-demo.component.css']
})
export class TableManagerDemoComponent implements OnInit {

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
  tableSchema: ControlItem[];

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(): void {
    this.tableSchema = this.dataService.getTableSchema2();
    this.dataTableSource = this.dataService.getData2();
  }

  // ---------------------------------------------------------------------
  /** 新增一筆資料 */
  addData() {
    // 1.開啟 Dialog 組件視窗
    const dialogRef = this.dialog.open(DialogFormControlsComponent, {
      width: '400px',
      data: this.dataService.getTableSchema1(),
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
    // 1. 開啟 Dialog 組件視窗
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
