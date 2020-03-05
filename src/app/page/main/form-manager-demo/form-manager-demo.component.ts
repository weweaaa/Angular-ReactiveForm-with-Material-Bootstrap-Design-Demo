import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { ControlItem, ControlType } from 'src/app/controls/form-controls/form-controls.model';

@Component({
  selector: 'app-form-manager-demo',
  templateUrl: './form-manager-demo.component.html',
  styleUrls: ['./form-manager-demo.component.css']
})
export class FormManagerDemoComponent implements OnInit {

  @ViewChild('tform') tform: any;

  controlData: ControlItem<ControlType>[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getFormManagerSchema(1).subscribe((val) => {
      this.controlData = val[0].schema;
    });
  }
}
