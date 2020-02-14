export interface TestDataElement1 {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  _HideSticky: StickyType;
}

// /** 欄位物件 */
// export interface StickyColumn {
//   colName: string;
//   type: number;
// }

/** 欄位凍結類型 */
export enum StickyType {
  /** Table 無凍結欄位 */
  none,
  /** Table 任意欄位凍結 */
  sticky,
  /** Table 結尾欄位凍結 */
  stickyEnd
}
