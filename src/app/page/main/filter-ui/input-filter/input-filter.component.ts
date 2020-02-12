import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject, Subscription, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, mergeMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.css']
})
export class InputFilterComponent implements OnInit {

  /** 查詢條件預設值 */
  @Input() labeValue: string;

  /** 查詢條件 Key */
  labeKey: string;
  @Input('labeKey') set setTitleName(vlaue: string) {
    if (vlaue !== undefined) {
      this.labeKey = vlaue;
    } else {
      console.error(`InputFilterComponent labeKey undefined`);
    }
  }

  /** 查詢條件顯示名稱 */
  labeShowName: string;
  @Input('labeShowName') set setLabeShowName(vlaue: string) {
    if (vlaue !== undefined) {
      this.labeShowName = vlaue;
    } else {
      console.error(`InputFilterComponent labeShowName undefined`);
    }
  }

  /** 使用者輸入查詢條件 */
  @Output() setInputFilter = new EventEmitter();

  private subscription: Subscription;
  keydown = new Subject<KeyboardEvent>();

  constructor() { }

  ngOnInit(): void {
    if (this.labeShowName === undefined) {
      console.error(`InputFilterComponent labeShowName undefined`);
    }
    if (this.labeKey === undefined) {
      console.error(`InputFilterComponent labeKey undefined`);
    }

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
