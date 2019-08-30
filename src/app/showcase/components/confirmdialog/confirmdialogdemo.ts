import {Component} from '@angular/core';
import {ConfirmationService} from '../../../components/common/api';
import {Message} from '../../../components/common/api';
import { ConfirmationDialogControl } from 'src/app/components/common/confirmation';

@Component({
    templateUrl: './confirmdialogdemo.html',
    styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
    `],
    providers: [ConfirmationService]
})
export class ConfirmDialogDemo {
    
    msgs: Message[] = [];
    
    constructor(private confirmationService: ConfirmationService) {}

    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }
    confirm3() {
        let popupHeaderMessage = 'This asset has a Mobile  09810182190 assigned to it. ';
        let popupFirstOptionMessage = 'Would you like to assign the asset and the mobile number 09810182190 to  Manish Mishra';
        let popupSecondOptionMessage = 'Would you like to assign the asset to Manish Mishra and keep the Mobile number 09810182190 assigned to the existing user Rohit ';

        let controls: ConfirmationDialogControl = {
            multiselect: false, rvalidation: true, msgcss: "test-error", controls: [
                { value: true, text: popupFirstOptionMessage },
                { value: false, text: popupSecondOptionMessage }
            ]
        };
        // let  controls:ConfirmationDialogControl={multiselect:false,controls:[{value:"M",text:"test"},{value:"F",text:"test1"}]};
        this.confirmationService.confirm({
            message: "Please Select the Columns :",
            key:"confirmation-dialog-without-icon",
            control: controls,
            rejectVisible: false,
            accept: (params: any) => {
                alert(params);
                

            },
            reject: () => {
                
            }
        });
    }
    
    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }
}