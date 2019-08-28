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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_1 = require("../common/shared");
var paginator_1 = require("../paginator/paginator");
var shared_2 = require("../common/shared");
var domhandler_1 = require("../dom/domhandler");
var ObjectUtils_1 = require("../utils/ObjectUtils");
var globalevent_1 = require("../common/globalevent");
var FileSaver = require("file-saver");
var XLSX = require("xlsx-style");
var DTRadioButton = (function () {
    function DTRadioButton() {
        this.onClick = new core_1.EventEmitter();
    }
    DTRadioButton.prototype.handleClick = function (event) {
        this.onClick.emit(event);
    };
    return DTRadioButton;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DTRadioButton.prototype, "checked", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DTRadioButton.prototype, "onClick", void 0);
DTRadioButton = __decorate([
    core_1.Component({
        selector: 'p-dtRadioButton',
        template: "\n<div class=\"ui-radiobutton ui-widget\">\n<div class=\"ui-helper-hidden-accessible\">\n    <input type=\"radio\" [checked]=\"checked\">\n</div>\n<div class=\"ui-radiobutton-box ui-widget ui-radiobutton-relative ui-state-default\" (click)=\"handleClick($event)\"\n            (mouseenter)=\"hover=true\" (mouseleave)=\"hover=false\"\n            [ngClass]=\"{'ui-state-hover':hover,'ui-state-active':checked}\">\n    <span class=\"ui-radiobutton-icon\" [ngClass]=\"{'fa fa-circle':checked}\"></span>\n</div>\n</div>\n"
    })
], DTRadioButton);
exports.DTRadioButton = DTRadioButton;
var DTCheckbox = (function () {
    function DTCheckbox() {
        this.onChange = new core_1.EventEmitter();
    }
    DTCheckbox.prototype.handleClick = function (event) {
        if (!this.disabled) {
            this.onChange.emit({ originalEvent: event, checked: !this.checked });
        }
    };
    return DTCheckbox;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DTCheckbox.prototype, "checked", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DTCheckbox.prototype, "disabled", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DTCheckbox.prototype, "onChange", void 0);
DTCheckbox = __decorate([
    core_1.Component({
        selector: 'p-dtCheckbox',
        template: "\n<div class=\"ui-chkbox ui-widget\">\n<div class=\"ui-helper-hidden-accessible\">\n    <input type=\"checkbox\" [checked]=\"checked\">\n</div>\n<div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" (click)=\"handleClick($event)\"\n            (mouseover)=\"hover=true\" (mouseout)=\"hover=false\"\n            [ngClass]=\"{'ui-state-hover':hover&&!disabled,'ui-state-active':checked&&!disabled,'ui-state-disabled':disabled}\">\n    <span class=\"ui-chkbox-icon ui-c\" [ngClass]=\"{'fa fa-check':checked}\"></span>\n</div>\n</div>\n"
    })
], DTCheckbox);
exports.DTCheckbox = DTCheckbox;
var RowExpansionLoader = (function () {
    function RowExpansionLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    RowExpansionLoader.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.template, {
            '\$implicit': this.rowData
        });
    };
    return RowExpansionLoader;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], RowExpansionLoader.prototype, "template", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RowExpansionLoader.prototype, "rowData", void 0);
