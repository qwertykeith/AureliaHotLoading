var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/bbb/zzz',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Zzz = (function () {
        function Zzz() {
        }
        Zzz.prototype.valueChanged = function (newValue, oldValue) {
        };
        return Zzz;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], Zzz.prototype, "value", void 0);
    exports.Zzz = Zzz;
});

define('text!resources/elements/bbb/zzz.html', ['module'], function(module) { module.exports = "<template><h1>${value}</h1><p>I am module bbb</p></template>"; });
//# sourceMappingURL=bbb-bundle.js.map