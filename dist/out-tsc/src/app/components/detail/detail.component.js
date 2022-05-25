import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DetailComponent = class DetailComponent {
    constructor(router, location) {
        var _a, _b, _c;
        this.router = router;
        this.location = location;
        this.user = (_c = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.user;
        if (!this.user) {
            this.router.navigateByUrl('/tabs/tab1');
        }
    }
    ngOnInit() { }
    back() {
        this.location.back();
    }
};
DetailComponent = __decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.component.html',
        styleUrls: ['./detail.component.scss'],
    })
], DetailComponent);
export { DetailComponent };
//# sourceMappingURL=detail.component.js.map