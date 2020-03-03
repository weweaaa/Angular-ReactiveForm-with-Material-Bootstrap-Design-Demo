import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/core/data.service';
import { ControlType, ControlItem } from 'src/app/controls/form-controls/form-controls.model';

@Component({
  selector: 'app-all-manager-demo',
  templateUrl: './all-manager-demo.component.html',
  styleUrls: ['./all-manager-demo.component.css']
})
export class AllManagerDemoComponent implements OnInit {

  /** 資料表內容 */
  dataTableSource: Array<any>;
  /** 資料表欄位定義 */
  tableSchema: ControlItem<ControlType>[];

  /** 查詢條件用 */
  controlData: ControlItem<ControlType>[];

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  // 減少查詢條件
  // 減少資料範圍大小

  ngOnInit(): void {
    this.tableSchema = this.dataService.getTableSchema2();
    this.dataTableSource = this.dataService.getData2();
    this.controlData = this.dataService.getFilterConfing();
  }

}
