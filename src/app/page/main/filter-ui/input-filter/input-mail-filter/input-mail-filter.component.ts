import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FilterElement } from 'src/app/Domain/FilterElement';
import { Subject, Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-input-mail-filter',
  templateUrl: './input-mail-filter.component.html',
  styleUrls: ['./input-mail-filter.component.css']
})
export class InputMailFilterComponent implements OnInit {

  /** 查詢條件物件 */
  filterElement: FilterElement;
  @Input('filterElement') set setLabeFilter(filter: FilterElement) {
    if (filter !== undefined) {
      this.filterElement = Object.assign({}, filter);
    } else {
      console.error(`InputMailFilterComponent FilterElement undefined`);
    }
  }

  /** 使用者輸入查詢條件 */
  @Output() ValueChange = new EventEmitter<FilterElement>();

  private subscription: Subscription;
  keydown = new Subject<KeyboardEvent>();

  /** 郵件輸入驗證規則物件 */
  emailFormControl: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
    this.subscription = this.keydown.pipe(
      map(event => (event.target as HTMLInputElement).value),
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((val) => {
      this.filterElement.value = val;
      this.ValueChange.emit(this.filterElement);
    });
  }

  /** 表單初始化 */
  private initForm() {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  }
}
