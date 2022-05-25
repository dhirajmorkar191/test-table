import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailComponent } from './components/detail/detail.component';
import { ComponentsModule } from './components/components.module';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent, DetailComponent],
        entryComponents: [],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            MaterialModule,
            ComponentsModule,
        ],
        providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map