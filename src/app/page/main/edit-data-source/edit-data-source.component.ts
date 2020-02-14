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
      // 如果使用者傳入的內容是空則跳 Alert，或是在外部開啟前就先判斷並 return void，阻止視窗開啟
      alert('EditDataSourceComponent FilterElement[] is null or undefined');
      this.dialogRef.close();
    }
  }

  ngOnInit(): void { }

  /**
   * 使用者點擊存檔按鈕
   */
  onSaveClick(): void {
    console.log('使用者儲存');
    this.dialogRef.close(this.DataSource);
  }

  /**
   * 使用者點擊關閉按鈕
   */
  onNoClick(): void {
    console.log('使用者儲存');
    this.dialogRef.close();
  }

  /**
   * 重置資料
   */
  onResetClick(): void {
    console.log('使用者重置');
    this.DataSource = [...this.source];
  }

  /** 使用者更新輸入事件 */
  changeFormValue(event: FilterElement) {
    console.log('Dialog get changeFormValue', event);

    // 更新儲存使用者輸入的物件內容
    this.DataSource = this.DataSource.map((val) => {
      if (val.id === event.id) {
        return event;
      } else {
        return val;
      }
    });

    console.log('Dialog save changeFormValue All data', this.DataSource);
  }
}
