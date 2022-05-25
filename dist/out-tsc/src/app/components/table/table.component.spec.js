import { TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
describe('TableComponent', () => {
    let component;
    let fixture;
    let de;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TableComponent],
            imports: [
                IonicModule.forRoot(),
                BrowserTestingModule,
                BrowserAnimationsModule,
                CdkTableModule,
                MatTableModule,
                MatPaginatorModule,
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        component.columnsList = testColumn;
        component.dataset = data;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        de = fixture.debugElement;
    });
    it('should has correct rows', (done) => {
        fixture.detectChanges();
        // query debug elements doesn't work
        const rowDebugElements = de.queryAll(By.css('tbody tr'));
        expect(rowDebugElements.length).toBe(0);
        // has to fallback to query DOM elements
        const rowHtmlElements = de.nativeElement.querySelectorAll('tbody tr');
        expect(rowHtmlElements.length).toBe(0);
        done();
    });
});
const testColumn = [
    { columnDef: 'id', header: 'id', type: 'text' },
    { columnDef: 'avatar', header: 'Image', type: 'image' },
    { columnDef: 'email', header: 'email', type: 'text' },
    { columnDef: 'first_name', header: 'First Name', type: 'text' },
    { columnDef: 'last_name', header: 'Last name', type: 'text' },
    { columnDef: 'location', header: 'Location', type: 'text' },
];
const data = [
    {
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 3,
        email: 'emma.wong@reqres.in',
        first_name: 'Emma',
        last_name: 'Wong',
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 4,
        email: 'eve.holt@reqres.in',
        first_name: 'Eve',
        last_name: 'Holt',
        avatar: 'https://reqres.in/img/faces/4-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 5,
        email: 'charles.morris@reqres.in',
        first_name: 'Charles',
        last_name: 'Morris',
        avatar: 'https://reqres.in/img/faces/5-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 6,
        email: 'tracey.ramos@reqres.in',
        first_name: 'Tracey',
        last_name: 'Ramos',
        avatar: 'https://reqres.in/img/faces/6-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 7,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 8,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 9,
        email: 'emma.wong@reqres.in',
        first_name: 'Emma',
        last_name: 'Wong',
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 10,
        email: 'eve.holt@reqres.in',
        first_name: 'Eve',
        last_name: 'Holt',
        avatar: 'https://reqres.in/img/faces/4-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 11,
        email: 'charles.morris@reqres.in',
        first_name: 'Charles',
        last_name: 'Morris',
        avatar: 'https://reqres.in/img/faces/5-image.jpg',
        location: 'India, Pune',
    },
    {
        id: 12,
        email: 'tracey.ramos@reqres.in',
        first_name: 'Tracey',
        last_name: 'Ramos',
        avatar: 'https://reqres.in/img/faces/6-image.jpg',
        location: 'India, Pune',
    },
];
//# sourceMappingURL=table.component.spec.js.map