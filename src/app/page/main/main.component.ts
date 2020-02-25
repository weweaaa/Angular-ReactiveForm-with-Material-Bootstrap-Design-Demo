import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  PageTitle: string;

  /** 釋放 subscribe 用的物件 */
  private destroy$: Subscriber<any>;

  constructor(public router: Router) { }

  ngOnInit(): void {
    // 抓取 url 路徑
    const destroy$ = this.router.events.subscribe(value => {
      if (value instanceof RoutesRecognized) {
        this.setTitle(value.url.replace(/\//, ''));
      }
    });

  }

  /** 設定 title 名稱 */
  setTitle(url: string) {
    switch (url) {
      case 'form-manager-demo':
        this.PageTitle = '通用表單呈現';
        break;
      case 'table-manager-demo':
        this.PageTitle = '萬用資料表呈現';
        break;
      case 'filter-form-manager-demo':
        this.PageTitle = '純查詢條件搭配萬用資料表';
        break;
      case 'all-manager-demo':
        this.PageTitle = '綜合版本應用呈現';
        break;
      default:
        console.log('url mapping not defined :', url);
        break;
    }
  }

  /** 處理訂閱資源回收操作 */
  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

}
