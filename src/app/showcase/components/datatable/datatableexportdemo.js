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
var DataTableExportDemo = (function () {
    function DataTableExportDemo(carService) {
        this.carService = carService;
        this.cc = [];
    }
    DataTableExportDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) {
            _this.cars = cars;
            // for(let i=0;i<=10;i++){
            //       this.cars.push(this.cars[0]);
            //
            // }
        });
        //   this.carService.getTestLarge().then(c => {
        //     this.cc=c;
        //   //   let res=c;
        //   //   for(let i=0;i<=10000;i++){
        //   //   this.cc.push(c[0]);
        //   // }
        // });
    };
    return DataTableExportDemo;
}());
DataTableExportDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/datatable/datatableexportdemo.html'
    }),
    __metadata("design:paramtypes", [carservice_1.CarService])
], DataTableExportDemo);
exports.DataTableExportDemo = DataTableExportDemo;
//# sourceMappingURL=datatableexportdemo.js.map