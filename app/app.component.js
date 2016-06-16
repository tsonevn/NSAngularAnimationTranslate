"use strict";
var core_1 = require("@angular/core");
var enums_1 = require("ui/enums");
var timer_1 = require("timer");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
        this.isItemVisible = false;
        this.isItemVisibleFirst = true;
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.showsecondline = function () {
        var container = this.container.nativeElement;
        var second = this.second.nativeElement;
        var that = this;
        container.animate({
            translate: { x: 0, y: -100 },
            duration: 1000,
            curve: enums_1.AnimationCurve.easeIn
        })
            .then(function () {
            that.isItemVisibleFirst = false;
            second.translateY = 1000;
            that.isItemVisible = true;
            timer_1.setTimeout(function () {
                second.animate({
                    translate: { x: 0, y: 0 },
                    duration: 500,
                    curve: enums_1.AnimationCurve.easeIn
                });
            }, 500);
        });
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("second"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "second", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map