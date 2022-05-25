import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MaterialModule } from '../material-module';
import { ComponentsModule } from '../components/components.module';
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            ExploreContainerComponentModule,
            Tab1PageRoutingModule,
            MaterialModule,
            ComponentsModule,
        ],
        declarations: [Tab1Page],
    })
], Tab1PageModule);
export { Tab1PageModule };
//# sourceMappingURL=tab1.module.js.map