RowExpansionLoader = __decorate([
    core_1.Component({
        selector: 'p-rowExpansionLoader',
        template: ""
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], RowExpansionLoader);
exports.RowExpansionLoader = RowExpansionLoader;
var ColumnHeaders = (function () {
    function ColumnHeaders(dt) {
        this.dt = dt;
    }
    return ColumnHeaders;
}());
__decorate([
    core_1.Input("pColumnHeaders"),
    __metadata("design:type", Array)
], ColumnHeaders.prototype, "columns", void 0);
ColumnHeaders = __decorate([
    core_1.Component({
        selector: '[pColumnHeaders]',
        template: "\n<ng-template ngFor let-col [ngForOf]=\"columns\" let-lastCol=\"last\">\n<th #headerCell [ngStyle]=\"col.style\" [class]=\"col.styleClass\" [style.display]=\"col.hidden ? 'none' : 'table-cell'\" (click)=\"dt.sort($event,col)\" [attr.colspan]=\"col.colspan\" [attr.rowspan]=\"col.rowspan\"\n    [ngClass]=\"{'ui-state-default ui-unselectable-text':true, 'ui-sortable-column': col.sortable, 'ui-state-active': dt.isSorted(col), 'ui-resizable-column': dt.resizableColumns, 'ui-selection-column':col.selectionMode}\"\n    (dragstart)=\"dt.onColumnDragStart($event)\" (dragover)=\"dt.onColumnDragover($event)\" (dragleave)=\"dt.onColumnDragleave($event)\" (drop)=\"dt.onColumnDrop($event)\" (mousedown)=\"dt.onHeaderMousedown($event,headerCell)\"\n    [attr.tabindex]=\"col.sortable ? tabindex : null\" (keydown)=\"dt.onHeaderKeydown($event,col)\">\n    <span class=\"ui-column-resizer\" *ngIf=\"dt.resizableColumns && ((dt.columnResizeMode == 'fit' && !lastCol) || dt.columnResizeMode == 'expand')\" (mousedown)=\"dt.initColumnResize($event)\"></span>\n    <span class=\"ui-column-title\" *ngIf=\"!col.selectionMode&&!col.headerTemplate\">{{col.header}}</span>\n    <span class=\"ui-column-title\" *ngIf=\"col.headerTemplate\">\n        <p-columnHeaderTemplateLoader [column]=\"col\"></p-columnHeaderTemplateLoader>\n    </span>\n    <span class=\"ui-sortable-column-icon fa fa-fw fa-sort\" *ngIf=\"col.sortable\"\n         [ngClass]=\"{'fa-sort-desc': (dt.getSortOrder(col) == -1),'fa-sort-asc': (dt.getSortOrder(col) == 1)}\"></span>\n    <input type=\"text\" class=\"ui-column-filter ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"col.filterPlaceholder\" *ngIf=\"col.filter&&!col.filterTemplate\" [value]=\"dt.filters[col.field] ? dt.filters[col.field].value : ''\"\n        (click)=\"dt.onFilterInputClick($event)\"  (blur)=\"dt.onFilterKeyup($event,$event.target.value, col.field, col.filterMatchMode)\" (keyup)=\"dt.onFilterKeyup($event,$event.target.value, col.field, col.filterMatchMode)\"/>\n    <p-columnFilterTemplateLoader [column]=\"col\" *ngIf=\"col.filterTemplate\"></p-columnFilterTemplateLoader>\n    <p-dtCheckbox *ngIf=\"col.selectionMode=='multiple'\" (onChange)=\"dt.toggleRowsWithCheckbox($event)\" [checked]=\"dt.allSelected\" [disabled]=\"dt.isEmpty()\"></p-dtCheckbox>\n</th>\n</ng-template>\n"
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return DataTable; }))),
    __metadata("design:paramtypes", [DataTable])
], ColumnHeaders);
exports.ColumnHeaders = ColumnHeaders;
var ColumnFooters = (function () {
    function ColumnFooters(dt) {
        this.dt = dt;
    }
    return ColumnFooters;
}());
__decorate([
    core_1.Input("pColumnFooters"),
    __metadata("design:type", Array)
], ColumnFooters.prototype, "columns", void 0);
ColumnFooters = __decorate([
    core_1.Component({
        selector: '[pColumnFooters]',
        template: "\n<td *ngFor=\"let col of columns\" [ngStyle]=\"col.style\" [class]=\"col.styleClass\"\n[attr.colspan]=\"col.colspan\" [attr.rowspan]=\"col.rowspan\"\n[ngClass]=\"{'ui-state-default':true}\" [style.display]=\"col.hidden ? 'none' : 'table-cell'\">\n<span class=\"ui-column-footer\" *ngIf=\"!col.footerTemplate\">{{col.footer}}</span>\n<span class=\"ui-column-footer\" *ngIf=\"col.footerTemplate\">\n    <p-columnFooterTemplateLoader [column]=\"col\"></p-columnFooterTemplateLoader>\n</span>\n</td>\n"
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return DataTable; }))),
    __metadata("design:paramtypes", [DataTable])
], ColumnFooters);
exports.ColumnFooters = ColumnFooters;
var TableBody = (function () {
    function TableBody(dt) {
        this.dt = dt;
    }
    TableBody.prototype.visibleColumns = function () {
        return this.columns ? this.columns.filter(function (c) { return !c.hidden; }) : [];
    };
    return TableBody;
}());
__decorate([
    core_1.Input("pTableBody"),
    __metadata("design:type", Array)
], TableBody.prototype, "columns", void 0);
TableBody = __decorate([
    core_1.Component({
        selector: '[pTableBody]',
        template: "\n<ng-template ngFor let-rowData [ngForOf]=\"dt.dataToRender\" let-even=\"even\" let-odd=\"odd\" let-rowIndex=\"index\">\n<tr #rowGroupElement class=\"ui-widget-header ui-rowgroup-header\"\n    *ngIf=\"dt.rowGroupMode=='subheader' && (rowIndex === 0||(dt.resolveFieldData(rowData,dt.groupField) !== dt.resolveFieldData(dt.dataToRender[rowIndex - 1], dt.groupField)))\"\n    (click)=\"dt.onRowGroupClick($event)\" [ngStyle]=\"{'cursor': dt.sortableRowGroup ? 'pointer' : 'auto'}\">\n    <td [attr.colspan]=\"columns.length\">\n        <a href=\"#\" *ngIf=\"dt.expandableRowGroups\" (click)=\"dt.toggleRowGroup($event,rowData)\">\n            <span class=\"fa fa-fw\" [ngClass]=\"{'fa-chevron-circle-down':dt.isRowGroupExpanded(rowData), 'fa-chevron-circle-right': !dt.isRowGroupExpanded(rowData)}\"></span>\n        </a>\n        <span class=\"ui-rowgroup-header-name\">\n            <p-templateLoader [template]=\"dt.rowGroupHeaderTemplate\" [data]=\"rowData\"></p-templateLoader>\n        </span>\n    </td>\n</tr>\n<tr #rowElement *ngIf=\"!dt.expandableRowGroups||dt.isRowGroupExpanded(rowData)\" [class]=\"dt.getRowStyleClass(rowData,rowIndex)\"\n        (click)=\"dt.handleRowClick($event, rowData)\" (dblclick)=\"dt.rowDblclick($event,rowData)\" (contextmenu)=\"dt.onRowRightClick($event,rowData)\" (touchend)=\"dt.handleRowTouchEnd($event)\"\n        [ngClass]=\"{'ui-datatable-even':even&&dt.rowGroupMode!='rowspan','ui-datatable-odd':odd&&dt.rowGroupMode!='rowspan','ui-state-highlight': dt.isSelected(rowData)}\">\n    <ng-template ngFor let-col [ngForOf]=\"columns\" let-colIndex=\"index\">\n        <td #cell *ngIf=\"!dt.rowGroupMode || (dt.rowGroupMode == 'subheader') ||\n            (dt.rowGroupMode=='rowspan' && ((dt.sortField==col.field && dt.rowGroupMetadata[dt.resolveFieldData(rowData,dt.sortField)].index == rowIndex) || (dt.sortField!=col.field)))\"\n            [ngStyle]=\"col.style\" [class]=\"col.styleClass\" [style.display]=\"col.hidden ? 'none' : 'table-cell'\"\n            [ngClass]=\"{'ui-editable-column':col.editable,'ui-selection-column':col.selectionMode}\" (click)=\"dt.switchCellToEditMode(cell,col,rowData)\"\n            [attr.rowspan]=\"(dt.rowGroupMode=='rowspan' && dt.sortField == col.field && dt.rowGroupMetadata[dt.resolveFieldData(rowData,dt.sortField)].index == rowIndex) ? dt.rowGroupMetadata[dt.resolveFieldData(rowData,dt.sortField)].size : null\">\n            <span class=\"ui-column-title\" *ngIf=\"dt.responsive\">{{col.header}}</span>\n            <span class=\"ui-cell-data\" *ngIf=\"!col.bodyTemplate && !col.expander && !col.selectionMode\">{{dt.resolveFieldData(rowData,col.field)}}</span>\n            <span class=\"ui-cell-data\" *ngIf=\"col.bodyTemplate\">\n                <p-columnBodyTemplateLoader [column]=\"col\" [rowData]=\"rowData\" [rowIndex]=\"rowIndex + dt.first\"></p-columnBodyTemplateLoader>\n            </span>\n            <div class=\"ui-cell-editor\" *ngIf=\"col.editable\">\n                <input *ngIf=\"!col.editorTemplate\" type=\"text\" [(ngModel)]=\"rowData[col.field]\" required=\"true\"\n                    (keydown)=\"dt.onCellEditorKeydown($event, col, rowData, rowIndex)\" class=\"ui-inputtext ui-widget ui-state-default ui-corner-all\"/>\n                <a *ngIf=\"col.editorTemplate\" class=\"ui-cell-editor-proxy-focus\" href=\"#\" (focus)=\"dt.onCustomEditorFocusPrev($event, colIndex)\"></a>\n                <p-columnEditorTemplateLoader *ngIf=\"col.editorTemplate\" [column]=\"col\" [rowData]=\"rowData\" [rowIndex]=\"rowIndex\"></p-columnEditorTemplateLoader>\n                <a *ngIf=\"col.editorTemplate\" class=\"ui-cell-editor-proxy-focus\" href=\"#\" (focus)=\"dt.onCustomEditorFocusNext($event, colIndex)\"></a>\n            </div>\n            <a href=\"#\" *ngIf=\"col.expander\" (click)=\"dt.toggleRow(rowData,$event)\">\n                <span class=\"ui-row-toggler fa fa-fw ui-c\" [ngClass]=\"{'fa-chevron-circle-down':dt.isRowExpanded(rowData), 'fa-chevron-circle-right': !dt.isRowExpanded(rowData)}\"></span>\n            </a>\n            <p-dtRadioButton *ngIf=\"col.selectionMode=='single'\" (onClick)=\"dt.selectRowWithRadio($event, rowData)\" [checked]=\"dt.isSelected(rowData)\"></p-dtRadioButton>\n            <p-dtCheckbox *ngIf=\"col.selectionMode=='multiple'\" (onChange)=\"dt.toggleRowWithCheckbox($event,rowData)\" [checked]=\"dt.isSelected(rowData)\"></p-dtCheckbox>\n        </td>\n    </ng-template>\n</tr>\n<tr class=\"ui-widget-header\" *ngIf=\"dt.rowGroupFooterTemplate && dt.rowGroupMode=='subheader' && ((rowIndex === dt.dataToRender.length - 1)||(dt.resolveFieldData(rowData,dt.groupField) !== dt.resolveFieldData(dt.dataToRender[rowIndex + 1],dt.groupField))) && (!dt.expandableRowGroups || dt.isRowGroupExpanded(rowData))\">\n    <p-templateLoader class=\"ui-helper-hidden\" [data]=\"rowData\" [template]=\"dt.rowGroupFooterTemplate\"></p-templateLoader>\n</tr>\n<tr *ngIf=\"dt.expandableRows && dt.isRowExpanded(rowData)\">\n    <td [attr.colspan]=\"dt.visibleColumns().length\">\n        <p-rowExpansionLoader [rowData]=\"rowData\" [template]=\"dt.rowExpansionTemplate\"></p-rowExpansionLoader>\n    </td>\n</tr>\n</ng-template>\n\n<tr *ngIf=\"dt.isEmpty()\" class=\"ui-widget-content\">\n<td [attr.colspan]=\"dt.visibleColumns().length\" class=\"ui-datatable-emptymessage\">{{dt.emptyMessage}}</td>\n</tr>\n"
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return DataTable; }))),
    __metadata("design:paramtypes", [DataTable])
], TableBody);
exports.TableBody = TableBody;
var ScrollableView = (function () {
    function ScrollableView(dt, domHandler, el, renderer) {
        this.dt = dt;
        this.domHandler = domHandler;
        this.el = el;
        this.renderer = renderer;
        this.onVirtualScroll = new core_1.EventEmitter();
    }
    ScrollableView.prototype.ngAfterViewInit = function () {
        this.initScrolling();
    };
    ScrollableView.prototype.initpcolumnHeader = function (columns) {
        if (!this.frozen) {
            columns = columns.filter(function (f) { return !f.frozen; });
        }
        else {
            columns = columns.filter(function (f) { return f.frozen; });
        }
        return columns;
    };
    ScrollableView.prototype.ngAfterViewChecked = function () {
        if (this.virtualScroll && !this.rowHeight) {
            var row = this.domHandler.findSingle(this.scrollTable, 'tr.ui-widget-content');
            if (row) {
                this.rowHeight = this.domHandler.getOuterHeight(row);
            }
        }
    };
    ScrollableView.prototype.initScrolling = function () {
        var _this = this;
        this.scrollHeader = this.scrollHeaderViewChild.nativeElement;
        this.scrollHeaderBox = this.scrollHeaderBoxViewChild.nativeElement;
        this.scrollBody = this.scrollBodyViewChild.nativeElement;
        this.scrollTable = this.scrollTableViewChild.nativeElement;
        this.scrollTableWrapper = this.scrollTableWrapperViewChild.nativeElement;
        this.scrollFooter = this.scrollFooterViewChild ? this.scrollFooterViewChild.nativeElement : null;
        this.scrollFooterBox = this.scrollFooterBoxViewChild ? this.scrollFooterBoxViewChild.nativeElement : null;
        if (!this.frozen) {
            var frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
                var frozenScrollBody = this.domHandler.findSingle(frozenView, '.ui-datatable-scrollable-body');
            }
            this.bodyScrollListener = this.renderer.listen(this.scrollBody, 'scroll', function (event) {
                globalevent_1.GlobalEventsManager.onDatatableScrollEvent.emit(true);
                // var dropdownFilterContainer=document.getElementsByClassName('ui-dropdown-panel');
                //
                // for(let i=0;i<dropdownFilterContainer.length;i++){
                //   dropdownFilterContainer[i].style.display='none';
                // }
                _this.scrollHeaderBox.style.marginLeft = -1 * _this.scrollBody.scrollLeft + 'px';
                if (_this.scrollFooterBox) {
                    _this.scrollFooterBox.style.marginLeft = -1 * _this.scrollBody.scrollLeft + 'px';
                }
                if (frozenScrollBody) {
                    frozenScrollBody.scrollTop = _this.scrollBody.scrollTop;
                }
                if (_this.virtualScroll) {
                    clearTimeout(_this.scrollTimeout);
                    _this.scrollTimeout = setTimeout(function () {
                        var viewport = _this.domHandler.getOuterHeight(_this.scrollBody);
                        var tableHeight = _this.domHandler.getOuterHeight(_this.scrollTable);
                        var pageHeight = _this.rowHeight * _this.dt.rows;
                        var virtualTableHeight = parseFloat(_this.virtualTableHeight);
                        var pageCount = (virtualTableHeight / pageHeight) || 1;
                        if (_this.scrollBody.scrollTop + viewport > parseFloat(_this.scrollTable.style.top) + tableHeight || _this.scrollBody.scrollTop < parseFloat(_this.scrollTable.style.top)) {
                            var page = Math.floor((_this.scrollBody.scrollTop * pageCount) / (_this.scrollBody.scrollHeight)) + 1;
                            _this.onVirtualScroll.emit({
                                page: page
                            });
                            _this.scrollTable.style.top = ((page - 1) * pageHeight) + 'px';
                        }
                    }, 200);
                }
            });
            //to trigger change detection
            this.scrollBodyMouseWheelListener = this.renderer.listen(this.scrollBody, 'mousewheel', function (event) { });
            this.headerScrollListener = this.renderer.listen(this.scrollHeader, 'scroll', function () {
                _this.scrollHeader.scrollLeft = 0;
            });
        }
        var scrollBarWidth = this.domHandler.calculateScrollbarWidth();
        if (!this.frozen) {
            this.scrollHeaderBox.style.marginRight = scrollBarWidth + 'px';
            if (this.scrollFooterBox) {
                this.scrollFooterBox.style.marginRight = scrollBarWidth + 'px';
            }
        }
        else {
            this.scrollBody.style.paddingBottom = scrollBarWidth + 'px';
        }
    };
    Object.defineProperty(ScrollableView.prototype, "virtualTableHeight", {
        get: function () {
            var totalRecords = this.dt.lazy ? this.dt.totalRecords : (this.dt.value ? this.dt.value.length : 0);
            return (totalRecords * this.rowHeight) + 'px';
        },
        enumerable: true,
        configurable: true
    });
    ScrollableView.prototype.ngOnDestroy = function () {
        if (this.bodyScrollListener) {
            this.bodyScrollListener();
        }
        if (this.scrollBodyMouseWheelListener) {
            this.scrollBodyMouseWheelListener();
        }
        if (this.headerScrollListener) {
            this.headerScrollListener();
        }
    };
    return ScrollableView;
}());
__decorate([
    core_1.Input("pScrollableView"),
    __metadata("design:type", Array)
], ScrollableView.prototype, "columns", void 0);
__decorate([
    core_1.ViewChild('scrollHeader'),
    __metadata("design:type", core_1.ElementRef)
], ScrollableView.prototype, "scrollHeaderViewChild", void 0);
__decorate([
    core_1.ViewChild('scrollHeaderBox'),
    __metadata("design:type", core_1.ElementRef)
], ScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);
__decorate([
    core_1.ViewChild('scrollBody'),
    __metadata("design:type", core_1.ElementRef)
], ScrollableView.prototype, "scrollBodyViewChild", void 0);
__decorate([
    core_1.ViewChild('scrollTable'),
    __metadata("design:type", core_1.ElementRef)
], ScrollableView.prototype, "scrollTableViewChild", void 0);
__decorate([
    core_1.ViewChild('scrollTableWrapper'),
    __metadata("design:type", core_1.ElementRef)
], ScrollableView.prototype, "scrollTableWrapperViewChild", void 0);
__decorate([
    core_1.ViewChild('scrollFooter'),
    __metadata("design:type", core_1.ElementRef)
], ScrollableView.prototype, "scrollFooterViewChild", void 0);
__decorate([
    core_1.ViewChild('scrollFooterBox'),
    __metadata("design:type", core_1.ElementRef)
], ScrollableView.prototype, "scrollFooterBoxViewChild", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ScrollableView.prototype, "frozen", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ScrollableView.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ScrollableView.prototype, "virtualScroll", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ScrollableView.prototype, "onVirtualScroll", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ScrollableView.prototype, "loading", void 0);
ScrollableView = __decorate([
    core_1.Component({
        selector: '[pScrollableView]',
        template: "\n<div #scrollHeader class=\"ui-widget-header ui-datatable-scrollable-header\" [ngStyle]=\"{'width': width}\" >\n<div #scrollHeaderBox  class=\"ui-datatable-scrollable-header-box\">\n    <table [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n        <thead class=\"ui-datatable-thead\">\n            <tr *ngIf=\"!dt.headerColumnGroup\" class=\"ui-state-default\" [pColumnHeaders]=\"columns\"></tr>\n            <ng-template [ngIf]=\"dt.headerColumnGroup\">\n                <tr *ngFor=\"let headerRow of dt.headerColumnGroup.rows\" class=\"ui-state-default\" [pColumnHeaders]=\"initpcolumnHeader(headerRow.columns)\"></tr>\n            </ng-template>\n        </thead>\n    </table>\n</div>\n</div>\n<div #scrollBody class=\"ui-datatable-scrollable-body\" [ngStyle]=\"{'width': width,'max-height':dt.scrollHeight}\">\n<div #scrollTableWrapper style=\"position:relative\" [ngStyle]=\"{'height':virtualTableHeight}\">\n    <table #scrollTable [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\" [ngClass]=\"{'ui-datatable-virtual-table':virtualScroll}\" style=\"top:0px\">\n    <!--<colgroup class=\"ui-datatable-scrollable-colgroup\">\n         <col *ngFor=\"let col of dt.visibleColumns()\" />\n    </colgroup>-->\n        <tbody [ngClass]=\"{'ui-datatable-data ui-widget-content': true, 'ui-datatable-hoverable-rows': (dt.rowHover||dt.selectionMode)}\" [pTableBody]=\"columns\"></tbody>\n    </table>\n</div>\n</div>\n<div #scrollFooter class=\"ui-widget-header ui-datatable-scrollable-footer\" [ngStyle]=\"{'width': width}\" *ngIf=\"dt.hasFooter()\">\n<div #scrollFooterBox  class=\"ui-datatable-scrollable-footer-box\">\n    <table [class]=\"dt.tableStyleClass\" [ngStyle]=\"dt.tableStyle\">\n        <tfoot class=\"ui-datatable-tfoot\">\n            <tr *ngIf=\"!footerColumnGroup\" [pColumnFooters]=\"columns\" class=\"ui-state-default\"></tr>\n            <ng-template [ngIf]=\"footerColumnGroup\">\n                <tr *ngFor=\"let footerRow of footerColumnGroup.rows\" [pColumnFooters]=\"footerRow.columns\"></tr>\n            </ng-template>\n        </tfoot>\n    </table>\n</div>\n</div>\n"
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return DataTable; }))),
    __metadata("design:paramtypes", [DataTable, domhandler_1.DomHandler, core_1.ElementRef, core_1.Renderer])
], ScrollableView);
exports.ScrollableView = ScrollableView;
var DataTable = (function () {
    // public emptyMessageAlignmentTimeout:any;
    function DataTable(el, domHandler, differs, renderer, changeDetector, objectUtils, ngZone) {
        var _this = this;
        this.el = el;
        this.domHandler = domHandler;
        this.differs = differs;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this.objectUtils = objectUtils;
        this.ngZone = ngZone;
        this.pageLinks = 5;
        this.selectionChange = new core_1.EventEmitter();
        this.onRowClick = new core_1.EventEmitter();
        this.onRowSelect = new core_1.EventEmitter();
        this.onRowUnselect = new core_1.EventEmitter();
        this.onRowDblclick = new core_1.EventEmitter();
        this.onHeaderCheckboxToggle = new core_1.EventEmitter();
        this.onContextMenuSelect = new core_1.EventEmitter();
        this.filterDelay = 300;
        this.onLazyLoad = new core_1.EventEmitter();
        this.columnResizeMode = 'fit';
        this.onColResize = new core_1.EventEmitter();
        this.onColReorder = new core_1.EventEmitter();
        this.sortMode = 'single';
        this.sortOrder = -1;
        this.csvSeparator = ',';
        this.exportFilename = 'download';
        this.emptyMessage = 'No records found';
        this.paginatorPosition = 'bottom';
        this.metaKeySelection = true;
        this.onEditInit = new core_1.EventEmitter();
        this.onEditComplete = new core_1.EventEmitter();
        this.onEdit = new core_1.EventEmitter();
        this.onEditCancel = new core_1.EventEmitter();
        this.onPage = new core_1.EventEmitter();
        this.onSort = new core_1.EventEmitter();
        this.onFilter = new core_1.EventEmitter();
        this.rowExpandMode = 'multiple';
        this.tabindex = 1;
        this.sortableRowGroup = true;
        this.first = 0;
        this.filters = {};
        this.onRowExpand = new core_1.EventEmitter();
        this.onRowCollapse = new core_1.EventEmitter();
        this.onRowGroupExpand = new core_1.EventEmitter();
        this.onRowGroupCollapse = new core_1.EventEmitter();
        this.page = 0;
        this.columnsChanged = false;
        this.dataChanged = false;
        this.calculateRowHeight = true;
        this.filterConstraints = {
            startsWith: function (value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                var filterValue = filter.toLowerCase();
                return value.toString().toLowerCase().slice(0, filterValue.length) === filterValue;
            },
            contains: function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            },
            endsWith: function (value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                var filterValue = filter.toString().toLowerCase();
                return value.toString().toLowerCase().indexOf(filterValue, value.toString().length - filterValue.length) !== -1;
            },
            equals: function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase() == filter.toString().toLowerCase();
            },
            in: function (value, filter) {
                if (filter === undefined || filter === null || filter.length === 0) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                for (var i = 0; i < filter.length; i++) {
                    if (filter[i] === value)
                        return true;
                }
                return false;
            }
        };
        window.onresize = function (e) {
            ngZone.run(function () {
                _this.calculateUnforzenWidth();
            });
        };
    }
    DataTable.prototype.ngOnInit = function () {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        if (!this.immutable) {
            this.differ = this.differs.find([]).create(null);
        }
        this.calculateUnforzenWidth();
    };
    DataTable.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.initColumns();
        this.columnsSubscription = this.cols.changes.subscribe(function (_) {
            _this.initColumns();
            _this.changeDetector.markForCheck();
        });
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'rowexpansion':
                    _this.rowExpansionTemplate = item.template;
                    break;
                case 'rowgroupheader':
                    _this.rowGroupHeaderTemplate = item.template;
                    break;
                case 'rowgroupfooter':
                    _this.rowGroupFooterTemplate = item.template;
                    break;
            }
        });
    };
    DataTable.prototype.ngAfterViewChecked = function () {
        if (this.columnsChanged && this.el.nativeElement.offsetParent) {
            if (this.resizableColumns) {
                this.initResizableColumns();
            }
            if (this.reorderableColumns) {
                this.initColumnReordering();
            }
            this.columnsChanged = false;
        }
        if (this.dataChanged) {
            this.dataChanged = false;
        }
        if (this.calculateRowHeight && this.dataToRender && this.dataToRender.length > 0) {
            //resize row height based on unfrozen columns
            this.initFrozenRows();
        }
        this.scrollableBodytableAlignment();
    };
    DataTable.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.globalFilter) {
            this.globalFilterFunction = this.renderer.listen(this.globalFilter, 'keyup', function () {
                _this.filterTimeout = setTimeout(function () {
                    _this._filter();
                    _this.filterTimeout = null;
                }, _this.filterDelay);
            });
        }
        if (this.editable) {
            this.documentClickListener = this.renderer.listenGlobal('body', 'click', function (event) {
                if (!_this.editorClick) {
                    _this.closeCell();
                }
                _this.editorClick = false;
            });
        }
    };
    DataTable.prototype.ngDoCheck = function () {
        if (!this.immutable) {
            var changes = this.differ.diff(this.value);
            if (changes) {
                this.handleDataChange();
            }
        }
    };
    Object.defineProperty(DataTable.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.handleDataChange();
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype.initFrozenRows = function () {
        if (this.unfrozenWidth) {
            //getting scroll height
            // let rowcount=this.rows;
            // let renderedRowCount=document.querySelectorAll('.ui-datatable-unfrozen-view .ui-datatable-scrollable-body table tr').length;
            // if(rowcount==renderedRowCount){
            this.calculateRowHeight = false;
            // }
            var unfrozenRows = document.querySelectorAll('.ui-datatable-unfrozen-view .ui-datatable-scrollable-body table tr');
            var frozenRows = document.querySelectorAll('.ui-datatable-frozen-view .ui-datatable-scrollable-body table tr');
            //reset rows height to there actuals
            for (var i = 0; i < unfrozenRows.length; i++) {
                var frozenRowsHeight = frozenRows[i]['style']['height'] = 'auto';
                var unfrozenRowHeight = unfrozenRows[i]['style']['height'] = 'auto';
            }
            for (var i = 0; i < unfrozenRows.length; i++) {
                var frozenRowsHeight = frozenRows[i]['offsetHeight'];
                var unfrozenRowHeight = unfrozenRows[i]['offsetHeight'];
                if (frozenRowsHeight > unfrozenRowHeight) {
                    unfrozenRows[i]['style']['height'] = frozenRowsHeight + 'px';
                }
                else {
                    frozenRows[i]['style']['height'] = unfrozenRowHeight + 'px';
                }
            }
            if (this.headerColumnGroup) {
                var frozenHeaderRows = document.querySelectorAll('.ui-datatable-frozen-view .ui-datatable-thead .ui-column-title')[0].parentElement;
                var unfrozenHeaderRows = document.querySelectorAll('.ui-datatable-unfrozen-view .ui-datatable-thead')[0];
                frozenHeaderRows['style']['height'] = unfrozenHeaderRows['offsetHeight'] + 'px';
            }
            //set scroll position to original -- work around for firfox
            //when we set rows height scroll bar position get lost in case of firfox
            if (this.currentscrollY) {
                window.scrollTo(0, this.currentscrollY);
            }
        }
    };
    DataTable.prototype.handleDataChange = function () {
        var _this = this;
        this.dataChanged = true;
        if (this.paginator) {
            this.updatePaginator();
        }
        if (this.hasFilter()) {
            if (this.lazy) {
                //prevent loop
                if (this.stopFilterPropagation)
                    this.stopFilterPropagation = false;
                else
                    this._filter();
            }
            else {
                this._filter();
            }
        }
        if (this.stopSortPropagation) {
            this.stopSortPropagation = false;
        }
        else if (!this.lazy && (this.sortField || this.multiSortMeta)) {
            if (!this.sortColumn && this.columns) {
                this.sortColumn = this.columns.find(function (col) { return col.field === _this.sortField && col.sortable === 'custom'; });
            }
            if (this.sortMode == 'single')
                this.sortSingle();
            else if (this.sortMode == 'multiple')
                this.sortMultiple();
        }
        this.updateDataToRender(this.filteredValue || this.value);
    };
    DataTable.prototype.initColumns = function () {
        var _this = this;
        this.columns = this.cols.toArray();
        if (this.scrollable) {
            this.scrollableColumns = [];
            this.cols.forEach(function (col) {
                if (col.frozen) {
                    _this.frozenColumns = _this.frozenColumns || [];
                    _this.frozenColumns.push(col);
                }
                else {
                    _this.scrollableColumns.push(col);
                }
            });
            //Rohit Sindhu Customization for Global Filter on scrollable grid
            if (this.hasFilter()) {
                this._filter();
            }
        }
        this.columnsChanged = true;
    };
    DataTable.prototype.resolveFieldData = function (data, field) {
        if (data && field) {
            if (field.indexOf('.') == -1) {
                if (data[field] == null) {
                    return ' ';
                }
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return ' ';
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return ' ';
        }
    };
    DataTable.prototype.updateRowGroupMetadata = function () {
        this.rowGroupMetadata = {};
        if (this.dataToRender) {
            for (var i = 0; i < this.dataToRender.length; i++) {
                var rowData = this.dataToRender[i];
                var group = this.resolveFieldData(rowData, this.sortField);
                if (i == 0) {
                    this.rowGroupMetadata[group] = { index: 0, size: 1 };
                }
                else {
                    var previousRowData = this.dataToRender[i - 1];
                    var previousRowGroup = this.resolveFieldData(previousRowData, this.sortField);
                    if (group === previousRowGroup) {
                        this.rowGroupMetadata[group].size++;
                    }
                    else {
                        this.rowGroupMetadata[group] = { index: i, size: 1 };
                    }
                }
            }
        }
    };
    DataTable.prototype.updatePaginator = function () {
        //total records
        this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length : 0);
        //first
        if (this.totalRecords && this.first >= this.totalRecords) {
            var numberOfPages = Math.ceil(this.totalRecords / this.rows);
            this.first = Math.max((numberOfPages - 1) * this.rows, 0);
        }
    };
    DataTable.prototype.paginate = function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.stopFilterPropagation = true;
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.updateDataToRender(this.filteredValue || this.value);
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
    };
    DataTable.prototype.scrollableBodytableAlignment = function () {
        var unfrozenclass = "";
        var frozenWidth = 0;
        if (this.unfrozenWidth && this.frozenWidth && parseInt(this.frozenWidth) > 0) {
            unfrozenclass = ".ui-datatable-unfrozen-view";
            if (document.querySelectorAll('.ui-datatable-unfrozen-view table tr th.col-group-header')[0])
                frozenWidth = parseInt(this.frozenWidth) - (parseInt(this.frozenWidth) - 150);
        }
        if (this.isEmpty() || (!this.rowGroupScrollableWidthFix && this.rowGroupMode)) {
            var ele = this.el.nativeElement.querySelectorAll(unfrozenclass + ' .ui-datatable-scrollable-header-box > table');
            if (ele.length > 0) {
                if (this.datatableHeaderWidth != ele[0].clientWidth) {
                    this.datatableHeaderWidth = ele[0].clientWidth;
                    var emptyContentWidth = this.el.nativeElement.querySelectorAll(unfrozenclass + " .ui-datatable-scrollable-body table")[0].clientWidth;
                    if (this.datatableHeaderWidth > 0 && emptyContentWidth > 0 && emptyContentWidth != this.datatableHeaderWidth) {
                        this.setScrollableBodyTableWidth(unfrozenclass, (this.datatableHeaderWidth - frozenWidth));
                    }
                    if ((!this.rowGroupScrollableWidthFix && this.rowGroupMode)) {
                        this.rowGroupScrollableWidthFix = true;
                    }
                }
            }
        }
        if (!this.isEmpty() && this.datatableHeaderWidth && !this.rowGroupScrollableWidthFix) {
            this.datatableHeaderWidth = undefined;
            this.setScrollableBodyTableWidth(unfrozenclass, this.datatableHeaderWidth);
        }
    };
    DataTable.prototype.setScrollableBodyTableWidth = function (classname, width) {
        var msgcontainer = this.el.nativeElement.querySelectorAll(classname + " .ui-datatable-scrollable-body table")[0];
        if (msgcontainer) {
            msgcontainer.style.width = width ? width + 'px' : '';
        }
    };
    DataTable.prototype.updateDataToRender = function (datasource) {
        //setting current scroll position before rendering data
        this.currentscrollY = window.scrollY;
        if ((this.paginator || this.virtualScroll) && datasource) {
            this.dataToRender = [];
            var startIndex = this.lazy ? 0 : this.first;
            var endIndex = this.virtualScroll ? this.first + this.rows * 2 : startIndex + this.rows;
            for (var i = startIndex; i < endIndex; i++) {
                if (i >= datasource.length) {
                    break;
                }
                this.dataToRender.push(datasource[i]);
            }
        }
        else {
            this.dataToRender = datasource;
        }
        if (this.rowGroupMode) {
            this.updateRowGroupMetadata();
        }
        //setting flag to true so row height is being calculated for new data
        //as well on ngAfterViewChecked
        this.calculateRowHeight = true;
    };
    DataTable.prototype.onVirtualScroll = function (event) {
        this.first = (event.page - 1) * this.rows;
        if (this.lazy) {
            this.stopFilterPropagation = true;
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.updateDataToRender(this.filteredValue || this.value);
        }
    };
    DataTable.prototype.onHeaderKeydown = function (event, column) {
        if (event.keyCode == 13) {
            this.sort(event, column);
            event.preventDefault();
        }
    };
    DataTable.prototype.onHeaderMousedown = function (event, header) {
        if (this.reorderableColumns) {
            if (event.target.nodeName !== 'INPUT') {
                header.draggable = true;
            }
            else if (event.target.nodeName === 'INPUT') {
                header.draggable = false;
            }
        }
    };
    DataTable.prototype.sort = function (event, column) {
        if (!column.sortable) {
            return;
        }
        var targetNode = event.target.nodeName;
        if (targetNode == 'TH' || (targetNode == 'SPAN' && !this.domHandler.hasClass(event.target, 'ui-c'))) {
            var columnSortField = column.sortField || column.field;
            this.sortOrder = (this.sortField === columnSortField) ? this.sortOrder * -1 : -1;
            this.sortField = columnSortField;
            this.sortColumn = column;
            var metaKey = event.metaKey || event.ctrlKey;
            if (this.sortMode == 'multiple') {
                if (!this.multiSortMeta || !metaKey) {
                    this.multiSortMeta = [];
                }
                this.addSortMeta({ field: this.sortField, order: this.sortOrder });
            }
            if (this.lazy) {
                this.first = 0;
                this.stopFilterPropagation = true;
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else {
                if (this.sortMode == 'multiple')
                    this.sortMultiple();
                else
                    this.sortSingle();
            }
            this.onSort.emit({
                field: this.sortField,
                order: this.sortOrder,
                multisortmeta: this.multiSortMeta
            });
        }
    };
    DataTable.prototype.sortSingle = function () {
        var _this = this;
        if (this.value) {
            if (this.sortColumn && this.sortColumn.sortable === 'custom') {
                this.sortColumn.sortFunction.emit({
                    field: this.sortField,
                    order: this.sortOrder
                });
            }
            else {
                this.value.sort(function (data1, data2) {
                    var value1 = _this.resolveFieldData(data1, _this.sortField);
                    var value2 = _this.resolveFieldData(data2, _this.sortField);
                    var result = null;
                    if (value1 == null && value2 != null)
                        result = -1;
                    else if (value1 != null && value2 == null)
                        result = 1;
                    else if (value1 == null && value2 == null)
                        result = 0;
                    else if (typeof value1 === 'string' && typeof value2 === 'string')
                        result = value1.localeCompare(value2);
                    else
                        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                    return (_this.sortOrder * result);
                });
            }
            this.first = 0;
            if (this.hasFilter()) {
                this._filter();
            }
        }
        //prevent resort at ngDoCheck
        this.stopSortPropagation = true;
    };
    DataTable.prototype.sortMultiple = function () {
        var _this = this;
        if (this.value) {
            this.value.sort(function (data1, data2) {
                return _this.multisortField(data1, data2, _this.multiSortMeta, 0);
            });
            if (this.hasFilter()) {
                this._filter();
            }
        }
        //prevent resort at ngDoCheck
        this.stopSortPropagation = true;
    };
    DataTable.prototype.multisortField = function (data1, data2, multiSortMeta, index) {
        var value1 = this.resolveFieldData(data1, multiSortMeta[index].field);
        var value2 = this.resolveFieldData(data2, multiSortMeta[index].field);
        var result = null;
        if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 != value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }
        if (value1 == value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, multiSortMeta, index + 1)) : 0;
        }
        return (multiSortMeta[index].order * result);
    };
    DataTable.prototype.addSortMeta = function (meta) {
        var index = -1;
        for (var i = 0; i < this.multiSortMeta.length; i++) {
            if (this.multiSortMeta[i].field === meta.field) {
                index = i;
                break;
            }
        }
        if (index >= 0)
            this.multiSortMeta[index] = meta;
        else
            this.multiSortMeta.push(meta);
    };
    DataTable.prototype.isSorted = function (column) {
        if (!column.sortable) {
            return false;
        }
        var columnSortField = column.sortField || column.field;
        if (this.sortMode === 'single') {
            return (this.sortField && columnSortField === this.sortField);
        }
        else if (this.sortMode === 'multiple') {
            var sorted = false;
            if (this.multiSortMeta) {
                for (var i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == columnSortField) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    };
    DataTable.prototype.getSortOrder = function (column) {
        var order = 0;
        var columnSortField = column.sortField || column.field;
        if (this.sortMode === 'single') {
            if (this.sortField && columnSortField === this.sortField) {
                order = this.sortOrder;
            }
        }
        else if (this.sortMode === 'multiple') {
            if (this.multiSortMeta) {
                for (var i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == columnSortField) {
                        order = this.multiSortMeta[i].order;
                        break;
                    }
                }
            }
        }
        return order;
    };
    DataTable.prototype.onRowGroupClick = function (event) {
        if (this.rowGroupToggleClick) {
            this.rowGroupToggleClick = false;
            return;
        }
        if (this.sortableRowGroup) {
            var targetNode = event.target.nodeName;
            if ((targetNode == 'TD' || (targetNode == 'SPAN' && !this.domHandler.hasClass(event.target, 'ui-c')))) {
                if (this.sortField != this.groupField) {
                    this.sortField = this.groupField;
                    this.sortSingle();
                }
                else {
                    this.sortOrder = -1 * this.sortOrder;
                    this.sortSingle();
                }
            }
        }
    };
    DataTable.prototype.handleRowClick = function (event, rowData) {
        var targetNode = event.target.nodeName;
        if (targetNode == 'TD' || (targetNode == 'SPAN' && !this.domHandler.hasClass(event.target, 'ui-c'))) {
            this.onRowClick.next({ originalEvent: event, data: rowData });
            if (!this.selectionMode) {
                return;
            }
            var selected = this.isSelected(rowData);
            var metaSelection = this.rowTouched ? false : this.metaKeySelection;
            if (metaSelection) {
                var metaKey = event.metaKey || event.ctrlKey;
                if (selected && metaKey) {
                    if (this.isSingleSelectionMode()) {
                        this.selection = null;
                        this.selectionChange.emit(null);
                    }
                    else {
                        var selectionIndex_1 = this.findIndexInSelection(rowData);
                        this.selection = this.selection.filter(function (val, i) { return i != selectionIndex_1; });
                        this.selectionChange.emit(this.selection);
                    }
                    this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'row' });
                }
                else {
                    if (this.isSingleSelectionMode()) {
                        this.selection = rowData;
                        this.selectionChange.emit(rowData);
                    }
                    else if (this.isMultipleSelectionMode()) {
                        if (metaKey)
                            this.selection = this.selection || [];
                        else
                            this.selection = [];
                        this.selection = this.selection.concat([rowData]);
                        this.selectionChange.emit(this.selection);
                    }
                    this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'row' });
                }
            }
            else {
                if (this.isSingleSelectionMode()) {
                    if (selected) {
                        this.selection = null;
                        this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'row' });
                    }
                    else {
                        this.selection = rowData;
                        this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'row' });
                    }
                }
                else {
                    if (selected) {
                        var selectionIndex_2 = this.findIndexInSelection(rowData);
                        this.selection = this.selection.filter(function (val, i) { return i != selectionIndex_2; });
                        this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'row' });
                    }
                    else {
                        this.selection = (this.selection || []).concat([rowData]);
                        this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'row' });
                    }
                }
                this.selectionChange.emit(this.selection);
            }
        }
        this.rowTouched = false;
    };
    DataTable.prototype.handleRowTouchEnd = function (event) {
        this.rowTouched = true;
    };
    DataTable.prototype.selectRowWithRadio = function (event, rowData) {
        if (this.selection != rowData) {
            this.selection = rowData;
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'radiobutton' });
        }
    };
    DataTable.prototype.toggleRowWithCheckbox = function (event, rowData) {
        var selectionIndex = this.findIndexInSelection(rowData);
        this.selection = this.selection || [];
        if (selectionIndex != -1) {
            this.selection = this.selection.filter(function (val, i) { return i != selectionIndex; });
            this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'checkbox' });
        }
        else {
            this.selection = this.selection.concat([rowData]);
            this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'checkbox' });
        }
        this.selectionChange.emit(this.selection);
    };
    DataTable.prototype.toggleRowsWithCheckbox = function (event) {
        if (event.checked)
            this.selection = this.dataToRender.slice(0);
        else
            this.selection = [];
        this.selectionChange.emit(this.selection);
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: event.checked });
    };
    DataTable.prototype.onRowRightClick = function (event, rowData) {
        if (this.contextMenu) {
            var selectionIndex = this.findIndexInSelection(rowData);
            var selected = selectionIndex != -1;
            if (!selected) {
                if (this.isSingleSelectionMode()) {
                    this.selection = rowData;
                    this.selectionChange.emit(rowData);
                }
                else if (this.isMultipleSelectionMode()) {
                    this.selection = [rowData];
                    this.selectionChange.emit(this.selection);
                }
            }
            this.contextMenu.show(event);
            this.onContextMenuSelect.emit({ originalEvent: event, data: rowData });
        }
    };
    DataTable.prototype.rowDblclick = function (event, rowData) {
        this.onRowDblclick.emit({ originalEvent: event, data: rowData });
    };
    DataTable.prototype.isSingleSelectionMode = function () {
        return this.selectionMode === 'single';
    };
    DataTable.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode === 'multiple';
    };
    DataTable.prototype.findIndexInSelection = function (rowData) {
        var index = -1;
        if (this.selection) {
            for (var i = 0; i < this.selection.length; i++) {
                if (this.objectUtils.equals(rowData, this.selection[i], this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    DataTable.prototype.isSelected = function (rowData) {
        return ((rowData && this.objectUtils.equals(rowData, this.selection, this.dataKey)) || this.findIndexInSelection(rowData) != -1);
    };
    Object.defineProperty(DataTable.prototype, "allSelected", {
        get: function () {
            var val = true;
            if (this.dataToRender && this.selection && (this.dataToRender.length <= this.selection.length)) {
                for (var _i = 0, _a = this.dataToRender; _i < _a.length; _i++) {
                    var data = _a[_i];
                    if (!this.isSelected(data)) {
                        val = false;
                        break;
                    }
                }
            }
            else {
                val = false;
            }
            return val;
        },
        enumerable: true,
        configurable: true
    });
    DataTable.prototype.onFilterKeyup = function (event, value, field, matchMode) {
        var _this = this;
        if (event.keyCode === 13 || (event.type === 'blur')) {
            if (this.filterTimeout) {
                clearTimeout(this.filterTimeout);
            }
            this.filterTimeout = setTimeout(function () {
                _this.filter(value, field, matchMode);
                _this.filterTimeout = null;
            }, this.filterDelay);
        }
    };
    DataTable.prototype.filter = function (value, field, matchMode) {
        if (!this.isFilterBlank(value)) {
            this.filters[field] = { value: value, matchMode: matchMode };
        }
        else if (this.filters[field]) {
            delete this.filters[field];
        }
        this._filter();
    };
    DataTable.prototype.isFilterBlank = function (filter) {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                return true;
            else
                return false;
        }
        return true;
    };
    DataTable.prototype._filter = function () {
        this.first = 0;
        if (this.lazy) {
            this.stopFilterPropagation = true;
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.filteredValue = [];
            for (var i = 0; i < this.value.length; i++) {
                var localMatch = true;
                var globalMatch = false;
                if (this.columns) {
                    for (var j = 0; j < this.columns.length; j++) {
                        var col = this.columns[j], filterMeta = this.filters[col.field];
                        //local
                        if (filterMeta) {
                            var filterValue = filterMeta.value, filterField = col.field, filterMatchMode = filterMeta.matchMode || 'startsWith', dataFieldValue = this.resolveFieldData(this.value[i], filterField);
                            var filterConstraint = this.filterConstraints[filterMatchMode];
                            if (!filterConstraint(dataFieldValue, filterValue.toString())) {
                                localMatch = false;
                            }
                            if (!localMatch) {
                                break;
                            }
                        }
                        //global
                        if (this.globalFilter && !globalMatch) {
                            globalMatch = this.filterConstraints['contains'](this.resolveFieldData(this.value[i], col.field), this.globalFilter.value);
                        }
                    }
                }
                var matches = localMatch;
                if (this.globalFilter) {
                    matches = localMatch && globalMatch;
                }
                if (matches) {
                    this.filteredValue.push(this.value[i]);
                }
            }
            if (this.filteredValue.length === this.value.length) {
                this.filteredValue = null;
            }
            if (this.paginator) {
                this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
            }
            this.updateDataToRender(this.filteredValue || this.value);
        }
        this.onFilter.emit({
            filters: this.filters
        });
    };
    DataTable.prototype.hasFilter = function () {
        var empty = true;
        for (var prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }
        return !empty || (this.globalFilter && this.globalFilter.value && this.globalFilter.value.trim().length);
    };
    DataTable.prototype.onFilterInputClick = function (event) {
        event.stopPropagation();
    };
    DataTable.prototype.switchCellToEditMode = function (cell, column, rowData) {
        var _this = this;
        if (!this.selectionMode && this.editable && column.editable) {
            this.editorClick = true;
            if (cell != this.editingCell) {
                if (this.editingCell && this.domHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length == 0) {
                    this.domHandler.removeClass(this.editingCell, 'ui-cell-editing');
                }
                this.editingCell = cell;
                this.onEditInit.emit({ column: column, data: rowData });
                this.domHandler.addClass(cell, 'ui-cell-editing');
                var focusable_1 = this.domHandler.findSingle(cell, '.ui-cell-editor input');
                if (focusable_1) {
                    setTimeout(function () { return _this.renderer.invokeElementMethod(focusable_1, 'focus'); }, 50);
                }
            }
        }
    };
    DataTable.prototype.switchCellToViewMode = function (element) {
        this.editingCell = null;
        var cell = this.findCell(element);
        this.domHandler.removeClass(cell, 'ui-cell-editing');
    };
    DataTable.prototype.closeCell = function () {
        if (this.editingCell) {
            this.domHandler.removeClass(this.editingCell, 'ui-cell-editing');
            this.editingCell = null;
        }
    };
    DataTable.prototype.onCellEditorKeydown = function (event, column, rowData, rowIndex) {
        if (this.editable) {
            this.onEdit.emit({ originalEvent: event, column: column, data: rowData, index: rowIndex });
            //enter
            if (event.keyCode == 13) {
                this.onEditComplete.emit({ column: column, data: rowData, index: rowIndex });
                this.renderer.invokeElementMethod(event.target, 'blur');
                this.switchCellToViewMode(event.target);
                event.preventDefault();
            }
            else if (event.keyCode == 27) {
                this.onEditCancel.emit({ column: column, data: rowData, index: rowIndex });
                this.renderer.invokeElementMethod(event.target, 'blur');
                this.switchCellToViewMode(event.target);
                event.preventDefault();
            }
            else if (event.keyCode == 9) {
                if (event.shiftKey)
                    this.moveToPreviousCell(event);
                else
                    this.moveToNextCell(event);
            }
        }
    };
    DataTable.prototype.moveToPreviousCell = function (event) {
        var currentCell = this.findCell(event.target);
        var row = currentCell.parentElement;
        var targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
            this.renderer.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    };
    DataTable.prototype.moveToNextCell = function (event) {
        var currentCell = this.findCell(event.target);
        var row = currentCell.parentElement;
        var targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
            this.renderer.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    };
    DataTable.prototype.findPreviousEditableColumn = function (cell) {
        var prevCell = cell.previousElementSibling;
        if (!prevCell) {
            var previousRow = cell.parentElement.previousElementSibling;
            if (previousRow) {
                prevCell = previousRow.lastElementChild;
            }
        }
        if (this.domHandler.hasClass(prevCell, 'ui-editable-column'))
            return prevCell;
        else
            return this.findPreviousEditableColumn(prevCell);
    };
    DataTable.prototype.findNextEditableColumn = function (cell) {
        var nextCell = cell.nextElementSibling;
        if (!nextCell) {
            var nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
                nextCell = nextRow.firstElementChild;
            }
        }
        if (this.domHandler.hasClass(nextCell, 'ui-editable-column'))
            return nextCell;
        else
            return this.findNextEditableColumn(nextCell);
    };
    DataTable.prototype.onCustomEditorFocusPrev = function (event) {
        this.moveToPreviousCell(event);
    };
    DataTable.prototype.onCustomEditorFocusNext = function (event) {
        this.moveToNextCell(event);
    };
    DataTable.prototype.findCell = function (element) {
        var cell = element;
        while (cell.tagName != 'TD') {
            cell = cell.parentElement;
        }
        return cell;
    };
    DataTable.prototype.initResizableColumns = function () {
        var _this = this;
        this.tbody = this.domHandler.findSingle(this.el.nativeElement, 'tbody.ui-datatable-data');
        this.resizerHelper = this.domHandler.findSingle(this.el.nativeElement, 'div.ui-column-resizer-helper');
        this.fixColumnWidths();
        this.documentColumnResizeListener = this.renderer.listenGlobal('body', 'mousemove', function (event) {
            if (_this.columnResizing) {
                _this.onColumnResize(event);
            }
        });
        this.documentColumnResizeEndListener = this.renderer.listenGlobal('body', 'mouseup', function (event) {
            if (_this.columnResizing) {
                _this.columnResizing = false;
                _this.onColumnResizeEnd(event);
            }
        });
    };
    DataTable.prototype.initColumnResize = function (event) {
        var container = this.el.nativeElement.children[0];
        var containerLeft = this.domHandler.getOffset(container).left;
        this.resizeColumn = event.target.parentElement;
        this.columnResizing = true;
        this.lastResizerHelperX = (event.pageX - containerLeft);
    };
    DataTable.prototype.onColumnResize = function (event) {
        var container = this.el.nativeElement.children[0];
        var containerLeft = this.domHandler.getOffset(container).left;
        this.domHandler.addClass(container, 'ui-unselectable-text');
        this.resizerHelper.style.height = container.offsetHeight + 'px';
        this.resizerHelper.style.top = 0 + 'px';
        if (event.pageX > containerLeft && event.pageX < (containerLeft + container.offsetWidth)) {
            this.resizerHelper.style.left = (event.pageX - containerLeft) + 'px';
        }
        this.resizerHelper.style.display = 'block';
    };
    DataTable.prototype.onColumnResizeEnd = function (event) {
        var delta = this.resizerHelper.offsetLeft - this.lastResizerHelperX;
        var columnWidth = this.resizeColumn.offsetWidth;
        var newColumnWidth = columnWidth + delta;
        var minWidth = this.resizeColumn.style.minWidth || 15;
        if (columnWidth + delta > parseInt(minWidth)) {
            if (this.columnResizeMode === 'fit') {
                var nextColumn = this.resizeColumn.nextElementSibling;
                var nextColumnWidth = nextColumn.offsetWidth - delta;
                if (newColumnWidth > 15 && nextColumnWidth > 15) {
                    this.resizeColumn.style.width = newColumnWidth + 'px';
                    if (nextColumn) {
                        nextColumn.style.width = nextColumnWidth + 'px';
                    }
                    if (this.scrollable) {
                        var colGroup = this.domHandler.findSingle(this.el.nativeElement, 'colgroup.ui-datatable-scrollable-colgroup');
                        var resizeColumnIndex = this.domHandler.index(this.resizeColumn);
                        colGroup.children[resizeColumnIndex].style.width = newColumnWidth + 'px';
                        if (nextColumn) {
                            colGroup.children[resizeColumnIndex + 1].style.width = nextColumnWidth + 'px';
                        }
                    }
                }
            }
            else if (this.columnResizeMode === 'expand') {
                this.tbody.parentElement.style.width = this.tbody.parentElement.offsetWidth + delta + 'px';
                this.resizeColumn.style.width = newColumnWidth + 'px';
                var containerWidth = this.tbody.parentElement.style.width;
                if (this.scrollable) {
                    this.scrollBarWidth = this.scrollBarWidth || this.domHandler.calculateScrollbarWidth();
                    this.el.nativeElement.children[0].style.width = parseFloat(containerWidth) + this.scrollBarWidth + 'px';
                    var colGroup = this.domHandler.findSingle(this.el.nativeElement, 'colgroup.ui-datatable-scrollable-colgroup');
                    var resizeColumnIndex = this.domHandler.index(this.resizeColumn);
                    colGroup.children[resizeColumnIndex].style.width = newColumnWidth + 'px';
                }
                else {
                    this.el.nativeElement.children[0].style.width = containerWidth;
                }
            }
            this.onColResize.emit({
                element: this.resizeColumn,
                delta: delta
            });
        }
        this.resizerHelper.style.display = 'none';
        this.resizeColumn = null;
        this.domHandler.removeClass(this.el.nativeElement.children[0], 'ui-unselectable-text');
    };
    DataTable.prototype.fixColumnWidths = function () {
        var columns = this.domHandler.find(this.el.nativeElement, 'th.ui-resizable-column');
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var col = columns_1[_i];
            col.style.width = col.offsetWidth + 'px';
        }
    };
    DataTable.prototype.onColumnDragStart = function (event) {
        if (this.columnResizing) {
            event.preventDefault();
            return;
        }
        this.draggedColumn = this.findParentHeader(event.target);
        event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
    };
    DataTable.prototype.onColumnDragover = function (event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            var iconWidth = this.domHandler.getHiddenElementOuterWidth(this.reorderIndicatorUp);
            var iconHeight = this.domHandler.getHiddenElementOuterHeight(this.reorderIndicatorUp);
            var dropHeader = this.findParentHeader(event.target);
            var container = this.el.nativeElement.children[0];
            var containerOffset = this.domHandler.getOffset(container);
            var dropHeaderOffset = this.domHandler.getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                var targetLeft = dropHeaderOffset.left - containerOffset.left;
                var targetTop = containerOffset.top - dropHeaderOffset.top;
                var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                this.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (iconHeight - 1) + 'px';
                this.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUp.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(iconWidth / 2)) + 'px';
                    this.reorderIndicatorDown.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(iconWidth / 2)) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUp.style.left = (targetLeft - Math.ceil(iconWidth / 2)) + 'px';
                    this.reorderIndicatorDown.style.left = (targetLeft - Math.ceil(iconWidth / 2)) + 'px';
                    this.dropPosition = -1;
                }
                this.reorderIndicatorUp.style.display = 'block';
                this.reorderIndicatorDown.style.display = 'block';
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    };
    DataTable.prototype.onColumnDragleave = function (event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUp.style.display = 'none';
            this.reorderIndicatorDown.style.display = 'none';
        }
    };
    DataTable.prototype.onColumnDrop = function (event) {
        event.preventDefault();
        if (this.draggedColumn) {
            var dragIndex = this.domHandler.index(this.draggedColumn);
            var dropIndex = this.domHandler.index(this.findParentHeader(event.target));
            var allowDrop = (dragIndex != dropIndex);
            if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
            if (allowDrop) {
                this.columns.splice(dropIndex, 0, this.columns.splice(dragIndex, 1)[0]);
                this.onColReorder.emit({
                    dragIndex: dragIndex,
                    dropIndex: dropIndex,
                    columns: this.columns
                });
            }
            this.reorderIndicatorUp.style.display = 'none';
            this.reorderIndicatorDown.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    };
    DataTable.prototype.initColumnReordering = function () {
        this.reorderIndicatorUp = this.domHandler.findSingle(this.el.nativeElement.children[0], 'span.ui-datatable-reorder-indicator-up');
        this.reorderIndicatorDown = this.domHandler.findSingle(this.el.nativeElement.children[0], 'span.ui-datatable-reorder-indicator-down');
    };
    DataTable.prototype.findParentHeader = function (element) {
        if (element.nodeName == 'TH') {
            return element;
        }
        else {
            var parent_1 = element.parentElement;
            while (parent_1.nodeName != 'TH') {
                parent_1 = parent_1.parentElement;
            }
            return parent_1;
        }
    };
    DataTable.prototype.hasFooter = function () {
        if (this.footerColumnGroup) {
            return true;
        }
        else {
            if (this.columns) {
                for (var i = 0; i < this.columns.length; i++) {
                    if (this.columns[i].footer) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    DataTable.prototype.isEmpty = function () {
        return !this.dataToRender || (this.dataToRender.length == 0);
    };
    DataTable.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.virtualScroll ? this.rows * 2 : this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.globalFilter ? this.globalFilter.value : null,
            multiSortMeta: this.multiSortMeta
        };
    };
    DataTable.prototype.toggleRow = function (row, event) {
        if (!this.expandedRows) {
            this.expandedRows = [];
        }
        var expandedRowIndex = this.findExpandedRowIndex(row);
        if (expandedRowIndex != -1) {
            this.expandedRows.splice(expandedRowIndex, 1);
            this.onRowCollapse.emit({
                originalEvent: event,
                data: row
            });
        }
        else {
            if (this.rowExpandMode === 'single') {
                this.expandedRows = [];
            }
            this.expandedRows.push(row);
            this.onRowExpand.emit({
                originalEvent: event,
                data: row
            });
        }
        if (event) {
            event.preventDefault();
        }
    };
    DataTable.prototype.findExpandedRowIndex = function (row) {
        var index = -1;
        if (this.expandedRows) {
            for (var i = 0; i < this.expandedRows.length; i++) {
                if (this.expandedRows[i] == row) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    DataTable.prototype.isRowExpanded = function (row) {
        return this.findExpandedRowIndex(row) != -1;
    };
    DataTable.prototype.findExpandedRowGroupIndex = function (row) {
        var index = -1;
        if (this.expandedRowsGroups && this.expandedRowsGroups.length) {
            for (var i = 0; i < this.expandedRowsGroups.length; i++) {
                var group = this.expandedRowsGroups[i];
                var rowGroupField = this.resolveFieldData(row, this.groupField);
                if (rowGroupField === group) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    DataTable.prototype.isRowGroupExpanded = function (row) {
        return this.findExpandedRowGroupIndex(row) != -1;
    };
    DataTable.prototype.toggleAllRowGroup = function (event, expand) {
        var _this = this;
        if (this.rowGroupMetadata) {
            var groups = Object.keys(this.rowGroupMetadata);
            this.expandedRowsGroups = [];
            if (expand) {
                groups.forEach(function (row) {
                    _this.expandedRowsGroups.push(row);
                });
            }
        }
    };
    DataTable.prototype.toggleRowGroup = function (event, row) {
        this.rowGroupToggleClick = true;
        var index = this.findExpandedRowGroupIndex(row);
        var rowGroupField = this.resolveFieldData(row, this.groupField);
        if (index >= 0) {
            this.expandedRowsGroups.splice(index, 1);
        }
        else {
            this.expandedRowsGroups = this.expandedRowsGroups || [],
                this.expandedRowsGroups.push(rowGroupField);
        }
        event.preventDefault();
    };
    DataTable.prototype.reset = function () {
        this.sortField = null;
        this.sortOrder = 1;
        this.filteredValue = null;
        this.filters = {};
        if (this.paginator) {
            this.paginate({
                first: 0,
                rows: this.rows
            });
        }
        else {
            this.updateDataToRender(this.value);
        }
    };
    DataTable.prototype.exportCSV = function (filter) {
        var _this = this;
        var data = ((typeof (this.filteredValue) != "undefined" && this.filteredValue != null) && filter == true) ? this.filteredValue : this.value;
        var csv = '\ufeff';
        var exportColumns = this.columns.filter(function (c) { return c.exportColumn != false; });
        //headers
        for (var i = 0; i < exportColumns.length; i++) {
            if (exportColumns[i].field) {
                csv += exportColumns[i].header || exportColumns[i].field;
                if (i < (exportColumns.length - 1)) {
                    csv += this.csvSeparator;
                }
            }
        }
        //body
        data.forEach(function (record, i) {
            csv += '\n';
            for (var i_1 = 0; i_1 < exportColumns.length; i_1++) {
                if (exportColumns[i_1].field) {
                    csv += '"' + _this.resolveFieldData(record, exportColumns[i_1].field) + '"';
                    if (i_1 < (exportColumns.length - 1)) {
                        csv += _this.csvSeparator;
                    }
                }
            }
        });
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
        }
        else {
            var link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', this.exportFilename + '.csv');
                document.body.appendChild(link);
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
    };
    DataTable.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    DataTable.prototype.getRowStyleClass = function (rowData, rowIndex) {
        var styleClass = 'ui-widget-content';
        if (this.rowStyleClass) {
            var rowClass = this.rowStyleClass.call(this, rowData, rowIndex);
            if (rowClass) {
                styleClass += ' ' + rowClass;
            }
        }
        return styleClass;
    };
    // Excel Export
    DataTable.prototype.transformData = function (filter) {
        var _this = this;
        var data = ((typeof (this.filteredValue) != "undefined" && this.filteredValue != null) && filter == true) ? this.filteredValue : this.value;
        var exportColumns = this.columns.filter(function (c) { return c.exportColumn != false; });
        var data_array = [];
        var result_array = [];
        //headers
        for (var i = 0; i < exportColumns.length; i++) {
            if (exportColumns[i].field) {
                result_array.push(exportColumns[i].header || exportColumns[i].field);
                if (i == (exportColumns.length - 1)) {
                    data_array.push(result_array);
                    result_array = [];
                }
            }
        }
        //body
        data.forEach(function (record, j) {
            var result_arr = [];
            for (var i = 0; i < exportColumns.length; i++) {
                if (exportColumns[i].field) {
                    result_arr.push(_this.resolveFieldData(record, exportColumns[i].field));
                    if (i == (exportColumns.length - 1)) {
                        data_array.push(result_arr);
                    }
                }
            }
        });
        var res_columnsum = [];
        for (var j = 0; j < exportColumns.length; j++) {
            if (exportColumns[j].displaysum) {
                if (!this.displaysum) {
                    this.displaysum = true;
                }
                var hours = 0;
                var minutes = 0;
                var seconds = 0;
                // console.log('sum column');
                var columnsum = 0;
                var isNumber = void 0;
                for (var i = 1; i < data_array.length; i++) {
                    var value = data_array[i][j];
                    if (!isNaN(Number(value))) {
                        if (!isNumber) {
                            isNumber = true;
                        }
                        if (!columnsum) {
                            columnsum = 0;
                        }
                        columnsum = columnsum + parseFloat(value);
                    }
                    else if (this.durationvalue(value)) {
                        var duration = value.split(":");
                        hours = hours + parseInt(duration[0]);
                        minutes = minutes + parseInt(duration[1]);
                        seconds = seconds + parseInt(duration[2]);
                        // Convert each 60 minutes to an hour
                        if (minutes >= 60) {
                            hours++;
                            minutes -= 60;
                        }
                        // Convert each 60 seconds to a minute
                        if (seconds >= 60) {
                            minutes++;
                            seconds -= 60;
                        }
                    }
                }
                if (isNumber) {
                    if (columnsum % 1 != 0) {
                        res_columnsum.push(columnsum.toFixed(2));
                    }
                    else {
                        res_columnsum.push(columnsum);
                    }
                }
                else if (hours || minutes || seconds) {
                    res_columnsum.push(hours + ":" + minutes + ":" + seconds);
                }
                else {
                    res_columnsum.push(0);
                }
            }
            else {
                res_columnsum.push("");
            }
            if (j == (exportColumns.length - 1) && this.displaysum) {
                var indexOfFirstFilledcolumn = res_columnsum.findIndex(function (c) { return c || c === 0; });
                if (indexOfFirstFilledcolumn > 0 && res_columnsum[indexOfFirstFilledcolumn - 1].length == 0) {
                    res_columnsum[indexOfFirstFilledcolumn - 1] = 'Total';
                }
                data_array.push(res_columnsum);
            }
        }
        // let headerData: Array<any> = [];
        // let dataNew: Array<any> = [];
        // var keys_arr: any = [];
        // let excel_data: any;
        // if (data instanceof DataTable) {
        //     excel_data = data.value;
        // }
        // else {
        //     excel_data = data;
        // }
        //_.forEach(this.data.headerColumnGroup.rows._results, function (value: any, index: any) {
        //    console.log(value.columns._results);
        //    value.columns._results.forEach((c:any) => {
        //        headerData.push({ colspan: c['colspan'], header: c['header'], rowspan: c['rowspan']});
        //    })
        //});
        //console.log(headerData);
        // debugger;
        // _.forEach(data, function(json) {
        //     var arr = _.filter(json, function(value: any, index: any) {
        //         if (typeof value !== "object") {
        //             keys_arr.push(_.startCase(index));
        //             return value;
        //         }
        //     });
        //     dataNew.push(arr);
        // });
        // dataNew.unshift(_.uniq(keys_arr));
        return data_array;
    };
    DataTable.prototype.sheet_from_array_of_arrays = function (data) {
        var ws = {};
        var endCell = { c: 10000000, r: 10000000 };
        var startCell = { c: 0, r: 0 };
        var range = { s: endCell, e: startCell };
        var wscols = [];
        var sumormaulcellRange;
        for (var R = 0; R != data.length; ++R) {
            for (var C = 0; C != data[R].length; ++C) {
                wscols.push({ wch: 20 });
                if (range.s.r > R)
                    range.s.r = R;
                if (range.s.c > C)
                    range.s.c = C;
                if (range.e.r < R)
                    range.e.r = R;
                if (range.e.c < C)
                    range.e.c = C;
                var cell = { v: data[R][C], t: 's', s: {} };
                if (R === 0) {
                    cell.s = {
                        fill: {
                            fgColor: {
                                rgb: "00BFFF"
                            }
                        },
                        font: {
                            bold: true,
                            sz: '11'
                        },
                        border: {
                            bottom: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            },
                            top: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            }, left: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            },
                            right: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            }
                        }
                    };
                }
                else if (this.displaysum && R === (data.length - 1)) {
                    cell.t = 'n';
                    cell.s = {
                        font: {
                            bold: true,
                            sz: '11'
                        },
                        border: {
                            bottom: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            },
                            top: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            }, left: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            },
                            right: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            }
                        }
                    };
                }
                else if ((R === (data.length - 1) && !this.displaysum) || (R === (data.length - 2) && this.displaysum)) {
                    cell.s = {
                        border: {
                            bottom: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            },
                            top: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            }, left: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            },
                            right: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            }
                        }
                    };
                }
                else if (cell.v && cell.v.toString().toLowerCase().indexOf('\n') !== -1) {
                    cell.s = {
                        alignment: {
                            wrapText: true
                        },
                        border: {
                            bottom: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            },
                            top: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            }, left: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            },
                            right: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            }
                        }
                    };
                }
                else {
                    cell.s = {
                        border: {
                            bottom: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            },
                            top: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            }, left: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            },
                            right: {
                                style: 'thin',
                                color: {
                                    rgb: "000000"
                                }
                            }
                        }
                    };
                }
                //convert null value to empty string
                if (cell.v == null)
                    cell.v = " ";
                var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });
                if (typeof cell.v === 'number')
                    cell.t = 'n';
                else if (typeof cell.v === 'boolean')
                    cell.t = 'b';
                else if (cell.t === 'n' && !isNaN(Number(cell.v)))
                    cell.t = 'n';
                else
                    cell.t = 's';
                ws[cell_ref] = cell;
            }
        }
        // ws['!cols'] = wscols;
        // console.log("Worksheet goes here", ws);
        if (range.s.c < 10000000) {
            ws['!ref'] = XLSX.utils.encode_range(endCell, startCell);
        }
        return ws;
    };
    DataTable.prototype.datenum = function (v, date1904) {
        if (date1904)
            v += 1462;
        var epoch = Date.parse(v);
        var dt = new Date(Date.UTC(1899, 11, 30));
        return (epoch - dt) / (24 * 60 * 60 * 1000);
    };
    DataTable.prototype.durationvalue = function (v) {
        var patt = new RegExp("\d+:\d{2}:\d{2}$");
        return patt.compile().test(v);
    };
    DataTable.prototype.generateExcelFile = function (filter) {
        var dstyle = {
            font: { name: 'arial', sz: '10' }
        };
        var sheetName = this.exportFilename;
        var workbook = {
            Sheets: {},
            SheetNames: [],
            Props: {}
        };
        var ws;
        var wbout;
        ws = this.sheet_from_array_of_arrays(this.transformData(filter));
        workbook.SheetNames.push(sheetName);
        workbook.Sheets[sheetName] = ws;
        wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary', showGridLines: false, defaultCellStyle: dstyle });
        return wbout;
    };
    DataTable.prototype.s2ab = function (s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i)
            view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    };
    DataTable.prototype.exportExcel = function (filter) {
        FileSaver.saveAs(new Blob([this.s2ab(this.generateExcelFile(filter))], { type: "application/octet-stream" }), this.exportFilename + ".xlsx");
    };
    DataTable.prototype.visibleColumns = function () {
        return this.columns ? this.columns.filter(function (c) { return !c.hidden; }) : [];
    };
    DataTable.prototype.calculateUnforzenWidth = function () {
        var _this = this;
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout(function () {
            if (_this.unfrozenWidth && _this.isWidthinPercentage(_this.unfrozenWidth)) {
                _this.initialPerUnfrozenWidth = _this.initialPerUnfrozenWidth > 0 ? _this.initialPerUnfrozenWidth : parseFloat(_this.unfrozenWidth);
                var actualWidth = _this.calculatePerWidth(_this.initialPerUnfrozenWidth, true);
                var widthDifference = (parseFloat(_this.frozenWidth) / parseFloat(actualWidth)) * 100;
                var calWidth = (_this.initialPerUnfrozenWidth - widthDifference);
                _this.unfrozenWidth = calWidth + '%';
            }
        }, 200);
    };
    // get containerWidth() {
    //
    // if(this.scrollable) {
    //   if(this.scrollWidth) {
    //
    // /*Custom Code Added to calculate width in %*/
    // var width=this.scrollWidth;
    // var hasPx = width.indexOf('px') >= 0;
    // var hasPct = width.indexOf('%') >= 0;
    // if(hasPct){
    //   var gridwidth= document.getElementsByClassName("ui-datatable-scrollable-header-box")[0].clientWidth;
    //   if(gridwidth)
    //   {
    //   width=width.replace('%','');
    //   width=Math.ceil(gridwidth*width/100);
    //   width=width+'px';
    // }
    // }
    //   return width;
    //   }
    //   else if(this.frozenWidth && this.unfrozenWidth) {
    //       debugger;
    //       return parseFloat(this.frozenWidth) + parseFloat(this.unfrozenWidth) + 'px';
    //   }
    // }
    // else {
    //   return this.style ? this.style.width : null;
    // }
    // }
    // isforzenWidthInit:boolean;
    // get containerWidth() {
    //     if (this.scrollable) {
    //         if (this.scrollWidth) {
    //             return this.scrollWidth;
    //         }
    //         else if (this.frozenWidth && this.unfrozenWidth) {
    //           if(!this.isforzenWidthInit){
    //             debugger
    //             this.calculateUnforzenWidth();
    //           }
    //             // let actualWidth=this.calculatePerWidth(this.unfrozenWidth,true);
    //             // this.unfrozenWidth=(this.frozenWidth/actualWidth)*100;
    //
    //             // if (this.isWidthinPercentage(this.unfrozenWidth)) {
    //             //     // this.unfrozenWidth = this.calculatePerWidth(this.unfrozenWidth, true);// - parseFloat(this.frozenWidth);
    //             //     return parseFloat(this.unfrozenWidth);
    //             // }
    //             // return parseFloat(this.frozenWidth) + parseFloat(actualWidth) + 'px';
    //         }
    //     }
    //     else {
    //         return this.style ? this.style.width : null;
    //     }
    // }
    DataTable.prototype.isWidthinPercentage = function (width) {
        return typeof width == 'string' ? width.indexOf('%') >= 0 : true;
    };
    DataTable.prototype.calculatePerWidth = function (width, forzen) {
        if (this.isWidthinPercentage(width)) {
            var element = void 0;
            var gridwidth = this.el.nativeElement.firstElementChild.clientWidth;
            if (gridwidth) {
                width = typeof width == 'string' ? width.replace('%', '') : width;
                width = Math.ceil(gridwidth * width / 100);
                width = (width - 19) + 'px';
            }
        }
        return width;
    };
    DataTable.prototype.ngOnDestroy = function () {
        //remove event listener
        if (this.globalFilterFunction) {
            this.globalFilterFunction();
        }
        if (this.resizableColumns && this.documentColumnResizeListener && this.documentColumnResizeEndListener) {
            this.documentColumnResizeListener();
            this.documentColumnResizeEndListener();
        }
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        if (this.columnsSubscription) {
            this.columnsSubscription.unsubscribe();
        }
    };
    return DataTable;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "paginator", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "rows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "totalRecords", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "pageLinks", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataTable.prototype, "rowsPerPageOptions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "responsive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "stacked", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "selectionMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "selection", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "selectionChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "editable", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onRowClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onRowSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onRowUnselect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onRowDblclick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onHeaderCheckboxToggle", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onContextMenuSelect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "filterDelay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "lazy", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onLazyLoad", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "resizableColumns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "columnResizeMode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onColResize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "reorderableColumns", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onColReorder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "scrollable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "virtualScroll", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "scrollHeight", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "scrollWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "frozenWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "unfrozenWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "styleClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "tableStyle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "tableStyleClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "globalFilter", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "sortMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "sortField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "sortOrder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "groupField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataTable.prototype, "multiSortMeta", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "contextMenu", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "csvSeparator", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "exportFilename", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "emptyMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "paginatorPosition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "metaKeySelection", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "immutable", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onEditInit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onEditComplete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onEdit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onEditCancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onPage", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onSort", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onFilter", void 0);
