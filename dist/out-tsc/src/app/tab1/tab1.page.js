import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { USER_DATA } from './PeriodicElement';
import { debounceTime } from 'rxjs/operators';
let Tab1Page = class Tab1Page {
    constructor(formBuilder, router, cdRef) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.cdRef = cdRef;
        this.dataSource = USER_DATA;
        this.searchKey = '';
        this.columns = [
            { columnDef: 'id', header: 'id', type: 'text' },
            { columnDef: 'avatar', header: 'Image', type: 'image' },
            { columnDef: 'email', header: 'email', type: 'text' },
            { columnDef: 'first_name', header: 'First Name', type: 'text' },
            { columnDef: 'last_name', header: 'Last name', type: 'text' },
            { columnDef: 'location', header: 'Location', type: 'text' },
        ];
    }
    ngOnInit() {
        this.tableRows = this.dataSource.length;
        this.initiateForm();
        this.filter();
    }
    initiateForm() {
        this.searchForm = this.formBuilder.group({
            search: [''],
        });
    }
    filter() {
        if (this.searchForm) {
            this.searchForm
                .get('search')
                .valueChanges.pipe(debounceTime(1000))
                .subscribe((filterValue) => {
                this.searchKey = filterValue;
            });
        }
    }
    onRowClick(row) {
        this.router.navigate(['details'], { state: { user: row } });
    }
    currentCount(count) {
        this.tableRows = count;
        this.cdRef.detectChanges();
    }
    onTableAction(event) {
        console.log('event', event);
    }
};
__decorate([
    ViewChild(MatPaginator)
], Tab1Page.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort)
], Tab1Page.prototype, "sort", void 0);
Tab1Page = __decorate([
    Component({
        selector: 'app-tab1',
        templateUrl: 'tab1.page.html',
        styleUrls: ['tab1.page.scss'],
    })
], Tab1Page);
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map