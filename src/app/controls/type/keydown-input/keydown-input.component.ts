import { Component, OnInit, Input } from '@angular/core';
import { ControlItem } from '../../form-controls/form-controls.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-keydown-input',
  templateUrl: './keydown-input.component.html',
  styleUrls: ['./keydown-input.component.css']
})
export class KeydownInputComponent implements OnInit {

  // 說明：如果想要在父元件已經有 FormGroup 的狀況下建立子元件的 FormGroup
  //       則必須將外層的 FormGroup 物件往子元件傳遞
  @Input() customForm: FormGroup;
  @Input() controlItem: ControlItem;

  constructor() { }

  ngOnInit(): void {
  }

}
