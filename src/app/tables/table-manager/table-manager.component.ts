import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-table-manager',
  templateUrl: './table-manager.component.html',
  styleUrls: ['./table-manager.component.css']
})
export class TableManagerComponent implements OnInit {

  /** 外部傳遞資料表 內容 */
  @Input()
  public get dataSource(): Array<any> {
    return this._dataSource;
  }
  public set dataSource(data: Array<any>) {
    this._dataSource = [...data];

    const StartRow = this.pageSize * 0;
    const EndRow = StartRow + this.pageSize;
    this.dataSourcePaginator = this._dataSource.slice(StartRow, EndRow);
  }

  dataSourcePaginator: Array<any>;
  AlldataElementsColumns: string[]
  dataElementsColumns: string[];

  /** 外部傳遞資料表 名稱 */
  @Input() reportName: string;
  private _dataSource: Array<any>;
  /** 前凍結欄位清單 */
  @Input() StickyColumns: string[];
  /** 尾巴凍結欄位清單 */
  @Input() StickyEndColumns: string[];
  /** 資料表分頁筆數 [預設50筆] */
  @Input() pageSize: number;

  /** 使用者勾選設定 */
  selection = new SelectionModel<any>(true, []);


  constructor() { }

  ngOnInit(): void {
  }
  /** 檢查是否需要顯示報表名稱 */
  checkShowReportName(): boolean {
    return (this.reportName !== undefined && this.reportName !== null && this.reportName !== '');
  }

  /** 檢查是否需要顯示報表 */
  checkShowData(): boolean {
    return (this._dataSource !== undefined && this._dataSource !== null && this._dataSource.length > 0);
  }

  /** 資料表 切換分頁事件 */
  changeTablePage(event: PageEvent) {

    // console.log(`總資料筆數 ${event.length} 筆。`);
    // console.log(`目前在第 ${event.pageIndex + 1} 頁。`);
    // console.log(`目前每 ${event.pageSize} 筆 為一個分頁。`);

    const StartRow = this.pageSize * event.pageIndex;
    const EndRow = StartRow + this.pageSize;
    this.dataSourcePaginator = this._dataSource.slice(StartRow, EndRow);

    // console.log('要切換的起始筆', StartRow);
    // console.log('要切換的結尾筆', EndRow);
  }

  // [欄位顯示相關處理]
  // ------------------------------------------------------------------------------------------------------
  /**
   * 依據資料模型取得要呈現的欄位
   */
  getColumns(): string[] {
    if (this._dataSource !== undefined && this._dataSource.length > 0) {

      const sourceCol = Object.keys(this._dataSource[0]);

      // 處理隱藏欄位
      this.dataElementsColumns = sourceCol.filter(val => val !== '_HideSticky');
      this.AlldataElementsColumns = ['select', ...this.dataElementsColumns];

      return this.dataElementsColumns;

    } else {
      console.error('report data undefined.');
      return [];
    }
  }

  /** 判斷是否要設定 前 凍結欄位 */
  setStickyColumn(colName: string): boolean {
    if (this.StickyColumns !== undefined) {
      return (this.StickyColumns.filter(val => val === colName).length > 0);
    }
  }

  /** 判斷是否要設定 後 凍結欄位 */
  setStickyEndColumn(colName: string): boolean {
    if (this.StickyEndColumns !== undefined) {
      return (this.StickyEndColumns.filter(val => val === colName).length > 0);
    }
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourcePaginator.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourcePaginator.forEach(row => this.selection.select(row));
  }

  // ------------------------------------------------------------------------------------------------------
}
