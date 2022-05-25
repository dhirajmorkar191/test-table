import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
const routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    },
    {
        path: 'details',
        component: DetailComponent,
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        ],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map