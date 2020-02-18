import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PageEvent, MatCheckboxChange } from '@angular/material';
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

    this.reloadSelected();
  }

  dataSourcePaginator: Array<any>;
  AlldataElementsColumns: string[];
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

  /** 勾選事件發生，當下勾選的清單 */
  @Output() isSelectedEvent = new EventEmitter<any>();
  /** 全部勾選清單異動發生，目前所有勾選的清單 */
  @Output() selectedAllValueChange = new EventEmitter<any>();


  /** 使用者勾選設定 */
  allSelection = new SelectionModel<any>(true, []);
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

    // console.log('切換後的起始筆', StartRow);
    // console.log('切換後的結尾筆', EndRow);

    this.reloadSelected();
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

  // ------------------------------------------------------------------------------------------------------

  // [清單選項勾選相關處理]
  // ------------------------------------------------------------------------------------------------------

  /** 重新整理勾選狀態 */
  reloadSelected() {

    /** 檢查目前總勾選清單中，是否有不存在的資料，找到並清除不存在資料 */
    const allselected = this.allSelection.selected.length;
    this.allSelection.selected.forEach((val) => {
      if (this._dataSource.includes(val) === false) {
        this.allSelection.deselect(val);
      }
    });
    if (allselected !== this.allSelection.selected.length) {
      // 發送總勾選清單變更事件
      this.selectedAllValueChange.emit(this.allSelection.selected);
    }


    this.selection.clear();

    // 取出總勾選紀錄，來還原上次勾選的狀態
    this.allSelection.selected.forEach((val) => {
      this.dataSourcePaginator.forEach((v) => {
        if (val === v) {
          this.selection.select(val);
        }
      });
    });
  }

  /** 勾選框框圖示狀態調整 */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /** 檢查所勾選數量是否與總資料數匹配 */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourcePaginator.length;
    return numSelected === numRows;
  }

  /** 全勾選 / 取消全勾選 */
  masterToggle() {

    // 判斷此分頁是否全部勾選
    if (this.isAllSelected() === true) {
      this.dataSourcePaginator.forEach(row => {
        this.selection.deselect(row);
        this.allSelection.deselect(row);
      });

    } else {
      this.dataSourcePaginator.forEach(row => {
        this.selection.select(row);
        this.allSelection.select(row);
      });

      this.isSelectedEvent.emit(this.selection.selected);
    }

    this.selectedAllValueChange.emit(this.allSelection.selected);
  }

  /** 單一勾選 */
  changeSelected(event?: MatCheckboxChange, toggleRow?: any) {
    if (event !== undefined && toggleRow !== undefined) {
      this.selection.toggle(toggleRow);
      this.allSelection.toggle(toggleRow);

      this.isSelectedEvent.emit(toggleRow);
      this.selectedAllValueChange.emit(this.allSelection.selected);
    }
  }

  // ------------------------------------------------------------------------------------------------------
}
