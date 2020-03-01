import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { ControlItem } from 'src/app/controls/form-controls/form-controls.model';

@Component({
  selector: 'app-form-manager-demo',
  templateUrl: './form-manager-demo.component.html',
  styleUrls: ['./form-manager-demo.component.css']
})
export class FormManagerDemoComponent implements OnInit {

  controlData: ControlItem<any>[] = this.dataService.getFilterConfing();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
