import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/Core/data.service';

@Component({
  selector: 'app-main-data',
  templateUrl: './main-data.component.html',
  styleUrls: ['./main-data.component.css']
})
export class MainDataComponent implements OnInit {

  dataElements: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataElements = this.dataService.getData1();
  }
}
