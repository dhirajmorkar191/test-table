import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { TableComponent } from './table/table.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from '../tab1/tab1-routing.module';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        declarations: [TableComponent],
        imports: [
            CommonModule,
            IonicModule,
            MaterialModule,
            FormsModule,
            ReactiveFormsModule,
            ExploreContainerComponentModule,
            Tab1PageRoutingModule,
        ],
        exports: [TableComponent],
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map