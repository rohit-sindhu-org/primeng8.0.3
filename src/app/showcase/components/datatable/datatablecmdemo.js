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
var DataTableCMDemo = (function () {
    function DataTableCMDemo(carService) {
        this.carService = carService;
    }
    DataTableCMDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewCar(_this.selectedCar); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.deleteCar(_this.selectedCar); } }
        ];
    };
    DataTableCMDemo.prototype.viewCar = function (car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
    };
    DataTableCMDemo.prototype.deleteCar = function (car) {
        var index = -1;
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].vin == car.vin) {
                index = i;
                break;
            }
        }
        this.cars.splice(index, 1);
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand });
    };
    return DataTableCMDemo;
}());
DataTableCMDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/datatable/datatablecmdemo.html'
    }),
    __metadata("design:paramtypes", [carservice_1.CarService])
], DataTableCMDemo);
exports.DataTableCMDemo = DataTableCMDemo;
//# sourceMappingURL=datatablecmdemo.js.map