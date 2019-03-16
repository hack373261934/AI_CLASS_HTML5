/**
 *
 * 声音管理类
 * @author 
 *
 */
class SoundManager {
    //背景音乐
    private static sdbg_channel: egret.SoundChannel;
    //背景音效
    private static effect_channel: egret.SoundChannel;
    /**背景音乐是否开启（背景音乐和背景音效 都是该状态控制） */
    public static BG_SOUND_OPEN: boolean = true;
    /**音效 是否开启 （暂时未使用）*/
    public static EFF_SOUND_OPEN: boolean = true;
    
	
	/**播放背景音乐 默认无限播放*/
    public static playBgSound(isAttack: boolean =true,name: string ="gamemusic_mp3",loops:number = 0){
        this.BG_SOUND_OPEN = true;
        egret.localStorage.setItem("sound",this.BG_SOUND_OPEN.toString())
        if(!isAttack) {
            var sdbg: egret.Sound = RES.getRes(name);
            this.sdbg_channel = sdbg.play(0,loops);
            this.sdbg_channel.addEventListener(egret.Event.SOUND_COMPLETE,function soundComplete(event: egret.Event) {
                console.log("背景播放完毕");
            },this);
        }
        else { 
            this.playEffect(true);
        }
    }
    /**停止背景音乐 设置页面操作*/
    public static stopBgSound(isAttack: boolean = true){
        if(this.BG_SOUND_OPEN){ 
            this.BG_SOUND_OPEN = false;
            egret.localStorage.setItem("sound",this.BG_SOUND_OPEN.toString())
            if(!isAttack) {
                this.sdbg_channel.stop();
            }
            else { 
                this.effect_channel.stop();
            }
        }
    }
    
    /**进入战斗界面调取：停止音乐,播放音效  默认无限播放*/
    public static playEffect(isAttack: boolean = false,name: string = "effect_mp3",loops: number = 0) {
        if(this.BG_SOUND_OPEN){
            if(!isAttack){ 
                this.sdbg_channel.stop();
            }
            var effect: egret.Sound = RES.getRes(name);
            this.effect_channel = effect.play(0,loops);
            this.effect_channel.addEventListener(egret.Event.SOUND_COMPLETE,function soundComplete(event: egret.Event) {
                console.log("音效播放完毕");
            },this);
        }
    }
    /**退出战斗界面调取：停止音效,播放音乐*/
    public static stopEffectSound() {
        if(this.BG_SOUND_OPEN) {
            this.effect_channel.stop();
            this.playBgSound(false);
        }
    }
	
}
