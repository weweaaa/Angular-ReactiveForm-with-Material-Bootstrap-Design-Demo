import { Injectable } from '@angular/core';
import { ControlItem, ControlType } from '../controls/form-controls/form-controls.model';
import { StickyType } from '../tables/table-manager/table-manager.model';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// this.tKeyword.valueChanges.pipe(
//   debounceTime(500),
//   switchMap(_ => this.getData(this.keyword))
// ).subscribe((value: Post[]) => {
//   this.suggestList = value;
// });

/**
 * 負責處理資料取得相關的服務
 */
export class DataService {

  constructor(private http: HttpClient) { }

  /**
   * 取得 通用表單 設定檔
   */
  getFormManagerSchema(type: number): Observable<any> {
    const apiUrl = environment.api + '/form-manager';
    const apiUrlFilter = type ? apiUrl + '?type=' + type : apiUrl;

    return this.http.get(apiUrlFilter).pipe(
          finalize(() => {
            console.log('getFormManagerSchema complete.');
          }));  // { type: "1", dec: "I'm type 1", schema: [.....] }
  }

  /**
   * 取得 萬用資料表 設定檔
   */
  getTableManagerSchema(dataType: string): Observable<any> {
    const apiUrl = environment.api + '/table-manager';
    const apiUrlFilter = dataType ? apiUrl + '?dataType=' + dataType : apiUrl;

    return this.http.get(apiUrlFilter).pipe(
      finalize(() => {
        console.log('getTableManagerSchema complete.');
      }));  // { dataType: "data2", schema: [], data2: [] }
  }

  /**
   * 取得 查詢條件資料表 設定檔
   */
  getFilterTableManager(): Observable<any> {
    return this.http.get(environment.api + '/filter-table-manager').pipe(
      finalize(() => {
        console.log('getFilterTableManager complete.');
      })); // { filter-schema: [], table-schema: [], data: []}
  }

  /**
   * 取得 綜合應用 設定檔
   */
  getAllManager(): Observable<any> {
    return this.http.get(environment.api + '/all-manager').pipe(
      finalize(() => {
        console.log('getAllManager complete.');
      })); // { filter-schema: [], table-schema: [], data: []}
  }
}
