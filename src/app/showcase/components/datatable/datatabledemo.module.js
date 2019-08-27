"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
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
var datatablesubmenu_1 = require("./datatablesubmenu");
var datatabledemo_routing_module_1 = require("./datatabledemo-routing.module");
var datatable_1 = require("../../../components/datatable/datatable");
var button_1 = require("../../../components/button/button");
var dropdown_1 = require("../../../components/dropdown/dropdown");
var calendar_1 = require("../../../components/calendar/calendar");
var inputtext_1 = require("../../../components/inputtext/inputtext");
var contextmenu_1 = require("../../../components/contextmenu/contextmenu");
var dialog_1 = require("../../../components/dialog/dialog");
var slider_1 = require("../../../components/slider/slider");
var multiselect_1 = require("../../../components/multiselect/multiselect");
var growl_1 = require("../../../components/growl/growl");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var inputswitch_1 = require("../../../components/inputswitch/inputswitch");
var DataTableDemoModule = (function () {
    function DataTableDemoModule() {
    }
    return DataTableDemoModule;
}());
DataTableDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            datatabledemo_routing_module_1.DatatableDemoRoutingModule,
            datatable_1.DataTableModule,
            calendar_1.CalendarModule,
            button_1.ButtonModule,
            inputtext_1.InputTextModule,
            contextmenu_1.ContextMenuModule,
            dropdown_1.DropdownModule,
            dialog_1.DialogModule,
            multiselect_1.MultiSelectModule,
            slider_1.SliderModule,
            growl_1.GrowlModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule,
            inputswitch_1.InputSwitchModule
        ],
        declarations: [
            datatabledemo_1.DataTableDemo,
            datatablecmdemo_1.DataTableCMDemo,
            datatablecolreorderdemo_1.DataTableColReorderDemo,
            datatablecolresizedemo_1.DataTableColResizeDemo,
            datatablecoltogglerdemo_1.DataTableColTogglerDemo,
            datatablecruddemo_1.DataTableCrudDemo,
            datatableeditabledemo_1.DataTableEditableDemo,
            datatableexportdemo_1.DataTableExportDemo,
            datatablefacetsdemo_1.DataTableFacetsDemo,
            datatablefilterdemo_1.DataTableFilterDemo,
            datatablecolgroupdemo_1.DataTableColGroupDemo,
            datatablerowgroupdemo_1.DataTableRowGroupDemo,
            datatablelazydemo_1.DataTableLazyDemo,
            datatablepaginatordemo_1.DataTablePaginatorDemo,
            datatableresponsivedemo_1.DataTableResponsiveDemo,
            datatablerowexpansiondemo_1.DataTableRowExpansionDemo,
            datatablescrolldemo_1.DataTableScrollDemo,
            datatableselectiondemo_1.DataTableSelectionDemo,
            datatablesortdemo_1.DataTableSortDemo,
            datatabletemplatingdemo_1.DataTableTemplatingDemo,
            datatablesubmenu_1.DataTableSubmenu
        ]
    })
], DataTableDemoModule);
exports.DataTableDemoModule = DataTableDemoModule;
//# sourceMappingURL=datatabledemo.module.js.map