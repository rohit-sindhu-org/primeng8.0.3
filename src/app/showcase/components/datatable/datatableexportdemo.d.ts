import { OnInit } from '@angular/core';
import { CarService } from '../service/carservice';
export declare class DataTableExportDemo implements OnInit {
    private carService;
    cars: any[];
    cc: any[];
    constructor(carService: CarService);
    ngOnInit(): void;
}
