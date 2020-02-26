import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { ControlItem } from 'src/app/controls/form-controls/form-controls.model';

// 套版用參考：https://mdbootstrap.com/docs/angular/tables/basic/
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

  // -------------------------------------------------------------

  /** 外部傳遞資料表 名稱 */
  @Input() reportName: string;
  private _dataSource: Array<any>;
  /** 前凍結欄位清單 */
  @Input() stickyColumns: string[];
  /** 尾巴凍結欄位清單 */
  @Input() stickyEndColumns: string[];
  /** 隱藏欄位清單 */
  @Input() hiddenColumns: string[];

  /** 資料表結構定義，同新增時使用的 ControlItem[]  */
  @Input() tableSchema: ControlItem[];
  /** 資料表分頁筆數 [預設50筆] */
  @Input() pageSize: number;

  /** 是否顯示勾選欄位 */
  @Input() isShowCheckBox: boolean;

  /** 是否顯示新增按鈕 */
  @Input() isShowAddButton: boolean;
  /** 是否顯示編輯按鈕 */
  @Input() isShowEditButton: boolean;
  /** 是否顯示刪除按鈕 */
  @Input() isShowDeleteButton: boolean;

  // -------------------------------------------------------------

  /** 新增資料 事件 */
  @Output() addRowEvent = new EventEmitter<any>();
  /** 編輯勾選的資料 事件 */
  @Output() editRowEvent = new EventEmitter<any>();
  /** 刪除勾選的資料 事件 */
  @Output() deleteRowEvent = new EventEmitter<any>();

  /** 勾選事件發生，當下勾選的清單 */
  @Output() isSelectedEvent = new EventEmitter<any>();
  /** 全部勾選清單異動發生，目前所有勾選的清單 */
  @Output() selectedAllValueChange = new EventEmitter<any>();

  // -------------------------------------------------------------

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
    const checkSchema = (this.tableSchema && this.tableSchema.length > 0);
    const checkData = (this._dataSource && this._dataSource.length > 0);

    if (checkSchema === false) {
      console.error('Table Schema undefined');
    }

    if (checkData === false) {
      console.error('Table Data undefined');
    }

    return (checkSchema && checkData);
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
  getColumns(): Array<{ key: string, value: string }> {
    if (this.tableSchema && this.tableSchema.length > 0) {

      // 資料表定義 轉換模型 範例數據
      // [
      //   { id: 'id', displayName: '我是 ID', value: '', disabled: false, controlType: ControlType.KeywordInput },
      //   { id: 'position', displayName: '我是 Position', value: '', controlType: ControlType.DatePicker, dataSource: undefined },
      // ]

      // [
      //   { 'id': '我是 ID' },
      //   { 'position': '我是 Position' },
      // ]

      const sourceCol = this.tableSchema.map((val) => ({ key: val.id, value: val.displayName }));

      // 處理隱藏欄位
      const dataElementsColumns = sourceCol.map(val => val.key).filter((val) => {
        if (this.hiddenColumns) {
          if (!this.hiddenColumns.includes('_HideSticky')) {
            return val;
          }
        } else {
          return val;
        }
      });

      this.AlldataElementsColumns = [...dataElementsColumns];

      /** 加上 CheckBox 按鈕欄位 */
      if (this.isShowCheckBox) {
        this.AlldataElementsColumns = ['select', ...this.AlldataElementsColumns];
      }

      /** 判斷是否需要加上 按鈕欄位 */
      if (this.isShowAddButton || this.isShowEditButton || this.isShowDeleteButton) {
        this.AlldataElementsColumns = [...this.AlldataElementsColumns, 'btn'];
      }

      return sourceCol;

    } else {
      return [];
    }
  }

  /** 判斷是否要設定 前 凍結欄位 */
  setStickyColumn(colName: string): boolean {
    if (this.stickyColumns !== undefined) {
      return (this.stickyColumns.filter(val => val === colName).length > 0);
    }
  }

  /** 判斷是否要設定 後 凍結欄位 */
  setStickyEndColumn(colName: string): boolean {
    if (this.stickyEndColumns !== undefined) {
      return (this.stickyEndColumns.filter(val => val === colName).length > 0);
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
  add() {
    console.log('add event');
    this.addRowEvent.emit();
  }

  edit(event: any) {
    console.log('edit event click :', event);
    this.editRowEvent.emit(event);
  }

  delete(event: any) {
    console.log('delete event click :', event);
    this.deleteRowEvent.emit(event);
  }
}
