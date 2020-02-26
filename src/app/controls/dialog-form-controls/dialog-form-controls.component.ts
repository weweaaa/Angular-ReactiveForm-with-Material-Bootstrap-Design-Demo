import { Component, OnInit, Inject } from '@angular/core';
import { ControlItem } from '../form-controls/form-controls.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public controls: ControlItem[]) {
      if (this.controls !== undefined && this.controls !== null && this.controls.length > 0) {
        this.controlItem = [...this.controls];
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
  onSaveClick(event: any): void {
    console.log('使用者儲存');
    this.dialogRef.close(event);
  }

  /**
   * 使用者點擊關閉按鈕
   */
  onNoClick(): void {
    console.log('使用者關閉');
    this.dialogRef.close();
  }

  /**
   * 重置資料
   */
  onResetClick(): void {
    console.log('使用者重置');
    this.controlItem = [...this.controls];
  }
}
