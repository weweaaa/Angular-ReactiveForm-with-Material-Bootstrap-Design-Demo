import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FilterElement, FilterType } from 'src/app/Domain/FilterElement';

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
    @Inject(MAT_DIALOG_DATA) public data: FilterElement[]) { }

  ngOnInit(): void {

    // ============== 假資料 ==============
    this.data = [
      { id: 'ID', name: 'ID 查詢', value: '', type: FilterType.StringInput, dataSource: undefined },
      { id: 'Position', name: 'Position 查詢', value: '123', type: FilterType.NumberInput, dataSource: undefined },
      { id: 'Checkbox', name: 'Checkbox 查詢', value: 'true', type: FilterType.CheckBox, dataSource: undefined },
      { id: 'Name', name: 'Name 查詢', value: '', type: FilterType.TimePicker, dataSource: undefined },
      { id: 'Name', name: 'Name 查詢', value: 'true', type: FilterType.SlideChecked, dataSource: undefined },
      { id: 'Weight', name: 'Weight 查詢', value: '', type: FilterType.DatePicker, dataSource: undefined },
      { id: 'Mail', name: 'Mail 查詢', value: '', type: FilterType.MailInput, dataSource: undefined },
      { id: 'SelectDDL', name: 'SelectDDL 查詢', value: '', type: FilterType.DropDownList, dataSource: [{ A: 'A!' }, { B: 'B!' }] },
      { id: 'SelectRBL', name: 'SelectRBL 查詢', value: '', type: FilterType.RadioButton, dataSource: [{ A: 'A!' }, { B: 'B!' }] },
    ];
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
