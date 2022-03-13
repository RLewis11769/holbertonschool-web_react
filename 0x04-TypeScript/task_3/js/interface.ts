// Defines interfaces for RowID and RowElement, as used in main.ts and crud.d.ts

export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
