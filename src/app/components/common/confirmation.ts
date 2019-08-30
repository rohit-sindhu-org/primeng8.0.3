import { EventEmitter } from '@angular/core';


export interface DialogControl {
    value?: any;
    text?: string;
}

export interface ConfirmationDialogControl {
    multiselect?: boolean;
    controls?: DialogControl[];
    rvalidation?: boolean;
    errormsg?: string;
    msgcss?: string;
}

export interface Confirmation {
    message?: string;
    key?: string;
    icon?: string;
    header?: string;
    accept?: Function;
    reject?: Function;
    acceptLabel?: string;
    rejectLabel?: string;
    acceptVisible?: boolean;
    rejectVisible?: boolean;
    blockScroll?: boolean;
    control?: ConfirmationDialogControl;
    acceptEvent?: EventEmitter<any>;
    rejectEvent?: EventEmitter<any>;
}
