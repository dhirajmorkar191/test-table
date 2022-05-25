import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/tab1/PeriodicElement';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @Output() length: EventEmitter<number> = new EventEmitter<number>();
  @Output() selectedUser: EventEmitter<User> = new EventEmitter<User>();
  @Input() columnsList: Array<any> = [];
  @Input() dataset: Array<any> = [];
  @Input() search: string;

  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = [];
  columns: any;

  constructor() {}

  ngOnInit() {
    if (!this.columnsList) return;
    this.columns = this.columnsList.map((column) => {
      return {
        columnDef: column.columnDef,
        header: column.header,
        cell: (element: any) => `${element[column] ? element[column] : ``}`,
      };
    });

    this.displayedColumns = this.columnsList.map((d) => d.columnDef);
    // Set the dataSource for <mat-table>.
    this.dataSource = new MatTableDataSource(this.dataset);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes &&
      changes.search &&
      changes.search.previousValue != changes.search.currentValue
    ) {
      this.applyFilter(changes.search.currentValue);
    }
  }

  private applyFilter(filterValue: string) {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.length.emit(this.dataSource.filteredData.length);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowClick(user: User) {
    this.selectedUser.emit(user);
  }
}
