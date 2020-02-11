import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataService } from 'src/app/Core/data.service';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.css']
})
export class MainDataComponent implements OnInit {

  dataElements: any;
  dataElementsColumns: string[];
  columnsToDisplay: string[];

  /**
   * 外部傳入要呈現的資料內容
   */
  @Input('dataElements') set setTableData(data: any) {
    this.dataElements = Object.assign({}, data);
    this.getColumns(data);
  }

  /**
   * 依據資料模型取得要呈現的欄位
   */
  private getColumns(data: any) {
    if (data !== undefined) {
      this.dataElementsColumns = Object.keys(data);
      this.columnsToDisplay = this.dataElementsColumns.slice();
    }
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    // ================ 測試用資料 ================
    const data = this.dataService.getData1();
    this.dataElements = new MatTableDataSource(data);
    this.getColumns(data[0]);
    // ===========================================
  }

  /**
   * 新增一個欄位
   */
  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.dataElementsColumns.length);
    this.columnsToDisplay.push(this.dataElementsColumns[randomColumn]);
  }

}
