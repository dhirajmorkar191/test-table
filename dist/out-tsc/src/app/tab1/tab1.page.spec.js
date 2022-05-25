import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Tab1Page } from './tab1.page';
import { TableComponent } from '../components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('Tab1Page', () => {
    let component;
    let fixture;
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [Tab1Page, TableComponent],
            imports: [
                IonicModule.forRoot(),
                BrowserTestingModule,
                BrowserAnimationsModule,
                ExploreContainerComponentModule,
                ReactiveFormsModule,
                FormsModule,
                RouterTestingModule,
                MatTableModule,
                CdkTableModule,
                MatPaginatorModule,
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(Tab1Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tab1.page.spec.js.map