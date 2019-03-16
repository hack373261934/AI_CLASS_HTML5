var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * 声音管理类
 * @author
 *
 */
var SoundManager = (function () {
    function SoundManager() {
    }
    /**播放背景音乐 默认无限播放*/
    SoundManager.playBgSound = function (isAttack, name, loops) {
        if (isAttack === void 0) { isAttack = true; }
        if (name === void 0) { name = "gamemusic_mp3"; }
        if (loops === void 0) { loops = 0; }
        this.BG_SOUND_OPEN = true;
        egret.localStorage.setItem("sound", this.BG_SOUND_OPEN.toString());
        if (!isAttack) {
            var sdbg = RES.getRes(name);
            this.sdbg_channel = sdbg.play(0, loops);
            this.sdbg_channel.addEventListener(egret.Event.SOUND_COMPLETE, function soundComplete(event) {
                console.log("背景播放完毕");
            }, this);
        }
        else {
            this.playEffect(true);
        }
    };
    /**停止背景音乐 设置页面操作*/
    SoundManager.stopBgSound = function (isAttack) {
        if (isAttack === void 0) { isAttack = true; }
        if (this.BG_SOUND_OPEN) {
            this.BG_SOUND_OPEN = false;
            egret.localStorage.setItem("sound", this.BG_SOUND_OPEN.toString());
            if (!isAttack) {
                this.sdbg_channel.stop();
            }
            else {
                this.effect_channel.stop();
            }
        }
    };
    /**进入战斗界面调取：停止音乐,播放音效  默认无限播放*/
    SoundManager.playEffect = function (isAttack, name, loops) {
        if (isAttack === void 0) { isAttack = false; }
        if (name === void 0) { name = "effect_mp3"; }
        if (loops === void 0) { loops = 0; }
        if (this.BG_SOUND_OPEN) {
            if (!isAttack) {
                this.sdbg_channel.stop();
            }
            var effect = RES.getRes(name);
            this.effect_channel = effect.play(0, loops);
            this.effect_channel.addEventListener(egret.Event.SOUND_COMPLETE, function soundComplete(event) {
                console.log("音效播放完毕");
            }, this);
        }
    };
    /**退出战斗界面调取：停止音效,播放音乐*/
    SoundManager.stopEffectSound = function () {
        if (this.BG_SOUND_OPEN) {
            this.effect_channel.stop();
            this.playBgSound(false);
        }
    };
    /**背景音乐是否开启（背景音乐和背景音效 都是该状态控制） */
    SoundManager.BG_SOUND_OPEN = true;
    /**音效 是否开启 （暂时未使用）*/
    SoundManager.EFF_SOUND_OPEN = true;
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
