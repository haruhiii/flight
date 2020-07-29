// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        flights: cc.Node,
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.fly, this)
        this.map = [
            [4, 1], [4, 2], [4, 3], [4, 4],
            [4, 4], [3, 4], [2, 4], [1, 4],
            [1, 5], [1, 6], [1, 7], [1, 8], [1, 9],
            [1, 9], [2, 9], [3, 9], [4, 9],
            [4, 9], [4, 10], [4, 11], [4, 12],
            [4, 12], [5, 12], [6, 12],
            [6, 12], [6, 11], [6, 10], [6, 9], [6, 8], [6, 7],
        ]
    },
    fly() {
        let step=6
        console.log(step);
        let action= cc.tween(this.flights)

        while (step > 0) {
            step--
            x = this.map[this.now ][0] * 50 - 360
            y = this.map[this.now ][1] * 50 - 640
            this.now++
            action.to(1, { scale: 1, position: cc.v2(x, y) })
        }
        action.start()
    },
    start() {
        this.now = 0
        this.flights.position = cc.v2(this.map[0][0] * 50 - 360-50, this.map[0][1] * 50 - 640)
        // const action = cc.moveTo(2, 100, 100)
        // console.log(this.map.slice(4, 8));
        // // this.flights.runAction(action)
        // let action = cc.tween(this.flights)
        // for (let i of this.map) {
        //     x = i[0] * 50 - 360
        //     y = i[1] * 50 - 640
        //     action = action.to(1, { scale: 1, position: cc.v2(x, y) })
        //     console.log(x, y)
        // }
        // action.start()
    },


    update(dt) {
    },
});
