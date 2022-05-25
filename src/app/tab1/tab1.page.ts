import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { USER_DATA, User } from './PeriodicElement';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  searchForm!: FormGroup;
  dataSource = USER_DATA;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string = '';
  tableRows: number;
  columns = [
    { columnDef: 'id', header: 'id', type: 'text' },
    { columnDef: 'avatar', header: 'Image', type: 'image' },
    { columnDef: 'email', header: 'email', type: 'text' },
    { columnDef: 'first_name', header: 'First Name', type: 'text' },
    { columnDef: 'last_name', header: 'Last name', type: 'text' },
    { columnDef: 'location', header: 'Location', type: 'text' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.tableRows = this.dataSource.length;
    this.initiateForm();
    this.filter();
  }

  private initiateForm() {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  private filter() {
    if (this.searchForm) {
      this.searchForm
        .get('search')
        .valueChanges.pipe(debounceTime(1000))
        .subscribe((filterValue: string) => {
          this.searchKey = filterValue;
        });
    }
  }

  onRowClick(row: User) {
    this.router.navigate(['details'], { state: { user: row } });
  }

  currentCount(count: number) {
    this.tableRows = count;
    this.cdRef.detectChanges();
  }

  onTableAction(event) {
    console.log('event', event);
  }
}
