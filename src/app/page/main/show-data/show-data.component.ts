import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TestDataElement1 } from 'src/app/Domain/TestDataElement1';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  dataElements: any;
  dataToDisplay: any;

  dataElementsColumns: string[];
  columnsToDisplay: string[];

  /**
   * 外部傳入要呈現的資料內容
   */
  @Input('dataElements') set setTableData(data: any) {
    this.dataElements = Object.assign([], data);
    console.log(this.dataElements);
    this.dataToDisplay = new MatTableDataSource(this.dataElements);
    this.getColumns();
  }

  @Input() reportName: string;

  /**
   * 依據資料模型取得要呈現的欄位
   */
  private getColumns() {
    if (this.dataElements !== undefined) {
      this.dataElementsColumns = Object.keys(this.dataElements[0]);
      this.columnsToDisplay = this.dataElementsColumns.slice();
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

  /**
   * 新增一個欄位
   */
  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.dataElementsColumns.length);
    this.columnsToDisplay.push(this.dataElementsColumns[randomColumn]);
  }

}
