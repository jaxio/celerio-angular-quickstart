import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-confirm-delete-dialog',
  template: `
    <h2 mat-dialog-title>Delete Confirmation</h2>
    <mat-dialog-content>
      Do you want to delete this record?
    </mat-dialog-content>

    <mat-dialog-actions>
      <button mat-raised-button (click)="dialogRef.close('cancel')">No</button>&nbsp;
      <button mat-raised-button (click)="dialogRef.close('delete')">Yes</button>
    </mat-dialog-actions>
  `
})
export class ConfirmDeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
}
