var WebGL = Laya.WebGL;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        //初始化
        Laya.init(800, 600, WebGL);
        //设置背景颜色
        Laya.stage.bgColor = "#ffcccc";
        //定义一个数组，加载图片
        var resArray = [
            //加载描述文件，可以通过描述文件加载图片集
            { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
            //加载背景图片，因为背景图片没有被打包
            { url: "unpack.json", type: Laya.Loader.JSON }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        //新建一个页面对象
        var testUI = new view.Game;
        //通过stage对象引用导入 view 类, 相当于发布 
        Laya.stage.addChild(testUI);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map