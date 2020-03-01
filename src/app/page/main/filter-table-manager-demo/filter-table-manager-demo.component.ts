import { Component, OnInit } from '@angular/core';
import { ControlItem, ControlType } from 'src/app/controls/form-controls/form-controls.model';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-filter-table-manager-demo',
  templateUrl: './filter-table-manager-demo.component.html',
  styleUrls: ['./filter-table-manager-demo.component.css']
})
export class FilterTableManagerDemoComponent implements OnInit {

  /** 報表名稱 */
  reportName = '資料報表';
  /** 資料表內容 */
  dataTableSource: Array<any>;
  /** 資料表欄位定義 */
  tableSchema: ControlItem<ControlType>[];

  /** 查詢條件用 */
  controlData: ControlItem<ControlType>[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.tableSchema = this.dataService.getTableSchema2();
    this.dataTableSource = this.dataService.getData2();
    this.controlData = this.dataService.getFilterConfing();

    console.log('this.tableSchema :', this.tableSchema);
    console.log('this.dataTableSource :', this.dataTableSource);
  }
}
