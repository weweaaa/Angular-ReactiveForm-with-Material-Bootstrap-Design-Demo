import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FilterElement } from 'src/app/Domain/FilterElement';

@Component({
  selector: 'app-edit-data-source',
  templateUrl: './edit-data-source.component.html',
  styleUrls: ['./edit-data-source.component.css'],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class EditDataSourceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditDataSourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterElement) { }

  ngOnInit(): void {
  }

  /**
   * 使用者點擊關閉按鈕
   */
  onSaveClick(): void {
    console.log('使用者關閉按鈕');
    // this.data.name = this.dialogName;
    // this.data.height = this.dialogHeight;
    // this.data.weight = this.dialogWeight;

    this.dialogRef.close(this.data);
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
    // this.dialogName = this.data.name;
    // this.dialogHeight = this.data.height;
    // this.dialogWeight = this.data.weight;
  }

}
