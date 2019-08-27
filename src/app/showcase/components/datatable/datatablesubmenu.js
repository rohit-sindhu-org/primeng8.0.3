"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DataTableSubmenu = (function () {
    function DataTableSubmenu() {
    }
    return DataTableSubmenu;
}());
DataTableSubmenu = __decorate([
    core_1.Component({
        selector: 'datatable-demos',
        template: "\n        <div class=\"content-section SubSubMenu ui-helper-clearfix\">\n            <ul>\n                <li><a [routerLink]=\"['/datatable']\">&#9679; Basic</a></li>\n                <li><a [routerLink]=\"['/datatable/facets']\">&#9679; Facets</a></li>\n                <li><a [routerLink]=\"['/datatable/templating']\">&#9679; Templating</a></li>\n                <li><a [routerLink]=\"['/datatable/colgroup']\">&#9679; ColGroup</a></li>\n                <li><a [routerLink]=\"['/datatable/rowgroup']\">&#9679; RowGroup</a></li>\n                <li><a [routerLink]=\"['/datatable/paginator']\">&#9679; Paginator</a></li>\n                <li><a [routerLink]=\"['/datatable/sort']\">&#9679; Sort</a></li>\n                <li><a [routerLink]=\"['/datatable/filter']\">&#9679; Filter</a></li>\n                <li><a [routerLink]=\"['/datatable/selection']\">&#9679; Selection</a></li>\n                <li><a [routerLink]=\"['/datatable/editable']\">&#9679; Editable</a></li>\n                <li><a [routerLink]=\"['/datatable/rowexpansion']\">&#9679; Expand</a></li>\n                <li><a [routerLink]=\"['/datatable/colresize']\">&#9679; Resize</a></li>\n                <li><a [routerLink]=\"['/datatable/colreorder']\">&#9679; Reorder</a></li>\n                <li><a [routerLink]=\"['/datatable/scroll']\">&#9679; Scroll</a></li>\n                <li><a [routerLink]=\"['/datatable/lazy']\">&#9679; Lazy</a></li>\n                <li><a [routerLink]=\"['/datatable/contextmenu']\">&#9679; ContextMenu</a></li>\n                <li><a [routerLink]=\"['/datatable/coltoggler']\">&#9679; ColToggler</a></li>\n                <li><a [routerLink]=\"['/datatable/responsive']\">&#9679; Responsive</a></li>\n                <li><a [routerLink]=\"['/datatable/crud']\">&#9679; Crud</a></li>\n                <li><a [routerLink]=\"['/datatable/export']\">&#9679; Export</a></li>\n            </ul>\n        </div>\n    "
    })
], DataTableSubmenu);
exports.DataTableSubmenu = DataTableSubmenu;
//# sourceMappingURL=datatablesubmenu.js.map