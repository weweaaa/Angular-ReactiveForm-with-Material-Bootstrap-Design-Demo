import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FilterElement } from 'src/app/Domain/FilterElement';

@Component({
  selector: 'app-slide-toggle-filter',
  templateUrl: './slide-toggle-filter.component.html',
  styleUrls: ['./slide-toggle-filter.component.css']
})
export class SlideFilterComponent implements OnInit {

  /** 查詢條件物件 */
  filterElement: FilterElement;
  @Input('filterElement') set setLabeFilter(filter: FilterElement) {
    if (filter !== undefined) {
      this.filterElement = filter;
    } else {
      console.error(`CheckBoxFilterComponent FilterElement undefined`);
    }
  }

  /** 使用者輸入查詢條件 */
  @Output() ValueChange = new EventEmitter<FilterElement>();

  /** 取得預設選取狀態 */
  getDefaltChecked() {
    if (this.filterElement.value === '') {
      return false;
    } else if (this.filterElement.value === 'true' || this.filterElement.value === '1') {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  /** 使用者切換選取 */
  changeSelected(event: any) {
    this.filterElement.value = String(event.checked);
    this.ValueChange.emit(this.filterElement);

  }
}
