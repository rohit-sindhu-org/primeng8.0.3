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
var DataTableRowGroupDemo = (function () {
    function DataTableRowGroupDemo(carService) {
        this.carService = carService;
    }
    DataTableRowGroupDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars3 = cars; });
    };
    DataTableRowGroupDemo.prototype.calculateGroupTotal = function (brand) {
        var total = 0;
        if (this.cars1) {
            for (var _i = 0, _a = this.cars1; _i < _a.length; _i++) {
                var car = _a[_i];
                if (car.brand === brand) {
                    total += car.price;
                }
            }
        }
        return total;
    };
    return DataTableRowGroupDemo;
}());
DataTableRowGroupDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/datatable/datatablerowgroupdemo.html'
    }),
    __metadata("design:paramtypes", [carservice_1.CarService])
], DataTableRowGroupDemo);
exports.DataTableRowGroupDemo = DataTableRowGroupDemo;
//# sourceMappingURL=datatablerowgroupdemo.js.map