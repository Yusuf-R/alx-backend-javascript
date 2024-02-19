import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId: RowID) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId: RowID, row: RowElement): RowID {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
