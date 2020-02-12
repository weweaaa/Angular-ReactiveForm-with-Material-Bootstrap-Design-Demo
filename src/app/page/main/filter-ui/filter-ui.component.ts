import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-ui',
  templateUrl: './filter-ui.component.html',
  styleUrls: ['./filter-ui.component.css']
})
export class FilterUIComponent implements OnInit {

  /* ============ 查詢條件清單 Sart ============ */

  // 顯示名稱
  /** Id 查詢條件 */
  FilterPlaceholderID: string;
  /** Position 查詢條件 */
  FilterPlaceholderPosition: string;
  /** Name 查詢條件 */
  FilterPlaceholderName: string;
  /** Weight 查詢條件 */
  FilterPlaceholderWeight: string;

  // Key
  /** Id 查詢條件 */
  FilterID: string;
  /** Position 查詢條件 */
  FilterPosition: string;
  /** Name 查詢條件 */
  FilterName: string;
  /** Weight 查詢條件 */
  FilterWeight: string;


  /* ============ 查詢條件清單 End ============ */

  constructor() { }

  ngOnInit(): void {
    // TODO 初始化 依據報表類型決定要顯示的查詢條件清單，透過 Service 動態建立

    this.FilterID = 'ID';
    this.FilterPosition = 'Position';
    this.FilterName = 'Name';
    this.FilterWeight = 'Weight';

    this.FilterPlaceholderID = 'ID 查詢';
    this.FilterPlaceholderPosition = 'Position 查詢';
    this.FilterPlaceholderName = 'Name 查詢';
    this.FilterPlaceholderWeight = 'Weight 查詢';
  }

  /**
   * 使用者設定 日期 查詢條件
   */
  setDateFilter(setDate: string) {
    console.log(setDate);

    // TODO 設定時間查詢條件
  }
}
