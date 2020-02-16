import { Component, OnInit, Input } from '@angular/core';
import { ControlItem } from '../../form-controls/form-controls.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {

  @Input() customForm: FormGroup;
  @Input() controlItem: ControlItem;

  constructor() { }

  ngOnInit(): void {
  }

}
