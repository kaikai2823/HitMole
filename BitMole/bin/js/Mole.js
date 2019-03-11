/*
* Mole 操作控制类
*/
var Mole = /** @class */ (function () {
    function Mole(nomalState, hitState, downY) {
        this.normalState = nomalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.reset();
        //设定一个触发器，当鼠标点击的时候，执行hit动作
        this.normalState.on(Laya.Event.MOUSE_DOWN, this, this.hit);
    }
    //重置
    Mole.prototype.reset = function () {
        //默认都为false
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;
    };
    //显示
    Mole.prototype.show = function () {
        if (this.isActive)
            return;
        this.isActive = true;
        this.isShow = true;
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        //让目标缓慢移动
        Laya.Tween.to(this.normalState, { y: this.upY }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete));
    };
    //停留
    Mole.prototype.showComplete = function () {
        if (this.isShow && !this.isHit) {
            Laya.timer.once(5000, this, this.hide);
        }
    };
    //消失 
    Mole.prototype.hide = function () {
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            Laya.Tween.to(this.normalState, { y: this.downY }, 300, Laya.Ease.backIn, Laya.Handler.create(this, this.reset));
        }
    };
    //受击
    Mole.prototype.hit = function () {
        if (this.isShow && !this.isHit) {
            this.isHit = true;
            this.isShow = false;
            Laya.timer.clear(this, this.hide); //清理无用计时器
            this.normalState.visible = false;
            this.hitState.visible = true;
            Laya.timer.once(500, this, this.reset);
        }
    };
    return Mole;
}());
//# sourceMappingURL=Mole.js.map