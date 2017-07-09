import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-delete-dialog',
  template: `
    <h2 md-dialog-title>Delete Confirmation</h2>
    <md-dialog-content>
      Do you want to delete this record?
    </md-dialog-content>

    <md-dialog-actions>
      <button md-raised-button (click)="dialogRef.close('cancel')">No</button>&nbsp;
      <button md-raised-button (click)="dialogRef.close('delete')">Yes</button>
    </md-dialog-actions>
  `
})
export class ConfirmDeleteDialogComponent {
  constructor(public dialogRef: MdDialogRef<ConfirmDeleteDialogComponent>) {}
}
