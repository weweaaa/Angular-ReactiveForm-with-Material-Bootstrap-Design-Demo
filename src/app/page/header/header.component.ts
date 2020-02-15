import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FilterElement, FilterType } from 'src/app/Domain/FilterElement';
import { MatDialog } from '@angular/material';
import { EditDataSourceComponent } from '../main/edit-data-source/edit-data-source.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  /** 新增一筆資料輸入需要的欄位 */
  @Input() dialogData: FilterElement[];
  /** 新增一筆資料輸入 */
  @Output() addData = new EventEmitter<any>();
  /** 編輯一筆資料輸入 */
  @Output() updateData = new EventEmitter<any>();

  ngOnInit(): void {
  }

  /** 使用者按下新增按鈕 */
  addDataSource() {
    console.log('使用者按下新增按鈕');

    // ============== 新增用假資料 ==============
    const dialogData: FilterElement[] = [
      { id: 'position', name: 'Position 查詢', value: '', type: FilterType.NumberInput, dataSource: undefined },
      { id: 'name', name: 'Name 查詢', value: '', type: FilterType.StringInput, dataSource: undefined },
      { id: 'weight', name: 'Weight 查詢', value: '', type: FilterType.StringInput, dataSource: undefined },
      { id: 'symbol', name: 'Symbol 查詢', value: '', type: FilterType.StringInput, dataSource: undefined }
    ];

    // 1.開啟 Dialog 組件視窗
    const dialogRef = this.dialog.open(EditDataSourceComponent, {
      data: dialogData
    });

    // 2.Dialog 組件視窗關閉後的操作動作
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('關閉事件後接收到的的物件資料內容', result);

        const userAdd = this.convertDialogData(result);
        this.addData.emit(userAdd);
      }
    });
  }

  /** 使用者按下編輯按鈕 */
  updateDataSource() {
    console.log('使用者按下編輯按鈕');

    // TODO 待實作，測試先傳入 null 值

    // 1.開啟 Dialog 組件視窗
    const dialogRef = this.dialog.open(EditDataSourceComponent, {
      data: null
    });

    // 2.Dialog 組件視窗關閉後的操作動作
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('關閉事件後接收到的的物件資料內容', result);

        const userEdit = this.convertDialogData(result);
        this.updateData.emit(userEdit);
      }
    });
  }

  /** 將使用者的輸入轉化成 資料表 需要的物件 */
  convertDialogData(arrayData) {
    return arrayData.reduce((obj: any, item: FilterElement) => {
      return {
        ...obj,
        [item.id]: [item.value],
      };
    }, {});
  }

  /** 使用者按下刪除按鈕 */
  deleteDataSource() {
    console.log('使用者按下刪除按鈕');

    // TODO 批次刪除資料
  }
}
