import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent {

  readonly dialogRef = inject(MatDialogRef<ConfirmarComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  constructor() { }

  ok() {
    this.dialogRef.close(true);
  }

}
