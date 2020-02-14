import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/Core/data.service';
import { FilterType, FilterElement } from 'src/app/Domain/FilterElement';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.css']
})
export class MainDataComponent implements OnInit {

  data: FilterElement[];
  dataElements: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataElements = this.dataService.getData1();

    // ============== 假資料 ==============
    // this.data = [
    //   { id: 'ID', name: 'ID 查詢', value: '', type: FilterType.StringInput, dataSource: undefined },
    //   { id: 'Position', name: 'Position 查詢', value: '123', type: FilterType.NumberInput, dataSource: undefined },
    //   { id: 'Checkbox', name: 'Checkbox 查詢', value: 'true', type: FilterType.CheckBox, dataSource: undefined },
    //   { id: 'Name', name: 'Name 查詢', value: '', type: FilterType.TimePicker, dataSource: undefined },
    //   { id: 'Name', name: 'Name 查詢', value: 'true', type: FilterType.SlideChecked, dataSource: undefined },
    //   { id: 'Weight', name: 'Weight 查詢', value: '', type: FilterType.DatePicker, dataSource: undefined },
    //   { id: 'Mail', name: 'Mail 查詢', value: '', type: FilterType.MailInput, dataSource: undefined },
    //   { id: 'SelectDDL', name: 'SelectDDL 查詢', value: '', type: FilterType.DropDownList, dataSource: [{ A: 'A!' }, { B: 'B!' }] },
    //   { id: 'SelectRBL', name: 'SelectRBL 查詢', value: '', type: FilterType.RadioButton, dataSource: [{ A: 'A!' }, { B: 'B!' }] },
    // ];
  }
}
