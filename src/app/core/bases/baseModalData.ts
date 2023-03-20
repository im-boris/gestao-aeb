import { MatDialogConfig } from "@angular/material/dialog";

export abstract class BaseModalData extends MatDialogConfig {

    override data: object = {};
    override panelClass: string = 'modal-style';

    constructor() {
        super();
    }
}
