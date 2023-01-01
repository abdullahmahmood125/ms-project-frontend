import { Component, OnInit } from '@angular/core';
import { SCBase } from '../../sc.base';


@Component({
    selector: 'app-list-task',
    templateUrl: './list-task.component.html',
    styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent extends SCBase implements OnInit {

    dataRows: any[] = [];
    routerLink: string = '/sc/task/add-task/';
    constructor() {
        super();
    }

    ngOnInit(): void {
        this.setPageTitle('Tasks');
        this.getAll();
        console.log("dataRows: " + this.dataRows);

    }

    getAll() {
        this.scService.findAllTasks().subscribe((response: any) => {
            this.dataRows = response;
            console.log("response: " + response);
        });
    }

    deleteById(id: number) {
        this.confirmationDialogService.confirm(this.getLabel('alert'),
            this.getLabel('delete_warning'),
            this.helperService.BUTTON_TEXT.DELETE,
            this.helperService.BUTTON_TEXT.NO,
            this.helperService.BUTTON_CLASS.DANGER
        ).then((confirmed) => {
            if (confirmed) {
                this.scService.disableKycBankById(id).subscribe((response: any) => {
                    this.getAll();
                    this.mapResponse(true, 'Deleted Successfully');
                }, err => {
                    this.mapResponse(false);
                });
            }
        });
    }

}
