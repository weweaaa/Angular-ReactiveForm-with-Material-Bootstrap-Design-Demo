import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject, Subscription, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, mergeMap, delay } from 'rxjs/operators';
import { FilterElement } from 'src/app/Domain/FilterElement';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.css']
})
export class InputFilterComponent implements OnInit {

  /** 查詢條件物件 */
  filterElement: FilterElement;
  @Input('filterElement') set setLabeFilter(filter: FilterElement) {
    if (filter !== undefined) {
      this.filterElement = filter;
    } else {
      console.error(`InputFilterComponent FilterElement undefined`);
    }
  }

  /** 使用者輸入查詢條件 */
  @Output() setInputFilter = new EventEmitter();

  private subscription: Subscription;
  keydown = new Subject<KeyboardEvent>();

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.keydown.pipe(
      map(event => (event.target as HTMLInputElement).value),
      debounceTime(500),  // 如果輸入時間少於 300 ms 則 放棄 往後進行
      distinctUntilChanged(), // 僅針對當前值與上次不同才往後進行動作 ( 默認匹配方式 === )
      // mergeMap(search => of(search).pipe(  // 延遲事件發出
      //   delay(500),
      // )),
    ).subscribe((val) => {
      console.log(val);
      this.setInputFilter.emit(val);
    });
  }
}
