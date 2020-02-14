import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterElement } from 'src/app/Domain/FilterElement';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-check-box-filter',
  templateUrl: './check-box-filter.component.html',
  styleUrls: ['./check-box-filter.component.css']
})
export class CheckBoxFilterComponent implements OnInit {

  /** 查詢條件物件 */
  filterElement: FilterElement;
  @Input('filterElement') set setLabeFilter(filter: FilterElement) {
    if (filter !== undefined) {
      this.filterElement = Object.assign({}, filter);
    } else {
      console.error(`CheckBoxFilterComponent FilterElement undefined`);
    }
  }

  /** 使用者輸入查詢條件 */
  @Output() ValueChange = new EventEmitter<FilterElement>();

  constructor() { }

  ngOnInit(): void {
  }

  changeChecked(event: MatCheckboxChange) {
    this.filterElement.value = String(event.checked);
    this.ValueChange.emit(this.filterElement);
  }
}