__decorate([
    core_1.ContentChild(shared_2.Header),
    __metadata("design:type", Object)
], DataTable.prototype, "header", void 0);
__decorate([
    core_1.ContentChild(shared_2.Footer),
    __metadata("design:type", Object)
], DataTable.prototype, "footer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "expandableRows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataTable.prototype, "expandedRows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "expandableRowGroups", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "rowExpandMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataTable.prototype, "expandedRowsGroups", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "tabindex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], DataTable.prototype, "rowStyleClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "rowGroupMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "sortableRowGroup", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "sortFile", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "rowHover", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTable.prototype, "first", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DataTable.prototype, "filters", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DataTable.prototype, "dataKey", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "loading", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DataTable.prototype, "displaysum", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onRowExpand", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onRowCollapse", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onRowGroupExpand", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DataTable.prototype, "onRowGroupCollapse", void 0);
__decorate([
    core_1.ContentChildren(shared_2.PrimeTemplate),
    __metadata("design:type", core_1.QueryList)
], DataTable.prototype, "templates", void 0);
__decorate([
    core_1.ContentChildren(shared_2.Column),
    __metadata("design:type", core_1.QueryList)
], DataTable.prototype, "cols", void 0);
__decorate([
    core_1.ContentChild(shared_2.HeaderColumnGroup),
    __metadata("design:type", shared_2.HeaderColumnGroup)
], DataTable.prototype, "headerColumnGroup", void 0);
__decorate([
    core_1.ContentChild(shared_2.FooterColumnGroup),
    __metadata("design:type", shared_2.FooterColumnGroup)
], DataTable.prototype, "footerColumnGroup", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], DataTable.prototype, "value", null);
DataTable = __decorate([
    core_1.Component({
        selector: 'p-dataTable',
        template: "\n<div [ngStyle]=\"style\" [class]=\"styleClass\" [style.width]=\"containerWidth\"\n[ngClass]=\"{'ui-datatable ui-widget':true,'ui-datatable-reflow':responsive,'ui-datatable-stacked':stacked,'ui-datatable-resizable':resizableColumns,'ui-datatable-scrollable':scrollable}\">\n<div class=\"ui-datatable-loading ui-widget-overlay\" *ngIf=\"loading\"></div>\n<div class=\"ui-datatable-loading-content\" *ngIf=\"loading\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-2x\"></i>\n</div>\n<div class=\"ui-datatable-header ui-widget-header\" *ngIf=\"header\">\n    <ng-content select=\"p-header\"></ng-content>\n</div>\n<p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\"\n    (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && paginatorPosition!='bottom' || paginatorPosition =='both'\"></p-paginator>\n<div class=\"ui-datatable-tablewrapper\" *ngIf=\"!scrollable\">\n    <table [class]=\"tableStyleClass\" [ngStyle]=\"tableStyle\">\n        <thead class=\"ui-datatable-thead\">\n            <tr *ngIf=\"!headerColumnGroup\" class=\"ui-state-default\" [pColumnHeaders]=\"columns\"></tr>\n            <ng-template [ngIf]=\"headerColumnGroup\">\n                <tr *ngFor=\"let headerRow of headerColumnGroup.rows\" class=\"ui-state-default\" [pColumnHeaders]=\"headerRow.columns\"></tr>\n            </ng-template>\n        </thead>\n        <tfoot *ngIf=\"hasFooter()\" class=\"ui-datatable-tfoot\">\n            <tr *ngIf=\"!footerColumnGroup\" class=\"ui-state-default\" [pColumnFooters]=\"columns\"></tr>\n            <ng-template [ngIf]=\"footerColumnGroup\">\n                <tr *ngFor=\"let footerRow of footerColumnGroup.rows\" class=\"ui-state-default\" [pColumnFooters]=\"footerRow.columns\"></tr>\n            </ng-template>\n        </tfoot>\n        <tbody [ngClass]=\"{'ui-datatable-data ui-widget-content': true, 'ui-datatable-hoverable-rows': (rowHover||selectionMode)}\" [pTableBody]=\"columns\"></tbody>\n    </table>\n</div>\n\n<ng-template [ngIf]=\"scrollable\">\n    <div class=\"ui-datatable-scrollable-wrapper ui-helper-clearfix\" [ngClass]=\"{'max-height':scrollHeight}\">\n        <div *ngIf=\"frozenColumns\" [pScrollableView]=\"frozenColumns\" frozen=\"true\"\n            [ngStyle]=\"{'width':this.frozenWidth}\" class=\"ui-datatable-scrollable-view ui-datatable-frozen-view\"></div>\n        <div [pScrollableView]=\"scrollableColumns\" [ngStyle]=\"{'width':this.unfrozenWidth, 'left': this.frozenWidth}\"\n            class=\"ui-datatable-scrollable-view\" [virtualScroll]=\"virtualScroll\" (onVirtualScroll)=\"onVirtualScroll($event)\"\n            [ngClass]=\"{'ui-datatable-unfrozen-view': frozenColumns}\"></div>\n    </div>\n</ng-template>\n\n<p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\"\n    (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && paginatorPosition!='top' || paginatorPosition =='both'\"></p-paginator>\n<div class=\"ui-datatable-footer ui-widget-header\" *ngIf=\"footer\">\n    <ng-content select=\"p-footer\"></ng-content>\n</div>\n\n<div class=\"ui-column-resizer-helper ui-state-highlight\" style=\"display:none\"></div>\n<span class=\"fa fa-arrow-down ui-datatable-reorder-indicator-up\" style=\"position: absolute; display: none;\"></span>\n<span class=\"fa fa-arrow-up ui-datatable-reorder-indicator-down\" style=\"position: absolute; display: none;\"></span>\n</div>\n",
        providers: [domhandler_1.DomHandler, ObjectUtils_1.ObjectUtils]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, domhandler_1.DomHandler, core_1.IterableDiffers,
        core_1.Renderer, core_1.ChangeDetectorRef, ObjectUtils_1.ObjectUtils, core_1.NgZone])
], DataTable);
exports.DataTable = DataTable;
var DataTableModule = (function () {
    function DataTableModule() {
    }
    return DataTableModule;
}());
DataTableModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, shared_1.SharedModule, paginator_1.PaginatorModule, forms_1.FormsModule],
        exports: [DataTable, shared_1.SharedModule],
        declarations: [DataTable, DTRadioButton, DTCheckbox, ColumnHeaders, ColumnFooters, TableBody, ScrollableView, RowExpansionLoader]
    })
], DataTableModule);
exports.DataTableModule = DataTableModule;
//# sourceMappingURL=datatable.js.map