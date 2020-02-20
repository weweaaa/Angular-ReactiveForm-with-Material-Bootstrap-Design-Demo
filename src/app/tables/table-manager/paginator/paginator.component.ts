import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @ViewChild('myPaginator') myPaginator: MatPaginator;

  /** 總資料筆數 */
  @Input()
  public get rowCount(): number {
    return this._rowCount;
  }

  public set rowCount(count: number) {
    this.pageIndex = 0;
    this._rowCount = count;

    if (this.myPaginator) {
      this.myPaginator.firstPage();
    }
  }
  private _rowCount: number;

  /** 設定分頁位置 */
  @Input() pageIndex: number;
  /** 設定分頁筆數 */
  @Input() rowPageSize: number;
  /** 設定分頁筆數選項清單 */
  @Input() rowPageSizeOptions: number[];

  /** 切換分頁事件 */
  @Output() changePage = new EventEmitter<PageEvent>();
  pageEvent: PageEvent;

  constructor() { }

  ngOnInit(): void {
  }

  changePageEvent(event: PageEvent) {
    this.changePage.emit(this.pageEvent = event);
  }
}
