/*
* Mole 操作控制类
*/
class Mole{
    private normalState:Laya.Image;
    private hitState:Laya.Image;
    private downY:number;
    private upY:number;
    //用来记录小鼠的状态
    private isActive:boolean;
    private isShow:boolean;
    private isHit:boolean; //用来接收是否收到打击，并根据这个值来执行相应的动作

    constructor(nomalState:Laya.Image,hitState:Laya.Image,downY:number){
        this.normalState = nomalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y;
        this.reset();
        //设定一个触发器，当鼠标点击的时候，执行hit动作
        this.normalState.on(Laya.Event.MOUSE_DOWN,this,this.hit);
    }

    //重置
    reset():void{
        //默认都为false
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;
    }
    //显示
    show():void{
        if(this.isActive)return;
        this.isActive = true;
        this.isShow = true;
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        //让目标缓慢移动
        Laya.Tween.to(this.normalState,{y:this.upY},500,Laya.Ease.backOut,Laya.Handler.create(this,this.showComplete));
    }
    //停留
    showComplete(){
        if(this.isShow && !this.isHit){
            Laya.timer.once(2000,this,this.hide);
        }
    }
    //消失 
    hide():void{
        if(this.isShow && !this.isHit){
            this.isShow = false;
            Laya.Tween.to(this.normalState,{y:this.downY},300,Laya.Ease.backIn,Laya.Handler.create(this,this.reset));
        }
    }
    //受击
    hit():void{
        if(this.isShow && !this.isHit){
            this.isHit = true;
            this.isShow = false;
            //Laya.timer.clear(this,this.hide); //清理无用计时器
            this.normalState.visible = false;
            this.hitState.visible = true;
            Laya.timer.once(500,this,this.reset);
        }
    }
}