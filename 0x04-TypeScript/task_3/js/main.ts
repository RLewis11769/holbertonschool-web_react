// Note: This includes any dependencies from crud.d.ts file
/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
// insertRow, updateRow, and deleteRow defined in crud.js and typed in crud.d.ts
import * as CRUD from './crud';

// Create row, add random id, and update to include age
const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' }
const newRowID: RowID = CRUD.insertRow(row);

// Update row with new age
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);

// Output logged in console
