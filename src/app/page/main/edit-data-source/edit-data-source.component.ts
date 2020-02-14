import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FilterElement, FilterType } from 'src/app/Domain/FilterElement';

@Component({
  selector: 'app-edit-data-source',
  templateUrl: './edit-data-source.component.html',
  styleUrls: ['./edit-data-source.component.css'],
  // providers: [
  //   { provide: MatDialogRef, useValue: {} },
  //   { provide: MAT_DIALOG_DATA, useValue: {} }
  // ]
})
export class EditDataSourceComponent implements OnInit {

  /** 放置用來產生輸入控制項目的 JSON 清單 */
  DataSource: FilterElement[];

  constructor(
    public dialogRef: MatDialogRef<EditDataSourceComponent>,
    @Inject(MAT_DIALOG_DATA) public source: FilterElement[]) {

    if (this.source !== undefined && this.source !== null && this.source.length > 0) {
      this.DataSource = [...this.source];
    } else {
      console.error('EditDataSourceComponent FilterElement[] is null or undefined');
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {
    // TODO 如果使用者傳入的內容是空則跳 Alert，或是在外部開啟前就先判斷並 return void，阻止視窗開啟

  }

  /**
   * 使用者點擊存檔按鈕
   */
  onSaveClick(): void {
    console.log('使用者關閉按鈕');
    // this.data.name = this.dialogName;
    // this.data.height = this.dialogHeight;
    // this.data.weight = this.dialogWeight;

    this.dialogRef.close(this.DataSource);
  }

  /**
   * 使用者點擊關閉按鈕
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * 重置資料
   */
  onResetClick(): void {
    this.DataSource = [...this.source];
  }

  /** 使用者更新輸入事件 */
  changeFormValue(event: FilterElement) {
    console.log('changeFormValue', event);
    console.log('Now dataSource', this.DataSource);

    // TODO 還不確定為什麼 this.DataSource 內容當使用者在 Dialog 內觸發輸入事件後 會同步更新

    // this.DataSource = this.DataSource.map((val) => {
    //   if (val.id === event.id) {
    //     return event;
    //   } else {
    //     return val;
    //   }
    // });
    //
  }
}
