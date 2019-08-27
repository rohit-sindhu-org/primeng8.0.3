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
var DataTableFilterDemo = (function () {
    function DataTableFilterDemo(carService) {
        this.carService = carService;
        this.cars = [];
        this.filters = {};
    }
    DataTableFilterDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.filters["brand"] = { value: "HCL", matchMode: "equals" };
        var count = 4;
        this.carService.getCarsMedium().then(function (cars) {
            _this.cars = cars;
            for (var i = 0; i < count; i++) {
                cars.forEach(function (c) {
                    _this.cars.push(c);
                });
            }
        });
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
        this.colors = [];
        this.colors.push({ label: 'White', value: 'White' });
        this.colors.push({ label: 'Green', value: 'Green' });
        this.colors.push({ label: 'Silver', value: 'Silver' });
        this.colors.push({ label: 'Black', value: 'Black' });
        this.colors.push({ label: 'Red', value: 'Red' });
        this.colors.push({ label: 'Maroon', value: 'Maroon' });
        this.colors.push({ label: 'Brown', value: 'Brown' });
        this.colors.push({ label: 'Orange', value: 'Orange' });
        this.colors.push({ label: 'Blue', value: 'Blue' });
    };
    return DataTableFilterDemo;
}());
DataTableFilterDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/datatable/datatablefilterdemo.html'
    }),
    __metadata("design:paramtypes", [carservice_1.CarService])
], DataTableFilterDemo);
exports.DataTableFilterDemo = DataTableFilterDemo;
//# sourceMappingURL=datatablefilterdemo.js.map