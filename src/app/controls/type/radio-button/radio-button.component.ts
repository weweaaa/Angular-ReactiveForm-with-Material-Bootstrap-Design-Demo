import { Component, OnInit, Input } from '@angular/core';
import { ControlItem } from '../../form-controls/form-controls.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Input() customForm: FormGroup;
  @Input() controlItem: ControlItem;

  constructor() { }

  ngOnInit(): void {
  }

}
