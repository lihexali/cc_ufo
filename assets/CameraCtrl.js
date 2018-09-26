// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        player:{
            type: cc.Node,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.getPhysicsManager().enabled = true;
        var self = this;
        var camera = self.node
        this.offset = null;
        //add keyboard input listener to jump, turnLeft and turnRight

        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(event) {
        //     switch(event.keyCode) {
        //         case cc.macro.KEY.a:
        //             self.offsetX = -10;
        //             break;
        //             case cc.macro.KEY.d:
        //         self.offsetX = 10;
        //             break;
        //     }
        // })

        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function(event) {
        //     switch(event.keyCode) {
        //         case cc.macro.KEY.a:
        //         case cc.macro.KEY.d:
        //         self.offsetX = 0;
        //             break;
        //     }
        // })
        
    },

    start () {
        this.offset = this.node.position.sub(this.player.position);
    },

    lateUpdate (dt) {
        this.node.position = this.player.position.add(this.offset) ;
    },
});
