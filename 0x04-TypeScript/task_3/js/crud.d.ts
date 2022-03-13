// Ambient file containing type declarations of each crud function
// Meaning declaring types to crud.js functions instead of modifying crud.js
// Lets compiler know that actual functions are defined in different file
import { RowID, RowElement } from './interface';

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
