/**Created by the LayaAirIDE*/
module view{
	export class Game extends ui.GameUI{
		private mole:Mole;

		constructor(){
			super();
			this.mole = new Mole(this.normal,this.hit,25);
			Laya.timer.loop(2000,this,this.onLoop);
		}
		onLoop():void{
			this.mole.show();
		}
	}
}