import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoaderComponent } from "./loader.component";

@Injectable({ providedIn: 'root' })
export class LoaderService {

    modalComponent: MatDialogRef<any, any> | undefined;
    constructor(private modal: MatDialog) {
    }

    contador = 0;

    show() {
        this.contador += 1;
        if (this.contador == 1) {
            this.modalComponent = this.modal.open(LoaderComponent, {});
        }
    }

    hide() {
        this.contador -= 1;
        if (this.contador <= 0) {
            this.modalComponent?.close();
            this.contador = 0;
        }
    }

}
