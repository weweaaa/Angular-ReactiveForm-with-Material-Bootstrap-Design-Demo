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

    // ============== 假資料 ==============
    this.filterList = [
      { id: 'ID', name: 'ID 查詢', value: '', type: FilterType.StringInput, dataSource: undefined },
      { id: 'Position', name: 'Position 查詢', value: '123', type: FilterType.NumberInput, dataSource: undefined },
      { id: 'Checkbox', name: 'Checkbox 查詢', value: 'true', type: FilterType.CheckBox, dataSource: undefined },
      { id: 'Name', name: 'Name 查詢', value: '', type: FilterType.TimePicker, dataSource: undefined },
      { id: 'Name', name: 'Name 查詢', value: 'true', type: FilterType.SlideChecked, dataSource: undefined },
      { id: 'Weight', name: 'Weight 查詢', value: '', type: FilterType.DatePicker, dataSource: undefined },
      { id: 'Mail', name: 'Mail 查詢', value: '', type: FilterType.MailInput, dataSource: undefined },
      { id: 'SelectDDL', name: 'SelectDDL 查詢', value: '', type: FilterType.DropDownList, dataSource: [{ A: 'A!' }, { B: 'B!' }] },
      { id: 'SelectRBL', name: 'SelectRBL 查詢', value: '', type: FilterType.RadioButton, dataSource: [{ A: 'A!' }, { B: 'B!' }] },
      // {
      //   id: 'TreeCheckBox', name: 'TreeCheckBox 查詢', value: '', type: FilterType.TreeCheckbox, dataSource: {
      //     Groceries: {
      //       'Almond Meal flour': null,
      //       'Organic eggs': null,
      //       'Protein Powder': null,
      //       Fruits: {
      //         Apple: null,
      //         Berries: ['Blueberry', 'Raspberry'],
      //         Orange: null
      //       }
      //     }
      //   }
      // },
    ];
  }

  /**
   * 使用者設定 查詢條件
   */
  ValueChange(setDate: FilterElement) {
    console.log(setDate);

    // TODO 查詢條件實作
  }
}
