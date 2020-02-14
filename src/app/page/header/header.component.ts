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
      { id: 'position', name: 'Position 查詢', value: '123', type: FilterType.NumberInput, dataSource: undefined },
      { id: 'name', name: 'Name 查詢', value: '', type: FilterType.StringInput, dataSource: undefined },
      { id: 'weight', name: 'Weight 查詢', value: '', type: FilterType.StringInput, dataSource: undefined },
      { id: 'symbol', name: 'Symbol 查詢', value: '', type: FilterType.StringInput, dataSource: undefined }
    ];

    // Test Data
    // const dialogData = [
    //   { id: 'position', name: 'Position 查詢', value: '123' },
    //   { id: 'name', name: 'Name 查詢', value: '' },
    //   { id: 'weight', name: 'Weight 查詢', value: '' },
    //   { id: 'symbol', name: 'Symbol 查詢', value: '' }
    // ];

    // 1.開啟 Dialog 組件視窗
    const dialogRef = this.dialog.open(EditDataSourceComponent, {
      data: dialogData
    });

    // 2.Dialog 組件視窗關閉後的操作動作
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log('關閉事件後接收到的的物件資料內容', result);

        // TODO 組出資料表物件
        const add = Object.entries(dialogData).map(([key, value]) => {
                      const keyid = Object.keys(value)[0];
                      const id = Object.values(value)[0];
                      const value2 = Object.values(value)[2];
                      if (keyid === 'id' || keyid === 'value') {
                        return { [id]: `${value2}` };
                      }
                    });

        this.addData.emit(add);
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

        // TODO 組出資料表物件
        this.updateData.emit('');
      }
    });
  }

  /** 使用者按下刪除按鈕 */
  deleteDataSource() {
    console.log('使用者按下刪除按鈕');

    // TODO 批次刪除資料
  }
}
