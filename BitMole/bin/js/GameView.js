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
/*
* name;
*/
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        //继承必须使用super函数，否则会报错
        return _super.call(this) || this;
    }
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map