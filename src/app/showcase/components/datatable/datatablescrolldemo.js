"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var carservice_1 = require("../service/carservice");
var DataTableScrollDemo = (function () {
    function DataTableScrollDemo(carService) {
        this.carService = carService;
    }
    DataTableScrollDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.columnhide = true;
        this.totalRecords = 500000;
    };
    DataTableScrollDemo.prototype.loadCarsLazy = function (event) {
        //for demo purposes keep loading the same dataset
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options
        this.carsLarge = [
            { "brand": "VW", "year": 2012, "color": "Orange -1232131231233213123123123123123123123123", "vin": "dsad231ff ", "details": {
                    "test": 4
                } },
            { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345", "details": {
                    "test": 4
                } },
            { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr", "details": {
                    "test": 4
                } },
            { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh", "details": {
                    "test": 4
                } },
            { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34", "details": {
                    "test": 4
                } },
            { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj", "details": {
                    "test": 4
                } },
            { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr", "details": {
                    "test": 4
                } },
            { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34", "details": {
                    "test": 4
                } },
            { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5", "details": {
                    "test": 4
                } },
            { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s", "details": {
                    "test": 4
                } },
            { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff", "details": {
                    "test": 4
                } },
            { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345", "details": {
                    "test": 4
                } },
            { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr", "details": {
                    "test": 4
                } },
            { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh", "details": {
                    "test": 4
                } },
            { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34", "details": {
                    "test": 4
                } },
            { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj", "details": {
                    "test": 4
                } },
            { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr", "details": {
                    "test": 4
                } },
            { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34", "details": {
                    "test": 4
                } },
            { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5", "details": {
                    "test": 4
                } },
            { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s", "details": {
                    "test": 4
                } },
            { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff", "details": {
                    "test": 4
                } },
            { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345", "details": {
                    "test": 4
                } },
            { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr", "details": {
                    "test": 4
                } },
            { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh", "details": {
                    "test": 4
                } },
            { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34", "details": {
                    "test": 4
                } },
            { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj", "details": {
                    "test": 4
                } },
            { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr", "details": {
                    "test": 4
                } },
            { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34", "details": {
                    "test": 4
                } },
            { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5", "details": {
                    "test": 4
                } },
            { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s", "details": {
                    "test": 4
                } },
            { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff", "details": {
                    "test": 4
                } },
            { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345", "details": {
                    "test": 4
                } },
            { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr", "details": {
                    "test": 4
                } },
            { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh", "details": {
                    "test": 4
                } },
            { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34", "details": {
                    "test": 4
                } },
            { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj", "details": {
                    "test": 4
                } },
            { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr", "details": {
                    "test": 4
                } },
            { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34", "details": {
                    "test": 4
                } },
            { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5", "details": {
                    "test": 4
                } },
            { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s", "details": {
                    "test": 1
                } }
        ];
        this.brands = [];
        this.brands.push({ label: 'All Brands', value: null });
        this.brands.push({ label: 'Audi', value: 'Audi' });
        this.brands.push({ label: 'BMW', value: 'BMW' });
        this.brands.push({ label: 'Fiat', value: 'Fiat' });
        this.brands.push({ label: 'Honda', value: 'Honda' });
        this.brands.push({ label: 'Jaguar', value: 'Jaguar' });
        this.brands.push({ label: 'Mercedes', value: 'Mercedes' });
        this.brands.push({ label: 'Renault', value: 'Renault' });
        this.brands.push({ label: 'VW', value: 'VW' });
        this.brands.push({ label: 'Volvo', value: 'Volvo' });
        this.test = [];
        this.test.push({ label: 'All Test', value: null });
        this.test.push({ label: 'test', value: 4 });
    };
    return DataTableScrollDemo;
}());
DataTableScrollDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/datatable/datatablescrolldemo.html',
    }),
    __metadata("design:paramtypes", [carservice_1.CarService])
], DataTableScrollDemo);
exports.DataTableScrollDemo = DataTableScrollDemo;
//# sourceMappingURL=datatablescrolldemo.js.map