import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Core/data.service';

@Component({
  selector: 'app-main-data2',
  templateUrl: './main-data2.component.html',
  styleUrls: ['./main-data2.component.css']
})
export class MainData2Component implements OnInit {

  dataElements: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataElements = this.dataService.getData2();
  }

}
