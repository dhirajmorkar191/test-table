import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
let TableComponent = class TableComponent {
    constructor() {
        this.length = new EventEmitter();
        this.selectedUser = new EventEmitter();
        this.columnsList = [];
        this.dataset = [];
        this.displayedColumns = [];
    }
    ngOnInit() {
        if (!this.columnsList)
            return;
        this.columns = this.columnsList.map((column) => {
            return {
                columnDef: column.columnDef,
                header: column.header,
                cell: (element) => `${element[column] ? element[column] : ``}`,
            };
        });
        this.displayedColumns = this.columnsList.map((d) => d.columnDef);
        // Set the dataSource for <mat-table>.
        this.dataSource = new MatTableDataSource(this.dataset);
    }
    ngOnChanges(changes) {
        if (changes &&
            changes.search &&
            changes.search.previousValue != changes.search.currentValue) {
            this.applyFilter(changes.search.currentValue);
        }
    }
    applyFilter(filterValue) {
        if (!this.dataSource) {
            return;
        }
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.length.emit(this.dataSource.filteredData.length);
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onRowClick(user) {
        this.selectedUser.emit(user);
    }
};
__decorate([
    ViewChild(MatPaginator, { static: true })
], TableComponent.prototype, "paginator", void 0);
__decorate([
    Output()
], TableComponent.prototype, "length", void 0);
__decorate([
    Output()
], TableComponent.prototype, "selectedUser", void 0);
__decorate([
    Input()
], TableComponent.prototype, "columnsList", void 0);
__decorate([
    Input()
], TableComponent.prototype, "dataset", void 0);
__decorate([
    Input()
], TableComponent.prototype, "search", void 0);
TableComponent = __decorate([
    Component({
        selector: 'app-table',
        templateUrl: './table.component.html',
        styleUrls: ['./table.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map