"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var datatabledemo_1 = require("./datatabledemo");
var datatablecmdemo_1 = require("./datatablecmdemo");
var datatablecolreorderdemo_1 = require("./datatablecolreorderdemo");
var datatablecolresizedemo_1 = require("./datatablecolresizedemo");
var datatablecoltogglerdemo_1 = require("./datatablecoltogglerdemo");
var datatablecruddemo_1 = require("./datatablecruddemo");
var datatableeditabledemo_1 = require("./datatableeditabledemo");
var datatableexportdemo_1 = require("./datatableexportdemo");
var datatablefacetsdemo_1 = require("./datatablefacetsdemo");
var datatablefilterdemo_1 = require("./datatablefilterdemo");
var datatablecolgroupdemo_1 = require("./datatablecolgroupdemo");
var datatablerowgroupdemo_1 = require("./datatablerowgroupdemo");
var datatablelazydemo_1 = require("./datatablelazydemo");
var datatablepaginatordemo_1 = require("./datatablepaginatordemo");
var datatableresponsivedemo_1 = require("./datatableresponsivedemo");
var datatablerowexpansiondemo_1 = require("./datatablerowexpansiondemo");
var datatablescrolldemo_1 = require("./datatablescrolldemo");
var datatableselectiondemo_1 = require("./datatableselectiondemo");
var datatablesortdemo_1 = require("./datatablesortdemo");
var datatabletemplatingdemo_1 = require("./datatabletemplatingdemo");
var DatatableDemoRoutingModule = (function () {
    function DatatableDemoRoutingModule() {
    }
    return DatatableDemoRoutingModule;
}());
DatatableDemoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: '', component: datatabledemo_1.DataTableDemo },
                { path: 'facets', component: datatablefacetsdemo_1.DataTableFacetsDemo },
                { path: 'paginator', component: datatablepaginatordemo_1.DataTablePaginatorDemo },
                { path: 'sort', component: datatablesortdemo_1.DataTableSortDemo },
                { path: 'responsive', component: datatableresponsivedemo_1.DataTableResponsiveDemo },
                { path: 'selection', component: datatableselectiondemo_1.DataTableSelectionDemo },
                { path: 'filter', component: datatablefilterdemo_1.DataTableFilterDemo },
                { path: 'editable', component: datatableeditabledemo_1.DataTableEditableDemo },
                { path: 'colresize', component: datatablecolresizedemo_1.DataTableColResizeDemo },
                { path: 'colreorder', component: datatablecolreorderdemo_1.DataTableColReorderDemo },
                { path: 'scroll', component: datatablescrolldemo_1.DataTableScrollDemo },
                { path: 'colgroup', component: datatablecolgroupdemo_1.DataTableColGroupDemo },
                { path: 'rowgroup', component: datatablerowgroupdemo_1.DataTableRowGroupDemo },
                { path: 'lazy', component: datatablelazydemo_1.DataTableLazyDemo },
                { path: 'crud', component: datatablecruddemo_1.DataTableCrudDemo },
                { path: 'templating', component: datatabletemplatingdemo_1.DataTableTemplatingDemo },
                { path: 'contextmenu', component: datatablecmdemo_1.DataTableCMDemo },
                { path: 'coltoggler', component: datatablecoltogglerdemo_1.DataTableColTogglerDemo },
                { path: 'rowexpansion', component: datatablerowexpansiondemo_1.DataTableRowExpansionDemo },
                { path: 'export', component: datatableexportdemo_1.DataTableExportDemo }
            ])
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], DatatableDemoRoutingModule);
exports.DatatableDemoRoutingModule = DatatableDemoRoutingModule;
//# sourceMappingURL=datatabledemo-routing.module.js.map