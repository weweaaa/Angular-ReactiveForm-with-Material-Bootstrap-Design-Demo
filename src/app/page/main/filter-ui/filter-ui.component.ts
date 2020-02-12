import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-ui',
  templateUrl: './filter-ui.component.html',
  styleUrls: ['./filter-ui.component.css']
})
export class FilterUIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // TODO 初始化 依據報表類型決定要顯示的查詢條件清單，透過 Service 動態建立
  }

  /**
   * 使用者設定 日期 查詢條件
   */
  setDateFilter(setDate: string) {
    console.log(setDate);

    // TODO 設定時間查詢條件
  }
}
