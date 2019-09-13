import {Component, OnInit} from '@angular/core';
import {SelectItem} from '../../../components/common/api';
import {SelectItemGroup} from '../../../components/common/api';

interface City {
    name: string,
    code: string
}

@Component({
    templateUrl: './dropdowndemo.html',
})
export class DropdownDemo implements OnInit {

    cities: City[];

    selectedCity: City;

    cars: SelectItem[];

    selectedCar1: string;

    selectedCar2: string = 'BMW';
    
    selectedCar3: string;

    groupedCars: SelectItemGroup[];

    items: SelectItem[];
    model:any={item:null};
    item: string ;

    ngOnInit(){
        
    }
    constructor() {
        var p=new Promise<any>((resolve)=>{
            setTimeout(() => {
                let items = [];
                items.push({ label: 'Select', value: null });
                for (let i = 0; i < 10000; i++) {
                    items.push({ label: 'Item ' + i, value: 'Item ' + i });
                }
                resolve(items);
            }, 5000);
        });
        
        p.then(x=>{
            debugger;
            this.items=x;
        });
        
      

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.selectedCity = this.cities[0];
        this.cars = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        this.groupedCars = [
            {
                label: 'Germany', value: 'germany.png', 
                items: [
                    {label: 'Audi', value: 'Audi'},
                    {label: 'BMW', value: 'BMW'},
                    {label: 'Mercedes', value: 'Mercedes'},
                    {label: 'Murcia', value: 'Murcia'}
                ]
            },
            {
                label: 'USA', value: 'usa.png', 
                items: [
                    {label: 'Cadillac', value: 'Cadillac'},
                    {label: 'Ford', value: 'Ford'},
                    {label: 'GMC', value: 'GMC'}
                ]
            },
            {
                label: 'Japan', value: 'japan.png', 
                items: [
                    {label: 'Honda', value: 'Honda'},
                    {label: 'Mazda', value: 'Mazda'},
                    {label: 'Toyota', value: 'Toyota'}
                ]
            }
        ];
    }
}
