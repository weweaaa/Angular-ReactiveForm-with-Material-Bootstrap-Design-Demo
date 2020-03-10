import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControlsComponent } from '../form-controls/form-controls.component';
import { ControlItem, ControlType } from '../form-controls/form-controls.model';

@Component({
  selector: 'app-dialog-form-controls',
  templateUrl: './dialog-form-controls.component.html',
  styleUrls: ['./dialog-form-controls.component.css']
})
export class DialogFormControlsComponent implements OnInit {

  /** 放置用來產生輸入控制項目的 JSON 清單 */
  controlItem: ControlItem<ControlType>[];

  @ViewChild('tform', { static: true }) tform: FormControlsComponent;

  defaultFormData: any;

  constructor(
    public dialogRef: MatDialogRef<DialogFormControlsComponent>,
    @Inject(MAT_DIALOG_DATA) public controls: ControlItem<ControlType>[]) {
    if (this.controls !== undefined && this.controls !== null && this.controls.length > 0) {
      this.controlItem = [...this.controls];
      this.defaultFormData = controls.reduce((obj, { id, value }) => {
        return { ...obj, [id]: value };
      }, {});
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
    this.defaultFormData = {};
  }

  /**
   * 使用者點擊關閉按鈕
   */
  onNoClick(): void {
    console.log('使用者關閉');
    this.dialogRef.close();
    this.defaultFormData = {};
  }

  /**
   * 重置資料
   */
  onResetClick(): void {
    console.log('使用者重置');
    // console.log('this.tform :', this.tform.customForm.get('position').value);

    // 錯誤作法，因為 FormControl 樹狀結構已經定義
    // this.controlItem = [...this.controls];

    // 正確做法，直接修改 value 給予預設值
    this.tform.customForm.patchValue(this.defaultFormData, { emitEvent: false });
  }
}
