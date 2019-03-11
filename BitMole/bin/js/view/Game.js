var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this) || this;
            _this.mole = new Mole(_this.normal, _this.hit, 25);
            Laya.timer.loop(2000, _this, _this.onLoop);
            return _this;
        }
        Game.prototype.onLoop = function () {
            this.mole.show();
        };
        return Game;
    }(ui.GameUI));
    view.Game = Game;
})(view || (view = {}));
//# sourceMappingURL=Game.js.map