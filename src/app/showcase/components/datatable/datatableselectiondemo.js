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
var DataTableSelectionDemo = (function () {
    function DataTableSelectionDemo(carService) {
        this.carService = carService;
        this.selecttionMode = '';
    }
    DataTableSelectionDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    DataTableSelectionDemo.prototype.onRowSelect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: event.data.vin + ' - ' + event.data.brand });
    };
    DataTableSelectionDemo.prototype.onRowUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Unselected', detail: event.data.vin + ' - ' + event.data.brand });
    };
    DataTableSelectionDemo.prototype.onSwitch = function () {
        if (this.enableselection) {
            console.log(this.selecttionMode);
            this.selecttionMode = 'Single';
        }
        else {
            console.log(this.selecttionMode);
            this.selecttionMode = '';
        }
    };
    return DataTableSelectionDemo;
}());
DataTableSelectionDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/datatable/datatableselectiondemo.html',
    }),
    __metadata("design:paramtypes", [carservice_1.CarService])
], DataTableSelectionDemo);
exports.DataTableSelectionDemo = DataTableSelectionDemo;
//# sourceMappingURL=datatableselectiondemo.js.map