import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }

  /** 使用者按下新增按鈕 */
  addDataSource() {
    console.log('使用者按下新增按鈕');

    // ============== 新增用假資料 ==============
    const data: FilterElement[] = [
      { id: 'position', name: 'Position 查詢', value: '123', type: FilterType.NumberInput, dataSource: undefined },
      { id: 'name', name: 'Name 查詢', value: '', type: FilterType.StringInput, dataSource: undefined },
      { id: 'weight', name: 'Weight 查詢', value: '', type: FilterType.StringInput, dataSource: undefined },
      { id: 'symbol', name: 'Symbol 查詢', value: '', type: FilterType.StringInput, dataSource: undefined }
    ];

    // TODO 測試用假資料
    this.openDialog(data);
  }

  /** 使用者按下編輯按鈕 */
  updateDataSource() {
    console.log('使用者按下編輯按鈕');

    // TODO 測試用假資料
    this.openDialog(null);
  }

  /** 使用者按下刪除按鈕 */
  deleteDataSource() {
    console.log('使用者按下刪除按鈕');
  }


  /**
   * 使用者點擊開啟 Dialog 元件按鈕
   *
   * @param Event event 點擊事件物件
   */
  // openDialog(evnet: MouseEvent): void {  //前端 openDialog($event) 改為 openDialog(data) 直接傳值
  openDialog(dialogData: FilterElement[]): void {
    // 1.開啟 Dialog 組件視窗
    const dialogRef = this.dialog.open(EditDataSourceComponent, {
      // height: '800px',
      // width: '400px',
      data: dialogData // 將查找到的 DialogData 物件傳遞到子元件當中
    });

    // 2.Dialog 組件視窗關閉後的操作動作
    // result 就是在 dialog.temp.compoent.html 中的 [mat-dialog-close] 所繫結的 "data"
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(`關閉事件後接收到的的物件資料內容
        ${result.name}
        ${result.height}
        ${result.weight}`);
      }
    });
  }
}
