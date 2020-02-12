import { Component, OnInit, Input } from '@angular/core';
import { FilterElement, FilterType } from 'src/app/Domain/FilterElement';
@Component({
  selector: 'app-filter-ui',
  templateUrl: './filter-ui.component.html',
  styleUrls: ['./filter-ui.component.css']
})
export class FilterUIComponent implements OnInit {

  /** 由外部傳入需要使用到的查詢條件清單 [呈現順序由外部傳入的清單順序決定] */
  @Input() filterList: FilterElement[];

  FType = FilterType;

  /** 判斷是否需要呈現 class="w-100" DIV Block  */
  getDivW100(index: number) {
    return (index !== 0) && (index % 2 === 0);
  }

  constructor() { }

  ngOnInit(): void {
    // TODO 初始化 依據報表類型決定要顯示的查詢條件清單，透過 Service 動態建立

    // 假資料
    this.filterList = [
      { id: 'ID', name: 'ID 查詢', value: '', type: FilterType.InputTextBox },
      { id: 'Position', name: 'Position 查詢', value: '123', type: FilterType.InputTextBox },
      { id: 'Name', name: 'Name 查詢', value: '', type: FilterType.InputTextBox },
      { id: 'Weight', name: 'Weight 查詢', value: '', type: FilterType.DatePicker },
    ];
  }

  /**
   * 使用者設定 日期 查詢條件
   */
  setDateFilter(setDate: FilterElement) {
    console.log(setDate);

    // TODO 設定時間查詢條件
  }
}
