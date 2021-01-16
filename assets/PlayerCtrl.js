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
        countText: {
            type: cc.Node,
            default: null
        },
        winText: {
            type: cc.Node,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var self = this;
        this.count = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            switch (event.keyCode) {
                case cc.macro.KEY.a:
                    self.offsetX += -10;
                    break;
                case cc.macro.KEY.d:
                    self.offsetX += 10;
                    break;
                case cc.macro.KEY.w:
                    self.offsetY += 10;
                    break;
                case cc.macro.KEY.s:
                    self.offsetY += -10;
                    break;
            }

        })

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event) {
            switch (event.keyCode) {
                case cc.macro.KEY.a:
                case cc.macro.KEY.d:
                case cc.macro.KEY.w:
                case cc.macro.KEY.s:
                    self.offsetX = 0;
                    self.offsetY = 0;
                    break;
            }
        })
    },

    start() {
        this.winText.active = false;
        this.countText.getComponent(cc.Label).string = "Count: " + this.count;
    },

    update(dt) {
        var self = this;
        var body = self.node.getComponent(cc.RigidBody);
        body.linearVelocity = cc.v2(body.linearVelocity.x + self.offsetX, body.linearVelocity.y + self.offsetY);
    },

    //发生了碰撞
    onBeginContact(contact, self, other) {
        if (other.tag == 999) {
            other.node.active = false;
            this.count++;
            this.countText.getComponent(cc.Label).string = "Count: " + this.count;
            if (this.count >= 8) {
                this.winText.active = true;
            }

        }
    },

});
