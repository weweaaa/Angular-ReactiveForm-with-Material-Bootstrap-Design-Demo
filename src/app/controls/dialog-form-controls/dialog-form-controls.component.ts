import { Component, OnInit, Inject } from '@angular/core';
import { ControlItem } from '../form-controls/form-controls.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-form-controls',
  templateUrl: './dialog-form-controls.component.html',
  styleUrls: ['./dialog-form-controls.component.css']
})
export class DialogFormControlsComponent implements OnInit {

  /** 放置用來產生輸入控制項目的 JSON 清單 */
  controlItem: ControlItem[];

  constructor(
    public dialogRef: MatDialogRef<DialogFormControlsComponent>,
    @Inject(MAT_DIALOG_DATA) public item: ControlItem[]) {
      if (this.item !== undefined && this.item !== null && this.item.length > 0) {
        this.controlItem = [...this.item];
      } else {
        // 如果使用者傳入的內容是空則跳 Alert，或是在外部開啟前就先判斷並 return void，阻止視窗開啟
        alert('EditDataSourceComponent FilterElement[] is null or undefined');
        this.dialogRef.close();
      }
    }

  ngOnInit(): void {

  }

  /**
   * 使用者點擊存檔按鈕
   */
  onSaveClick(): void {
    console.log('使用者儲存');

    // TODO
    // this.dialogRef.close(this.DataSource);
  }

  /**
   * 使用者點擊關閉按鈕
   */
  onNoClick(): void {
    console.log('使用者關閉');
  }

  /**
   * 重置資料
   */
  onResetClick(): void {
    console.log('使用者重置');
  }

}
