import { Component, OnInit } from '@angular/core';
import { ControlItem, ControlType } from 'src/app/controls/form-controls/form-controls.model';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  controlData: ControlItem<ControlType>[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFormManagerSchema(1).subscribe((val) => {
      this.controlData = val[0].schema;
    });
  }
}
