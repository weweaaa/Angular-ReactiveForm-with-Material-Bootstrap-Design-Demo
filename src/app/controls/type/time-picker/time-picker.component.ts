import { Component, OnInit, Input } from '@angular/core';
import { ControlItem } from '../../form-controls/form-controls.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  @Input() customForm: FormGroup;
  @Input() controlItem: ControlItem;

  constructor() { }

  ngOnInit(): void {
  }

  setTimeValue(timeSet: string) {
    this.controlItem.value = timeSet;
  }
}
