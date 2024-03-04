window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  GameDian: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1293dI8yiVCQKZeZzxWNPNF", "GameDian");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  GameTu1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea25cCrbaBKCpDXBWhakJNg", "GameTu1");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        datu1: {
          default: null,
          type: cc.SpriteFrame
        },
        datu2: {
          default: null,
          type: cc.SpriteFrame
        },
        datu3: {
          default: null,
          type: cc.SpriteFrame
        },
        datu4: {
          default: null,
          type: cc.SpriteFrame
        },
        datu5: {
          default: null,
          type: cc.SpriteFrame
        },
        datu6: {
          default: null,
          type: cc.SpriteFrame
        },
        datu7: {
          default: null,
          type: cc.SpriteFrame
        },
        datu8: {
          default: null,
          type: cc.SpriteFrame
        },
        datu9: {
          default: null,
          type: cc.SpriteFrame
        },
        datu10: {
          default: null,
          type: cc.SpriteFrame
        },
        datu11: {
          default: null,
          type: cc.SpriteFrame
        },
        datu12: {
          default: null,
          type: cc.SpriteFrame
        },
        datu13: {
          default: null,
          type: cc.SpriteFrame
        },
        datu14: {
          default: null,
          type: cc.SpriteFrame
        },
        datu15: {
          default: null,
          type: cc.SpriteFrame
        },
        datu16: {
          default: null,
          type: cc.SpriteFrame
        },
        datu17: {
          default: null,
          type: cc.SpriteFrame
        },
        datu18: {
          default: null,
          type: cc.SpriteFrame
        },
        chenggong2: {
          default: null,
          type: cc.Node
        },
        chenggong1: {
          default: null,
          type: cc.Node
        },
        npcFab0: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        this.id = this.game_js.dateJs.date["guanqia"];
        switch (this.id) {
         case 1:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu1;
          break;

         case 2:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu2;
          break;

         case 3:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu3;
          break;

         case 4:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu4;
          break;

         case 5:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu5;
          break;

         case 6:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu6;
          break;

         case 7:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu7;
          break;

         case 8:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu8;
          break;

         case 9:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu9;
          break;

         case 10:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu10;
          break;

         case 11:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu11;
          break;

         case 12:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu12;
          break;

         case 13:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu13;
          break;

         case 14:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu14;
          break;

         case 15:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu15;
          break;

         case 16:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu16;
          break;

         case 17:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu17;
          break;

         case 18:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu18;
        }
      },
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchDown, this);
      },
      touchDown: function touchDown(event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
        if (0 == this.game_js.jieshu) {
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();
          switch (this.id) {
           case 1:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 180) < 30 && Math.abs(touchLoc.y - 350) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 255) < 30 && Math.abs(touchLoc.y - 210) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 180) < 30 && Math.abs(touchLoc.y - 350) < 15 || Math.abs(touchLoc.x - 255) < 30 && Math.abs(touchLoc.y - 210) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 2:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 145) < 30 && Math.abs(touchLoc.y - 300) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 180) < 30 && Math.abs(touchLoc.y - 264) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 145) < 30 && Math.abs(touchLoc.y - 300) < 15 || Math.abs(touchLoc.x - 180) < 30 && Math.abs(touchLoc.y - 264) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 3:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 500) < 30 && Math.abs(touchLoc.y - 348) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 415) < 30 && Math.abs(touchLoc.y - 256) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 500) < 30 && Math.abs(touchLoc.y - 348) < 15 || Math.abs(touchLoc.x - 415) < 30 && Math.abs(touchLoc.y - 256) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 4:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 586) < 30 && Math.abs(touchLoc.y - 337) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 54) < 30 && Math.abs(touchLoc.y - 332) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 586) < 30 && Math.abs(touchLoc.y - 337) < 15 || Math.abs(touchLoc.x - 54) < 30 && Math.abs(touchLoc.y - 332) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 5:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 580) < 30 && Math.abs(touchLoc.y - 300) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 266) < 30 && Math.abs(touchLoc.y - 193) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 580) < 30 && Math.abs(touchLoc.y - 300) < 15 || Math.abs(touchLoc.x - 266) < 30 && Math.abs(touchLoc.y - 193) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 6:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 507) < 30 && Math.abs(touchLoc.y - 238) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 54) < 30 && Math.abs(touchLoc.y - 193) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 507) < 30 && Math.abs(touchLoc.y - 238) < 15 || Math.abs(touchLoc.x - 54) < 30 && Math.abs(touchLoc.y - 193) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 7:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 27) < 30 && Math.abs(touchLoc.y - 275) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 590) < 30 && Math.abs(touchLoc.y - 416) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 27) < 30 && Math.abs(touchLoc.y - 275) < 15 || Math.abs(touchLoc.x - 590) < 30 && Math.abs(touchLoc.y - 416) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 8:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 383) < 30 && Math.abs(touchLoc.y - 279) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 257) < 30 && Math.abs(touchLoc.y - 256) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 383) < 30 && Math.abs(touchLoc.y - 279) < 15 || Math.abs(touchLoc.x - 257) < 30 && Math.abs(touchLoc.y - 256) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 9:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 303) < 30 && Math.abs(touchLoc.y - 330) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 351) < 30 && Math.abs(touchLoc.y - 190) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 303) < 30 && Math.abs(touchLoc.y - 330) < 15 || Math.abs(touchLoc.x - 351) < 30 && Math.abs(touchLoc.y - 190) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 10:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 360) < 30 && Math.abs(touchLoc.y - 353) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 616) < 30 && Math.abs(touchLoc.y - 444) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 360) < 30 && Math.abs(touchLoc.y - 353) < 15 || Math.abs(touchLoc.x - 616) < 30 && Math.abs(touchLoc.y - 444) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 11:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 379) < 30 && Math.abs(touchLoc.y - 282) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 541) < 30 && Math.abs(touchLoc.y - 188) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 379) < 30 && Math.abs(touchLoc.y - 282) < 15 || Math.abs(touchLoc.x - 541) < 30 && Math.abs(touchLoc.y - 188) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 12:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 303) < 30 && Math.abs(touchLoc.y - 467) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 640) < 30 && Math.abs(touchLoc.y - 355) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 303) < 30 && Math.abs(touchLoc.y - 467) < 15 || Math.abs(touchLoc.x - 640) < 30 && Math.abs(touchLoc.y - 355) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 13:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 628) < 30 && Math.abs(touchLoc.y - 305) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 420) < 30 && Math.abs(touchLoc.y - 229) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 628) < 30 && Math.abs(touchLoc.y - 305) < 15 || Math.abs(touchLoc.x - 420) < 30 && Math.abs(touchLoc.y - 229) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 14:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 378) < 30 && Math.abs(touchLoc.y - 184) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 600) < 30 && Math.abs(touchLoc.y - 460) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 378) < 30 && Math.abs(touchLoc.y - 184) < 15 || Math.abs(touchLoc.x - 600) < 30 && Math.abs(touchLoc.y - 460) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 15:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 510) < 30 && Math.abs(touchLoc.y - 405) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 357) < 30 && Math.abs(touchLoc.y - 366) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 510) < 30 && Math.abs(touchLoc.y - 405) < 15 || Math.abs(touchLoc.x - 357) < 30 && Math.abs(touchLoc.y - 366) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 16:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 581) < 30 && Math.abs(touchLoc.y - 412) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 421) < 30 && Math.abs(touchLoc.y - 396) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 581) < 30 && Math.abs(touchLoc.y - 412) < 15 || Math.abs(touchLoc.x - 421) < 30 && Math.abs(touchLoc.y - 396) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 17:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 158) < 30 && Math.abs(touchLoc.y - 270) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 550) < 30 && Math.abs(touchLoc.y - 192) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 158) < 30 && Math.abs(touchLoc.y - 270) < 15 || Math.abs(touchLoc.x - 550) < 30 && Math.abs(touchLoc.y - 192) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 18:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 378) < 30 && Math.abs(touchLoc.y - 270) < 15 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 662) < 30 && Math.abs(touchLoc.y - 250) < 15 && this.diertu();
            if (!(Math.abs(touchLoc.x - 378) < 30 && Math.abs(touchLoc.y - 270) < 15 || Math.abs(touchLoc.x - 662) < 30 && Math.abs(touchLoc.y - 250) < 15)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
          }
        }
      },
      update: function update(dt) {},
      diyitu: function diyitu() {
        if (this.game_js.t < 1) {
          this.one2 = cc.instantiate(this.npcFab0);
          this.node.addChild(this.one2);
          this.game_js.t++;
          this.game_js.tu1_js.one = cc.instantiate(this.npcFab0);
          this.game_js.tu1_js.node.addChild(this.game_js.tu1_js.one);
          this.game_js.chenggong();
          switch (this.id) {
           case 1:
            this.one2.x = -180;
            this.one2.y = 0;
            this.game_js.tu1_js.one.x = -180;
            this.game_js.tu1_js.one.y = 0;
            break;

           case 2:
            this.one2.x = -205;
            this.one2.y = -60;
            this.game_js.tu1_js.one.x = -205;
            this.game_js.tu1_js.one.y = -60;
            break;

           case 3:
            this.one2.x = 155;
            this.one2.y = 0;
            this.game_js.tu1_js.one.x = 155;
            this.game_js.tu1_js.one.y = 0;
            break;

           case 4:
            this.one2.x = 235;
            this.one2.y = -20;
            this.game_js.tu1_js.one.x = 235;
            this.game_js.tu1_js.one.y = -20;
            break;

           case 5:
            this.one2.x = 235;
            this.one2.y = -65;
            this.game_js.tu1_js.one.x = 235;
            this.game_js.tu1_js.one.y = -65;
            break;

           case 6:
            this.one2.x = 165;
            this.one2.y = -115;
            this.game_js.tu1_js.one.x = 165;
            this.game_js.tu1_js.one.y = -115;
            break;

           case 7:
            this.one2.x = -320;
            this.one2.y = -85;
            this.game_js.tu1_js.one.x = -320;
            this.game_js.tu1_js.one.y = -85;
            break;

           case 8:
            this.one2.x = 40;
            this.one2.y = -80;
            this.game_js.tu1_js.one.x = 40;
            this.game_js.tu1_js.one.y = -80;
            break;

           case 9:
            this.one2.x = -40;
            this.one2.y = -35;
            this.game_js.tu1_js.one.x = -40;
            this.game_js.tu1_js.one.y = -35;
            break;

           case 10:
            this.one2.x = 0;
            this.one2.y = 0;
            this.game_js.tu1_js.one.x = 0;
            this.game_js.tu1_js.one.y = 0;
            break;

           case 11:
            this.one2.x = 30;
            this.one2.y = -70;
            this.game_js.tu1_js.one.x = 30;
            this.game_js.tu1_js.one.y = -70;
            break;

           case 12:
            this.one2.x = -55;
            this.one2.y = 130;
            this.game_js.tu1_js.one.x = -55;
            this.game_js.tu1_js.one.y = 130;
            break;

           case 13:
            this.one2.x = 255;
            this.one2.y = -60;
            this.game_js.tu1_js.one.x = 255;
            this.game_js.tu1_js.one.y = -60;
            break;

           case 14:
            this.one2.x = 25;
            this.one2.y = -180;
            this.game_js.tu1_js.one.x = 25;
            this.game_js.tu1_js.one.y = -180;
            break;

           case 15:
            this.one2.x = 160;
            this.one2.y = 60;
            this.game_js.tu1_js.one.x = 160;
            this.game_js.tu1_js.one.y = 60;
            break;

           case 16:
            this.one2.x = 220;
            this.one2.y = 50;
            this.game_js.tu1_js.one.x = 220;
            this.game_js.tu1_js.one.y = 50;
            break;

           case 17:
            this.one2.x = -210;
            this.one2.y = -70;
            this.game_js.tu1_js.one.x = -210;
            this.game_js.tu1_js.one.y = -70;
            break;

           case 18:
            this.one2.x = 20;
            this.one2.y = -75;
            this.game_js.tu1_js.one.x = 20;
            this.game_js.tu1_js.one.y = -75;
          }
        }
      },
      diertu: function diertu() {
        if (this.game_js.t1 < 1) {
          this.one3 = cc.instantiate(this.npcFab0);
          this.node.addChild(this.one3);
          this.game_js.chenggong();
          this.game_js.t1++;
          this.game_js.tu1_js.one1 = cc.instantiate(this.npcFab0);
          this.game_js.tu1_js.node.addChild(this.game_js.tu1_js.one1);
          switch (this.id) {
           case 1:
            this.one3.x = -110;
            this.one3.y = -145;
            this.game_js.tu1_js.one1.x = -110;
            this.game_js.tu1_js.one1.y = -145;
            break;

           case 2:
            this.one3.x = -180;
            this.one3.y = -85;
            this.game_js.tu1_js.one1.x = -175;
            this.game_js.tu1_js.one1.y = -85;
            break;

           case 3:
            this.one3.x = 67;
            this.one3.y = -100;
            this.game_js.tu1_js.one1.x = 67;
            this.game_js.tu1_js.one1.y = -100;
            break;

           case 4:
            this.one3.x = -295;
            this.one3.y = -30;
            this.game_js.tu1_js.one1.x = -295;
            this.game_js.tu1_js.one1.y = -30;
            break;

           case 5:
            this.one3.x = -95;
            this.one3.y = -150;
            this.game_js.tu1_js.one1.x = -95;
            this.game_js.tu1_js.one1.y = -150;
            break;

           case 6:
            this.one3.x = -300;
            this.one3.y = -170;
            this.game_js.tu1_js.one1.x = -300;
            this.game_js.tu1_js.one1.y = -170;
            break;

           case 7:
            this.one3.x = 250;
            this.one3.y = 60;
            this.game_js.tu1_js.one1.x = 250;
            this.game_js.tu1_js.one1.y = 60;
            break;

           case 8:
            this.one3.x = -90;
            this.one3.y = -90;
            this.game_js.tu1_js.one1.x = -90;
            this.game_js.tu1_js.one1.y = -90;
            break;

           case 9:
            this.one3.x = 0;
            this.one3.y = -175;
            this.game_js.tu1_js.one1.x = 0;
            this.game_js.tu1_js.one1.y = -175;
            break;

           case 10:
            this.one3.x = 260;
            this.one3.y = 90;
            this.game_js.tu1_js.one1.x = 260;
            this.game_js.tu1_js.one1.y = 90;
            break;

           case 11:
            this.one3.x = 180;
            this.one3.y = -160;
            this.game_js.tu1_js.one1.x = 180;
            this.game_js.tu1_js.one1.y = -160;
            break;

           case 12:
            this.one3.x = 280;
            this.one3.y = 0;
            this.game_js.tu1_js.one1.x = 280;
            this.game_js.tu1_js.one1.y = 0;
            break;

           case 13:
            this.one3.x = 55;
            this.one3.y = -120;
            this.game_js.tu1_js.one1.x = 55;
            this.game_js.tu1_js.one1.y = -120;
            break;

           case 14:
            this.one3.x = 240;
            this.one3.y = 123;
            this.game_js.tu1_js.one1.x = 240;
            this.game_js.tu1_js.one1.y = 123;
            break;

           case 15:
            this.one3.x = 0;
            this.one3.y = 10;
            this.game_js.tu1_js.one1.x = 0;
            this.game_js.tu1_js.one1.y = 10;
            break;

           case 16:
            this.one3.x = 70;
            this.one3.y = 40;
            this.game_js.tu1_js.one1.x = 70;
            this.game_js.tu1_js.one1.y = 40;
            break;

           case 17:
            this.one3.x = 200;
            this.one3.y = -150;
            this.game_js.tu1_js.one1.x = 200;
            this.game_js.tu1_js.one1.y = -150;
            break;

           case 18:
            this.one3.x = 310;
            this.one3.y = -110;
            this.game_js.tu1_js.one1.x = 310;
            this.game_js.tu1_js.one1.y = -110;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  GameTu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b132f+evmRKrpQwr80V3PrN", "GameTu");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        datu1: {
          default: null,
          type: cc.SpriteFrame
        },
        datu2: {
          default: null,
          type: cc.SpriteFrame
        },
        datu3: {
          default: null,
          type: cc.SpriteFrame
        },
        datu4: {
          default: null,
          type: cc.SpriteFrame
        },
        datu5: {
          default: null,
          type: cc.SpriteFrame
        },
        datu6: {
          default: null,
          type: cc.SpriteFrame
        },
        datu7: {
          default: null,
          type: cc.SpriteFrame
        },
        datu8: {
          default: null,
          type: cc.SpriteFrame
        },
        datu9: {
          default: null,
          type: cc.SpriteFrame
        },
        datu10: {
          default: null,
          type: cc.SpriteFrame
        },
        datu11: {
          default: null,
          type: cc.SpriteFrame
        },
        datu12: {
          default: null,
          type: cc.SpriteFrame
        },
        datu13: {
          default: null,
          type: cc.SpriteFrame
        },
        datu14: {
          default: null,
          type: cc.SpriteFrame
        },
        datu15: {
          default: null,
          type: cc.SpriteFrame
        },
        datu16: {
          default: null,
          type: cc.SpriteFrame
        },
        datu17: {
          default: null,
          type: cc.SpriteFrame
        },
        datu18: {
          default: null,
          type: cc.SpriteFrame
        },
        chenggong2: {
          default: null,
          type: cc.Node
        },
        chenggong1: {
          default: null,
          type: cc.Node
        },
        npcFab0: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        this.id = this.game_js.dateJs.date["guanqia"];
        switch (this.id) {
         case 1:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu1;
          break;

         case 2:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu2;
          break;

         case 3:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu3;
          break;

         case 4:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu4;
          break;

         case 5:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu5;
          break;

         case 6:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu6;
          break;

         case 7:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu7;
          break;

         case 8:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu8;
          break;

         case 9:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu9;
          break;

         case 10:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu10;
          break;

         case 11:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu11;
          break;

         case 12:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu12;
          break;

         case 13:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu13;
          break;

         case 14:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu14;
          break;

         case 15:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu15;
          break;

         case 16:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu16;
          break;

         case 17:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu17;
          break;

         case 18:
          this.node.getComponent(cc.Sprite).spriteFrame = this.datu18;
        }
        this.game_js.dijiguan.string = "\u7b2c" + this.id + "\u5173";
      },
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchDown, this);
      },
      resetGame: function resetGame() {
        this.one.destroy();
        this.one1.destroy();
        this.one2.destroy();
        this.one3.destroy();
      },
      touchDown: function touchDown(event) {
        if (0 == this.game_js.jieshu) {
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();
          switch (this.id) {
           case 1:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 180) < 30 && Math.abs(touchLoc.y - 780) < 30 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 257) < 30 && Math.abs(touchLoc.y - 630) < 30 && this.diertu();
            if (!(Math.abs(touchLoc.x - 180) < 30 && Math.abs(touchLoc.y - 780) < 30 || Math.abs(touchLoc.x - 257) < 30 && Math.abs(touchLoc.y - 630) < 30)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 2:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 147) < 20 && Math.abs(touchLoc.y - 725) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 184) < 20 && Math.abs(touchLoc.y - 690) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 147) < 20 && Math.abs(touchLoc.y - 725) < 20 || Math.abs(touchLoc.x - 184) < 20 && Math.abs(touchLoc.y - 690) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 3:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 500) < 20 && Math.abs(touchLoc.y - 780) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 420) < 20 && Math.abs(touchLoc.y - 690) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 500) < 20 && Math.abs(touchLoc.y - 780) < 20 || Math.abs(touchLoc.x - 420) < 20 && Math.abs(touchLoc.y - 690) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 4:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 586) < 20 && Math.abs(touchLoc.y - 762) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 54) < 20 && Math.abs(touchLoc.y - 753) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 586) < 20 && Math.abs(touchLoc.y - 762) < 20 || Math.abs(touchLoc.x - 54) < 20 && Math.abs(touchLoc.y - 753) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 5:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 580) < 20 && Math.abs(touchLoc.y - 728) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 266) < 20 && Math.abs(touchLoc.y - 616) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 580) < 20 && Math.abs(touchLoc.y - 728) < 20 || Math.abs(touchLoc.x - 266) < 20 && Math.abs(touchLoc.y - 616) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 6:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 516) < 20 && Math.abs(touchLoc.y - 660) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 52) < 20 && Math.abs(touchLoc.y - 606) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 516) < 20 && Math.abs(touchLoc.y - 660) < 20 || Math.abs(touchLoc.x - 52) < 20 && Math.abs(touchLoc.y - 606) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 7:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 31) < 20 && Math.abs(touchLoc.y - 689) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 600) < 20 && Math.abs(touchLoc.y - 840) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 31) < 20 && Math.abs(touchLoc.y - 689) < 20 || Math.abs(touchLoc.x - 600) < 20 && Math.abs(touchLoc.y - 840) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 8:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 383) < 20 && Math.abs(touchLoc.y - 705) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 260) < 20 && Math.abs(touchLoc.y - 682) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 383) < 20 && Math.abs(touchLoc.y - 705) < 20 || Math.abs(touchLoc.x - 260) < 20 && Math.abs(touchLoc.y - 682) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 9:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 315) < 20 && Math.abs(touchLoc.y - 755) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 360) < 20 && Math.abs(touchLoc.y - 609) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 315) < 20 && Math.abs(touchLoc.y - 755) < 20 || Math.abs(touchLoc.x - 360) < 20 && Math.abs(touchLoc.y - 609) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 10:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 360) < 20 && Math.abs(touchLoc.y - 776) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 627) < 20 && Math.abs(touchLoc.y - 860) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 360) < 20 && Math.abs(touchLoc.y - 776) < 20 || Math.abs(touchLoc.x - 627) < 20 && Math.abs(touchLoc.y - 860) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 11:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 383) < 20 && Math.abs(touchLoc.y - 709) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 543) < 20 && Math.abs(touchLoc.y - 611) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 383) < 20 && Math.abs(touchLoc.y - 709) < 20 || Math.abs(touchLoc.x - 543) < 20 && Math.abs(touchLoc.y - 611) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 12:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 308) < 20 && Math.abs(touchLoc.y - 890) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 646) < 20 && Math.abs(touchLoc.y - 782) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 308) < 20 && Math.abs(touchLoc.y - 890) < 20 || Math.abs(touchLoc.x - 646) < 20 && Math.abs(touchLoc.y - 782) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 13:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 625) < 20 && Math.abs(touchLoc.y - 730) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 422) < 20 && Math.abs(touchLoc.y - 654) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 625) < 20 && Math.abs(touchLoc.y - 730) < 20 || Math.abs(touchLoc.x - 422) < 20 && Math.abs(touchLoc.y - 654) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 14:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 385) < 20 && Math.abs(touchLoc.y - 610) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 605) < 20 && Math.abs(touchLoc.y - 887) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 385) < 20 && Math.abs(touchLoc.y - 610) < 20 || Math.abs(touchLoc.x - 605) < 20 && Math.abs(touchLoc.y - 887) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 15:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 508) < 20 && Math.abs(touchLoc.y - 832) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 358) < 20 && Math.abs(touchLoc.y - 789) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 508) < 20 && Math.abs(touchLoc.y - 832) < 20 || Math.abs(touchLoc.x - 358) < 20 && Math.abs(touchLoc.y - 789) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 16:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 582) < 20 && Math.abs(touchLoc.y - 833) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 430) < 20 && Math.abs(touchLoc.y - 817) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 582) < 20 && Math.abs(touchLoc.y - 833) < 20 || Math.abs(touchLoc.x - 430) < 20 && Math.abs(touchLoc.y - 817) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 17:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 158) < 20 && Math.abs(touchLoc.y - 693) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 552) < 20 && Math.abs(touchLoc.y - 615) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 158) < 20 && Math.abs(touchLoc.y - 693) < 20 || Math.abs(touchLoc.x - 552) < 20 && Math.abs(touchLoc.y - 615) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
            break;

           case 18:
            this.game_js.t < 1 && Math.abs(touchLoc.x - 382) < 20 && Math.abs(touchLoc.y - 695) < 20 && this.diyitu();
            this.game_js.t1 < 1 && Math.abs(touchLoc.x - 675) < 20 && Math.abs(touchLoc.y - 675) < 20 && this.diertu();
            if (!(Math.abs(touchLoc.x - 382) < 20 && Math.abs(touchLoc.y - 695) < 20 || Math.abs(touchLoc.x - 675) < 20 && Math.abs(touchLoc.y - 675) < 20)) {
              this.game_js.time_js.doCountdownTime();
              this.game_js.time_js.doCountdownTime();
            }
          }
        }
      },
      update: function update(dt) {},
      diyitu: function diyitu() {
        if (this.game_js.t < 1) {
          this.one = cc.instantiate(this.npcFab0);
          this.node.addChild(this.one);
          this.game_js.t++;
          this.game_js.tu2_js.one2 = cc.instantiate(this.npcFab0);
          this.game_js.tu2_js.node.addChild(this.game_js.tu2_js.one2);
          this.game_js.chenggong();
          switch (this.id) {
           case 1:
            this.one.x = -180;
            this.one.y = 0;
            this.game_js.tu2_js.one2.x = -180;
            this.game_js.tu2_js.one2.y = 0;
            break;

           case 2:
            this.one.x = -205;
            this.one.y = -60;
            this.game_js.tu2_js.one2.x = -205;
            this.game_js.tu2_js.one2.y = -60;
            break;

           case 3:
            this.one.x = 155;
            this.one.y = 0;
            this.game_js.tu2_js.one2.x = 155;
            this.game_js.tu2_js.one2.y = 0;
            break;

           case 4:
            this.one.x = 235;
            this.one.y = -20;
            this.game_js.tu2_js.one2.x = 235;
            this.game_js.tu2_js.one2.y = -20;
            break;

           case 5:
            this.one.x = 230;
            this.one.y = -65;
            this.game_js.tu2_js.one2.x = 230;
            this.game_js.tu2_js.one2.y = -65;
            break;

           case 6:
            this.one.x = 165;
            this.one.y = -115;
            this.game_js.tu2_js.one2.x = 165;
            this.game_js.tu2_js.one2.y = -115;
            break;

           case 7:
            this.one.x = -320;
            this.one.y = -85;
            this.game_js.tu2_js.one2.x = -320;
            this.game_js.tu2_js.one2.y = -85;
            break;

           case 8:
            this.one.x = 40;
            this.one.y = -80;
            this.game_js.tu2_js.one2.x = 40;
            this.game_js.tu2_js.one2.y = -80;
            break;

           case 9:
            this.one.x = -40;
            this.one.y = -35;
            this.game_js.tu2_js.one2.x = -40;
            this.game_js.tu2_js.one2.y = -35;
            break;

           case 10:
            this.one.x = 0;
            this.one.y = 0;
            this.game_js.tu2_js.one2.x = 0;
            this.game_js.tu2_js.one2.y = 0;
            break;

           case 11:
            this.one.x = 30;
            this.one.y = -70;
            this.game_js.tu2_js.one2.x = 30;
            this.game_js.tu2_js.one2.y = -70;
            break;

           case 12:
            this.one.x = -55;
            this.one.y = 130;
            this.game_js.tu2_js.one2.x = -55;
            this.game_js.tu2_js.one2.y = 130;
            break;

           case 13:
            this.one.x = 255;
            this.one.y = -60;
            this.game_js.tu2_js.one2.x = 255;
            this.game_js.tu2_js.one2.y = -60;
            break;

           case 14:
            this.one.x = 25;
            this.one.y = -180;
            this.game_js.tu2_js.one2.x = 25;
            this.game_js.tu2_js.one2.y = -180;
            break;

           case 15:
            this.one.x = 160;
            this.one.y = 60;
            this.game_js.tu2_js.one2.x = 160;
            this.game_js.tu2_js.one2.y = 60;
            break;

           case 16:
            this.one.x = 220;
            this.one.y = 50;
            this.game_js.tu2_js.one2.x = 220;
            this.game_js.tu2_js.one2.y = 50;
            break;

           case 17:
            this.one.x = -210;
            this.one.y = -70;
            this.game_js.tu2_js.one2.x = -210;
            this.game_js.tu2_js.one2.y = -70;
            break;

           case 18:
            this.one.x = 20;
            this.one.y = -75;
            this.game_js.tu2_js.one2.x = 20;
            this.game_js.tu2_js.one2.y = -75;
          }
        }
      },
      diertu: function diertu() {
        if (this.game_js.t1 < 1) {
          this.one1 = cc.instantiate(this.npcFab0);
          this.node.addChild(this.one1);
          this.game_js.chenggong();
          this.game_js.t1++;
          this.game_js.tu2_js.one3 = cc.instantiate(this.npcFab0);
          this.game_js.tu2_js.node.addChild(this.game_js.tu2_js.one3);
          switch (this.id) {
           case 1:
            this.one1.x = -110;
            this.one1.y = -145;
            this.game_js.tu2_js.one3.x = -110;
            this.game_js.tu2_js.one3.y = -145;
            break;

           case 2:
            this.one1.x = -175;
            this.one1.y = -85;
            this.game_js.tu2_js.one3.x = -175;
            this.game_js.tu2_js.one3.y = -85;
            break;

           case 3:
            this.one1.x = 67;
            this.one1.y = -100;
            this.game_js.tu2_js.one3.x = 67;
            this.game_js.tu2_js.one3.y = -100;
            break;

           case 4:
            this.one1.x = -295;
            this.one1.y = -30;
            this.game_js.tu2_js.one3.x = -295;
            this.game_js.tu2_js.one3.y = -30;
            break;

           case 5:
            this.one1.x = -95;
            this.one1.y = -150;
            this.game_js.tu2_js.one3.x = -95;
            this.game_js.tu2_js.one3.y = -150;
            break;

           case 6:
            this.one1.x = -300;
            this.one1.y = -170;
            this.game_js.tu2_js.one3.x = -300;
            this.game_js.tu2_js.one3.y = -170;
            break;

           case 7:
            this.one1.x = 250;
            this.one1.y = 60;
            this.game_js.tu2_js.one3.x = 250;
            this.game_js.tu2_js.one3.y = 60;
            break;

           case 8:
            this.one1.x = -90;
            this.one1.y = -90;
            this.game_js.tu2_js.one3.x = -90;
            this.game_js.tu2_js.one3.y = -90;
            break;

           case 9:
            this.one1.x = 0;
            this.one1.y = -175;
            this.game_js.tu2_js.one3.x = 0;
            this.game_js.tu2_js.one3.y = -175;
            break;

           case 10:
            this.one1.x = 260;
            this.one1.y = 90;
            this.game_js.tu2_js.one3.x = 260;
            this.game_js.tu2_js.one3.y = 90;
            break;

           case 11:
            this.one1.x = 180;
            this.one1.y = -160;
            this.game_js.tu2_js.one3.x = 180;
            this.game_js.tu2_js.one3.y = -160;
            break;

           case 12:
            this.one1.x = 280;
            this.one1.y = 0;
            this.game_js.tu2_js.one3.x = 280;
            this.game_js.tu2_js.one3.y = 0;
            break;

           case 13:
            this.one1.x = 55;
            this.one1.y = -120;
            this.game_js.tu2_js.one3.x = 55;
            this.game_js.tu2_js.one3.y = -120;
            break;

           case 14:
            this.one1.x = 240;
            this.one1.y = 123;
            this.game_js.tu2_js.one3.x = 240;
            this.game_js.tu2_js.one3.y = 123;
            break;

           case 15:
            this.one1.x = 0;
            this.one1.y = 10;
            this.game_js.tu2_js.one3.x = 0;
            this.game_js.tu2_js.one3.y = 10;
            break;

           case 16:
            this.one1.x = 70;
            this.one1.y = 40;
            this.game_js.tu2_js.one3.x = 70;
            this.game_js.tu2_js.one3.y = 40;
            break;

           case 17:
            this.one1.x = 200;
            this.one1.y = -150;
            this.game_js.tu2_js.one3.x = 200;
            this.game_js.tu2_js.one3.y = -150;
            break;

           case 18:
            this.one1.x = 310;
            this.one1.y = -110;
            this.game_js.tu2_js.one3.x = 310;
            this.game_js.tu2_js.one3.y = -110;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Gametime: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "126f0mmwohKXa/5atf0slcR", "Gametime");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        jishi: {
          default: null,
          type: cc.Label
        },
        cardFab: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        this.shijian = 30;
        this.shijian1 = 30;
      },
      start: function start() {
        this.schedule(this.doCountdownTime, 1);
        this.schedule(this.doCountdownTime1, .1);
      },
      resetGame: function resetGame() {
        this.shijian = 30;
      },
      doCountdownTime: function doCountdownTime() {
        if (0 == this.game_js.jieshu && this.shijian > 0) {
          this.shijian -= 1;
          this.game_js.timedao.scaleX = this.game_js.timedao.scaleX - 1 / 30;
          this.jishi.string = "" + this.shijian;
          this.countDownShow(this.shijian);
        }
      },
      doCountdownTime1: function doCountdownTime1() {
        if (this.shijian1 > 0) {
          this.shijian1 -= .1;
          this.countDownShow1(this.shijian1);
        }
      },
      countDownShow1: function countDownShow1(temp) {
        temp <= 0 && this.unschedule(this.doCountdownTime1);
      },
      countDownShow: function countDownShow(temp) {
        if (temp <= 0) {
          this.unschedule(this.doCountdownTime);
          this.game_js.jieshu = 1;
          this.game_js.heise.opacity = 100;
          this.game_js.shibai();
        }
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  GuanS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b2b9rspKJH14n61dLpTUN7", "GuanS");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        suo: {
          default: null,
          type: cc.Node
        },
        num: {
          default: null,
          type: cc.Label
        },
        zuijia: {
          default: null,
          type: cc.Label
        }
      },
      init: function init(id) {
        this.id = id;
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  MainGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2abfbMdLb5NZJNYT6e0uuHX", "MainGame");
    "use strict";
    var _properties;
    cc.Class({
      extends: cc.Component,
      properties: (_properties = {
        heise: {
          default: null,
          type: cc.Node
        },
        fanhui: {
          default: null,
          type: cc.Node
        },
        guanqia: {
          default: null,
          type: cc.Node
        },
        dianzi: {
          default: null,
          type: cc.Node
        }
      }, _properties["dianzi"] = {
        default: null,
        type: cc.Node
      }, _properties.dijiguan = {
        default: null,
        type: cc.Label
      }, _properties.jishi = {
        default: null,
        type: cc.Label
      }, _properties.tu1 = {
        default: null,
        type: cc.Node
      }, _properties.tu2 = {
        default: null,
        type: cc.Node
      }, _properties.time2 = {
        default: null,
        type: cc.Node
      }, _properties.cardFab = {
        default: null,
        type: cc.Prefab
      }, _properties.cardFab1 = {
        default: null,
        type: cc.Prefab
      }, _properties.cardFab2 = {
        default: null,
        type: cc.Prefab
      }, _properties.timedao = {
        default: null,
        type: cc.Node
      }, _properties.tx = {
        default: null,
        type: cc.Node
      }, _properties.jinjiantou = {
        default: null,
        type: cc.Prefab
      }, _properties),
      onLoad: function onLoad() {
        this.dateJs = cc.find("mainData").getComponent("Maingong");
        this.jieshu = 0;
        this.chupeng = 0;
        this.tu1_js = this.tu1.getComponent("GameTu");
        this.tu1_js.game_js = this;
        this.tu2_js = this.tu2.getComponent("GameTu1");
        this.tu2_js.game_js = this;
        this.time_js = this.time2.getComponent("Gametime");
        this.time_js.game_js = this;
        this.t = 0;
        this.t1 = 0;
        this.quanshengcheng = 0;
        this.diangeshu = this.dianzi.getChildByName("geshu").getComponent(cc.Label);
        this.m = 0;
        this.score = 1;
        this.shenglit = 0;
        this.cunzai = 0;
        this.txhong = 0;
        this.txcunzai = 0;
        this.tishik = 0;
        this.tishicunzai = 0;
        this.tishicunzait = 0;
        this.tis = 0;
        this.yingshi = 0;
      },
      shibai: function shibai() {
        this.diyi = cc.instantiate(this.cardFab);
        this.node.addChild(this.diyi);
        this.sheng = this.diyi.getComponent("Shengli");
        this.yingshi = 1;
        this.yongshi();
        this.sheng.fanhui.on(cc.Node.EventType.TOUCH_START, this.touchDown2, this);
        this.sheng.xiayiguan.on(cc.Node.EventType.TOUCH_START, this.touchDown4, this);
      },
      touchDown2: function touchDown2(event) {
        if (1 == this.jieshu) {
          this.cunzai = 0;
          cc.director.loadScene("MainMenu");
          this.diyi.destroy();
          this.heise.opacity = 0;
          this.cunzai = 0;
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();
        }
      },
      touchDown4: function touchDown4(event) {
        if (this.dateJs.date["tili"] <= 0) {
          if (0 == this.chupeng) {
            this.chupeng = 1;
            this.diyi5 = cc.instantiate(this.cardFab1);
            this.node.addChild(this.diyi5);
            this.diyi5.y = 50;
            this.sheng6 = this.diyi5.getComponent("Menuti");
            this.sheng6.goumai.on(cc.Node.EventType.TOUCH_START, this.touchDown16, this);
            this.sheng6.cuo.on(cc.Node.EventType.TOUCH_START, this.touchDown15, this);
          }
        } else {
          this.dateJs.date["tili"] -= 1;
          this.dateJs.save();
          this.diyi.destroy();
          this.heise.opacity = 0;
          cc.director.loadScene("MainGame");
        }
      },
      touchDown16: function touchDown16(event) {
        if (this.dateJs.date["qian"] >= 100) {
          this.dateJs.date["qian"] -= 100;
          this.dateJs.date["tili"] += 1;
          this.dateJs.save();
          this.chupeng = 0;
          this.diyi5.destroy();
        } else {
          this.sheng6.jinbibugou.string = "\u6ca1\u94b1\u4e86";
          this.sheng6.jinbibugou.node.opacity = 255;
          cc.tween(this.sheng6.jinbibugou.node).to(1, {
            opacity: 0
          }).start();
        }
      },
      touchDown15: function touchDown15(event) {
        this.chupeng = 0;
        this.diyi5.destroy();
      },
      resetGame: function resetGame() {
        this.jieshu = 0;
        this.t = 0;
        this.t1 = 0;
        this.quanshengcheng = 0;
        this.m = 0;
        this.tu1_js.chenggong2.opacity = 255;
        this.tu2_js.chenggong2.opacity = 255;
        this.time_js.resetGame();
      },
      chenggong: function chenggong() {
        this.m += 1;
        if (1 == this.m) {
          if (1 == this.tishicunzai) {
            this.jinjian.destroy();
            this.tishicunzai = 0;
            this.tishik = 0;
          }
          this.tu1_js.chenggong2.opacity = 0;
        }
        if (2 == this.m) {
          if (1 == this.tishicunzai) {
            this.jinjian.destroy();
            this.tishicunzai = 0;
            this.tishik = 0;
          }
          this.tu2_js.chenggong1.opacity = 0;
        }
      },
      start: function start() {
        this.fanhui.on(cc.Node.EventType.TOUCH_START, this.touchDown, this);
        this.dianzi.on(cc.Node.EventType.TOUCH_START, this.touchDown1, this);
        this.guanqia.on(cc.Node.EventType.TOUCH_START, this.touchDown20, this);
      },
      touchDown: function touchDown(event) {
        if (0 == this.jieshu) {
          cc.director.loadScene("MainMenu");
          var touches = event.getTouches();
          var touchLoc = touches[0].getLocation();
        }
      },
      touchDown20: function touchDown20(event) {
        cc.director.loadScene("MainGuan");
      },
      touchDown1: function touchDown1(event) {
        if (0 == this.jieshu) {
          if (this.dateJs.date["dianzi"] <= 0) {
            this.jieshu = 1;
            this.dateJs.date["dianzi"] = 0;
            this.diyi10 = cc.instantiate(this.cardFab2);
            this.diyi10.y = -50;
            this.node.addChild(this.diyi10);
            this.dateJs.save();
            this.sheng10 = this.diyi10.getComponent("Menuti");
            this.sheng10.goumai.on(cc.Node.EventType.TOUCH_START, this.touchDown21, this);
            this.sheng10.cuo.on(cc.Node.EventType.TOUCH_START, this.touchDown22, this);
          } else if (this.dateJs.date["dianzi"] > 0 && 0 == this.tishik) {
            this.dateJs.date["dianzi"] -= 1;
            this.jinjian = cc.instantiate(this.jinjiantou);
            this.node.addChild(this.jinjian);
            if (this.t < 1) {
              this.tishik = 1;
              this.tishicunzai = 1;
              this.diyitutishi();
            } else if (this.t1 < 1) {
              this.tishik = 1;
              this.tishicunzai = 1;
              this.diertutishi();
            }
          }
          this.diangeshu.string = "" + this.dateJs.date["dianzi"];
        }
        this.dateJs.save();
      },
      touchDown21: function touchDown21(event) {
        if (this.dateJs.date["qian"] >= 200) {
          this.dateJs.date["qian"] -= 200;
          this.dateJs.date["dianzi"] += 1;
          this.dateJs.save();
          this.jieshu = 0;
          this.diyi10.destroy();
        } else {
          this.sheng10.jinbibugou.string = "\u91d1\u5e01\u4e0d\u591f";
          this.sheng10.jinbibugou.node.opacity = 255;
          cc.tween(this.sheng10.jinbibugou.node).to(1, {
            opacity: 0
          }).start();
        }
      },
      touchDown22: function touchDown22(event) {
        this.jieshu = 0;
        this.diyi10.destroy();
      },
      xiayiguan: function xiayiguan() {
        this.diyi.destroy();
        this.heise.opacity = 0;
        this.cunzai = 0;
      },
      shengli: function shengli() {
        this.txcunzai = 1;
        this.diyi = cc.instantiate(this.cardFab);
        this.node.addChild(this.diyi);
        this.shenglit = 1;
        var jibi = Math.floor(5 * Math.random() + 10);
        this.dateJs.date["qian"] += jibi;
        this.dateJs.save();
        this.sheng = this.diyi.getComponent("Shengli");
        this.sheng.num.string = "\u6210\u529f";
        this.sheng.xaiyi.string = "\u4e0b\u4e00\u5173";
        this.cunzai = 1;
        this.tx.opacity = 0;
        this.yongshi();
        if (1 == this.cunzai) {
          this.sheng.fanhui.on(cc.Node.EventType.TOUCH_START, this.touchDown2, this);
          this.sheng.xiayiguan.on(cc.Node.EventType.TOUCH_START, this.touchDown3, this);
        }
        this.shenglit += 1;
      },
      touchDown3: function touchDown3(event) {
        if (this.dateJs.date["tili"] <= 0) {
          this.cunzai = 0;
          if (0 == this.chupeng) {
            this.chupeng = 1;
            this.diyi4 = cc.instantiate(this.cardFab1);
            this.node.addChild(this.diyi4);
            this.diyi4.y = 50;
            this.sheng5 = this.diyi4.getComponent("Menuti");
            this.sheng5.goumai.on(cc.Node.EventType.TOUCH_START, this.touchDown13, this);
            this.sheng5.cuo.on(cc.Node.EventType.TOUCH_START, this.touchDown14, this);
          }
        } else {
          this.cunzai = 0;
          this.dateJs.date["tili"] -= 1;
          this.dateJs.save();
          this.diyi.destroy();
          this.heise.opacity = 0;
          this.shibai.opacity = 0;
          cc.director.loadScene("MainGame");
        }
      },
      touchDown13: function touchDown13(event) {
        if (this.dateJs.date["qian"] >= 100) {
          this.dateJs.date["qian"] -= 100;
          this.dateJs.date["tili"] += 1;
          this.dateJs.save();
          this.chupeng = 0;
          this.diyi4.destroy();
        } else {
          this.sheng5.jinbibugou.string = "\u6ca1\u94b1\u4e86";
          this.sheng5.jinbibugou.node.opacity = 255;
          cc.tween(this.sheng5.jinbibugou.node).to(1, {
            opacity: 0
          }).start();
        }
      },
      touchDown14: function touchDown14(event) {
        this.chupeng = 0;
        this.diyi4.destroy();
      },
      yongshi: function yongshi() {
        if (1 == this.yingshi) this.sheng.zuizhongshijian.node.opacity = 0; else {
          this.sheng.zuizhongshijian.node.opacity = 255;
          this.sheng.zuizhongshijian.string = "\u7528\u65f6\uff1a" + (30 - this.time_js.shijian);
        }
        this.dateJs.date["zuikuaitime"][this.dateJs.date["guanqia"] - 2] > 30 - this.time_js.shijian && (this.dateJs.date["zuikuaitime"][this.dateJs.date["guanqia"] - 2] = 30 - this.time_js.shijian);
        18 == this.dateJs.date["guanqia"] && (this.dateJs.date["zuikuaitime"][this.dateJs.date["guanqia"] - 1] = 30 - this.time_js.shijian);
      },
      update: function update(dt) {
        this.diangeshu.string = "" + this.dateJs.date["dianzi"];
        if (this.t >= 1 && this.t1 >= 1) {
          this.jieshu = 1;
          if (0 == this.shenglit) {
            if (this.dateJs.date["guanqia"] < 18) {
              this.dateJs.date["guanqia"] += 1;
              this.dateJs.date["guan1"] < this.dateJs.date["guanqia"] && (this.dateJs.date["guan1"] = this.dateJs.date["guanqia"]);
            }
            this.dateJs.save();
            this.shengli();
          }
          this.heise.opacity = 100;
        }
        if (0 == this.txcunzai) if (this.time_js.shijian <= 5 && this.time_js.shijian > 0) switch (this.txhong) {
         case 0:
          this.tx.opacity += 5;
          if (this.tx.opacity >= 255) {
            this.tx.opacity = 255;
            this.txhong = 1;
          }
          break;

         case 1:
          this.tx.opacity -= 5;
          if (this.tx.opacity <= 0) {
            this.tx.opacity = 0;
            this.txhong = 0;
          }
        } else this.time_js.shijian <= 0 && (this.tx.opacity = 150);
        if (1 == this.tishicunzai) switch (this.tishicunzait) {
         case 0:
          this.jinjian.y -= .5;
          this.tis += 1;
          if (this.tis >= 20) {
            this.tishicunzait = 1;
            this.tis = 0;
          }
          break;

         case 1:
          this.jinjian.y += .5;
          this.tis += 1;
          if (this.tis >= 20) {
            this.tishicunzait = 0;
            this.tis = 0;
          }
        }
      },
      diyitutishi: function diyitutishi() {
        switch (this.dateJs.date["guanqia"]) {
         case 1:
          this.jinjian.x = -180;
          this.jinjian.y = 260;
          break;

         case 2:
          this.jinjian.x = -205;
          this.jinjian.y = 170;
          break;

         case 3:
          this.jinjian.x = 155;
          this.jinjian.y = 230;
          break;

         case 4:
          this.jinjian.x = 235;
          this.jinjian.y = 220;
          break;

         case 5:
          this.jinjian.x = 230;
          this.jinjian.y = 170;
          break;

         case 6:
          this.jinjian.x = 165;
          this.jinjian.y = 150;
          break;

         case 7:
          this.jinjian.x = -320;
          this.jinjian.y = 140;
          break;

         case 8:
          this.jinjian.x = 40;
          this.jinjian.y = 170;
          break;

         case 9:
          this.jinjian.x = -40;
          this.jinjian.y = 220;
          break;

         case 10:
          this.jinjian.x = 0;
          this.jinjian.y = 220;
          break;

         case 11:
          this.jinjian.x = 30;
          this.jinjian.y = 170;
          break;

         case 12:
          this.jinjian.x = -55;
          this.jinjian.y = 340;
          break;

         case 13:
          this.jinjian.x = 255;
          this.jinjian.y = 220;
          break;

         case 14:
          this.jinjian.x = 25;
          this.jinjian.y = 70;
          break;

         case 15:
          this.jinjian.x = 160;
          this.jinjian.y = 260;
          break;

         case 16:
          this.jinjian.x = 220;
          this.jinjian.y = 300;
          break;

         case 17:
          this.jinjian.x = -210;
          this.jinjian.y = 150;
          break;

         case 18:
          this.jinjian.x = 20;
          this.jinjian.y = 150;
        }
      },
      diertutishi: function diertutishi() {
        switch (this.dateJs.date["guanqia"]) {
         case 1:
          this.jinjian.x = -100;
          this.jinjian.y = 80;
          break;

         case 2:
          this.jinjian.x = -175;
          this.jinjian.y = 160;
          break;

         case 3:
          this.jinjian.x = 67;
          this.jinjian.y = 160;
          break;

         case 4:
          this.jinjian.x = -295;
          this.jinjian.y = 200;
          break;

         case 5:
          this.jinjian.x = -95;
          this.jinjian.y = 110;
          break;

         case 6:
          this.jinjian.x = -300;
          this.jinjian.y = 90;
          break;

         case 7:
          this.jinjian.x = 250;
          this.jinjian.y = 280;
          break;

         case 8:
          this.jinjian.x = -90;
          this.jinjian.y = 140;
          break;

         case 9:
          this.jinjian.x = 0;
          this.jinjian.y = 90;
          break;

         case 10:
          this.jinjian.x = 260;
          this.jinjian.y = 310;
          break;

         case 11:
          this.jinjian.x = 180;
          this.jinjian.y = 80;
          break;

         case 12:
          this.jinjian.x = 280;
          this.jinjian.y = 220;
          break;

         case 13:
          this.jinjian.x = 55;
          this.jinjian.y = 110;
          break;

         case 14:
          this.jinjian.x = 240;
          this.jinjian.y = 320;
          break;

         case 15:
          this.jinjian.x = 0;
          this.jinjian.y = 220;
          break;

         case 16:
          this.jinjian.x = 70;
          this.jinjian.y = 270;
          break;

         case 17:
          this.jinjian.x = 200;
          this.jinjian.y = 70;
          break;

         case 18:
          this.jinjian.x = 310;
          this.jinjian.y = 120;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  MainGuan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba158nAZPhB36wwOnHziL/j", "MainGuan");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        cardFab: {
          default: null,
          type: cc.Prefab
        },
        cardFab1: {
          default: null,
          type: cc.Prefab
        },
        fanhui: {
          default: null,
          type: cc.Node
        },
        goumai: {
          default: null,
          type: cc.Node
        },
        tili: {
          default: null,
          type: cc.Label
        },
        tilifu: {
          default: null,
          type: cc.Label
        },
        jinbimeile100: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {
        this.dateJs = cc.find("mainData").getComponent("Maingong");
        this.guan = [];
        this.suoda = 18;
        this.score = 0;
        this.chupeng = 0;
        this.jinbigoule = 0;
        this.jinbigoulet = 0;
        this.guankai = 0;
        this.cardJS = [];
        for (var i = 0; i < 18; i++) {
          this.guan[i] = cc.instantiate(this.cardFab);
          this.node.addChild(this.guan[i]);
          this.guan[i].x = i % 4 * 135 - 200;
          this.guan[i].y = 110 - 150 * Math.floor(i / 4);
          this.score++;
          this.cardJS[i] = this.guan[i].getComponent("GuanS");
          this.cardJS[i].init(i);
          this.cardJS[i].num.string = "" + this.score;
        }
        for (var j = 0; j < this.dateJs.date["guan1"]; j++) {
          this.cardJS[j].num.node.opacity = 255;
          this.cardJS[j].zuijia.node.opacity = 255;
          30 == this.dateJs.date["zuikuaitime"][j] ? this.cardJS[j].zuijia.string = "\u6ca1\u6709\u6700\u4f73" : this.cardJS[j].zuijia.string = "\u6700\u4f73:" + this.dateJs.date["zuikuaitime"][j] + "\u79d2";
          this.cardJS[j].suo.opacity = 0;
          this.guan[j].on(cc.Node.EventType.TOUCH_START, this.touchDown, this);
        }
      },
      touchDown: function touchDown(event) {
        if (0 == this.chupeng) if (this.dateJs.date["tili"] > 0) {
          var js = event.target.getComponent("GuanS");
          this.guankai = js.id + 1;
          this.dateJs.date["guanqia"] = this.guankai;
          this.dateJs.save();
          cc.director.loadScene("MainGame");
          this.dateJs.date["tili"] -= 1;
          this.dateJs.date["tili"] == this.dateJs.date["tilishangxian"] - 1 && (this.dateJs.date["begin"] = this.dateJs.getTime());
          this.dateJs.save();
        } else {
          this.jinbigoule = 1;
          this.jinbigoulet = 0;
        }
      },
      start: function start() {
        this.fanhui.on(cc.Node.EventType.TOUCH_START, this.touchDown2, this);
        this.goumai.on(cc.Node.EventType.TOUCH_START, this.touchDown1, this);
      },
      touchDown11: function touchDown11(event) {
        this.diyi.destroy();
        this.chupeng = 0;
      },
      touchDown10: function touchDown10(event) {
        if (this.dateJs.date["tili"] < this.dateJs.date["tilishangxian"]) if (this.dateJs.date["qian"] > 200) {
          this.dateJs.date["qian"] -= 200;
          this.dateJs.date["tili"] += 1;
          this.chupeng = 0;
          this.diyi.destroy();
          this.dateJs.save();
        } else {
          this.sheng.jinbibugou.string = "\u6ca1\u94b1\u4e86";
          this.sheng.jinbibugou.node.opacity = 255;
          cc.tween(this.sheng.jinbibugou.node).to(1, {
            opacity: 0
          }).start();
        } else {
          this.sheng.jinbibugou.string = "\u4f53\u529b\u6ee1\u4e86";
          this.sheng.jinbibugou.node.opacity = 255;
          cc.tween(this.sheng.jinbibugou.node).to(1, {
            opacity: 0
          }).start();
        }
      },
      touchDown2: function touchDown2(event) {
        cc.director.loadScene("MainMenu");
      },
      touchDown1: function touchDown1(event) {
        if (0 == this.chupeng) {
          this.diyi = cc.instantiate(this.cardFab1);
          this.node.addChild(this.diyi);
          this.diyi.y = 50;
          this.chupeng = 1;
          this.sheng = this.diyi.getComponent("Menuti");
          if (1 == this.chupeng) {
            this.sheng.goumai.on(cc.Node.EventType.TOUCH_START, this.touchDown10, this);
            this.sheng.cuo.on(cc.Node.EventType.TOUCH_START, this.touchDown11, this);
          }
        }
      },
      update: function update(dt) {
        this.tili.string = "" + this.dateJs.date["tili"];
        if (1 == this.jinbigoule) switch (this.jinbigoulet) {
         case 0:
          this.jinbimeile100.node.opacity = 255;
          this.jinbigoulet = 1;
          break;

         case 1:
          this.jinbimeile100.node.opacity -= 4;
          if (this.jinbimeile100.node.opacity <= 0) {
            this.jinbimeile100.node.opacity = 0;
            this.jinbigoule = 0;
            this.jinbigoulet = 0;
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  MainMenu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26a278LKHZBR5HemGzY0nM9", "MainMenu");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        kaishi: {
          default: null,
          type: cc.Node
        },
        jingli: {
          default: null,
          type: cc.Label
        },
        jinbixitong: {
          default: null,
          type: cc.Label
        },
        level: {
          default: null,
          type: cc.Label
        },
        shijian: {
          default: null,
          type: cc.Label
        },
        jinqian: {
          default: null,
          type: cc.Label
        },
        xuanguan: {
          default: null,
          type: cc.Node
        },
        beiyong: {
          default: null,
          type: cc.Node
        },
        jiahao: {
          default: null,
          type: cc.Node
        },
        shengjit: {
          default: null,
          type: cc.Node
        },
        quqian: {
          default: null,
          type: cc.Node
        },
        shangxian: {
          default: null,
          type: cc.Node
        },
        manji: {
          default: null,
          type: cc.Label
        },
        cardFab: {
          default: null,
          type: cc.Prefab
        }
      },
      onLoad: function onLoad() {
        this.dateJs = cc.find("mainData").getComponent("Maingong");
        this.chupeng = 0;
        cc.director.preloadScene("MainGame", function() {});
        cc.director.preloadScene("MainGuan", function() {});
        this.jishi = 60;
        this.manjizhuangtai = 0;
        this.manjizhuangtait = 0;
        this.jinbigoule = 0;
        this.jinbigoulet = 0;
      },
      start: function start() {
        this.kaishi.on(cc.Node.EventType.TOUCH_START, this.touchDown, this);
        this.xuanguan.on(cc.Node.EventType.TOUCH_START, this.touchDown1, this);
        this.quqian.on(cc.Node.EventType.TOUCH_START, this.onBut1Down, this);
        this.shengjit.on(cc.Node.EventType.TOUCH_START, this.onBut2Down, this);
        this.shangxian.on(cc.Node.EventType.TOUCH_START, this.touchDown20, this);
        this.jiahao.on(cc.Node.EventType.TOUCH_START, this.touchDown2, this);
        this.beiyong.on(cc.Node.EventType.TOUCH_START, this.touchDown12, this);
      },
      touchDown: function touchDown(event) {
        if (this.dateJs.date["tili"] > 0) {
          cc.director.loadScene("MainGame");
          this.dateJs.date["tili"] -= 1;
          this.dateJs.save();
        } else {
          this.manji.string = "\u4f53\u529b\u4e0d\u591f\u4e86\uff0c\u8bf7\u8d2d\u4e70";
          this.manjizhuangtai = 1;
          this.manjizhuangtait = 0;
        }
        this.dateJs.date["tili"] == this.dateJs.date["tilishangxian"] - 1 && (this.dateJs.date["begin"] = this.dateJs.getTime());
      },
      touchDown2: function touchDown2(event) {
        if (0 == this.chupeng) {
          this.diyi = cc.instantiate(this.cardFab);
          this.node.addChild(this.diyi);
          this.diyi.y = 50;
          this.chupeng = 1;
          this.sheng = this.diyi.getComponent("Menuti");
          this.sheng.goumai.on(cc.Node.EventType.TOUCH_START, this.touchDown10, this);
          this.sheng.cuo.on(cc.Node.EventType.TOUCH_START, this.touchDown11, this);
        }
      },
      touchDown10: function touchDown10(event) {
        if (this.dateJs.date["tili"] < this.dateJs.date["tilishangxian"]) if (this.dateJs.date["qian"] >= 200) {
          this.dateJs.date["qian"] -= 200;
          this.dateJs.date["tili"] += 1;
          this.diyi.destroy();
          this.chupeng = 0;
          this.dateJs.save();
        } else {
          this.sheng.jinbibugou.string = "\u6ca1\u94b1\u4e86";
          this.sheng.jinbibugou.node.opacity = 255;
          cc.tween(this.sheng.jinbibugou.node).to(1, {
            opacity: 0
          }).start();
        } else {
          this.sheng.jinbibugou.string = "\u4f53\u529b\u6ee1\u4e86";
          this.sheng.jinbibugou.node.opacity = 255;
          cc.tween(this.sheng.jinbibugou.node).to(1, {
            opacity: 0
          }).start();
        }
      },
      touchDown11: function touchDown11(event) {
        this.diyi.destroy();
        this.chupeng = 0;
      },
      touchDown20: function touchDown20(event) {
        if (this.dateJs.date["qian"] >= 500) if (this.dateJs.date["tilishangxian"] < 20) {
          this.dateJs.date["tilishangxian"] += 10;
          this.dateJs.date["qian"] -= 500;
          this.dateJs.save();
          if (10 == this.dateJs.date["tili"]) {
            this.dateJs.date["begin"] = this.dateJs.getTime();
            this.dateJs.save();
          }
        } else {
          this.manji.string = "\u4f53\u529b\u4e0a\u9650\u6ee1\u7ea7";
          this.manjizhuangtai = 1;
          this.manjizhuangtait = 0;
        } else {
          this.manji.string = "\u91d1\u94b1\u4e0d\u591f";
          this.manjizhuangtai = 1;
          this.manjizhuangtait = 0;
        }
      },
      touchDown12: function touchDown12(event) {
        if (0 == this.chupeng) {
          this.diyi1 = cc.instantiate(this.cardFab);
          this.node.addChild(this.diyi1);
          this.diyi1.y = 50;
          this.sheng = this.diyi1.getComponent("Menuti");
          this.sheng.title.string = "\u5907\u7528\u4f53\u529b";
          this.sheng.jiangli.string = "\u9886\u53d6";
          this.sheng.ziliao.string = "\u6700\u591a\u9886\u53d6\u4e09\u4e2a\u4f53\u529b\u5466";
          this.chupeng = 1;
          this.sheng.num.string = "" + this.dateJs.date["beiyong"];
          this.sheng.goumai.on(cc.Node.EventType.TOUCH_START, this.touchDown13, this);
          this.sheng.cuo.on(cc.Node.EventType.TOUCH_START, this.touchDown14, this);
        }
      },
      touchDown13: function touchDown13(event) {
        if (this.dateJs.date["beiyong"] > 0) {
          if (this.dateJs.date["tili"] < this.dateJs.date["tilishangxian"]) {
            if (this.dateJs.date["tili"] + this.dateJs.date["beiyong"] < this.dateJs.date["tilishangxian"]) {
              this.dateJs.date["tili"] += this.dateJs.date["beiyong"];
              this.dateJs.date["beiyong"] = 0;
              this.dateJs.date["beiyongzui"] = this.dateJs.getTime();
            } else {
              var tong = this.dateJs.date["tili"] + this.dateJs.date["beiyong"];
              this.shijian.node.opacity = 0;
              this.dateJs.date["tili"] = this.dateJs.date["tilishangxian"];
              this.dateJs.date["beiyong"] = tong - this.dateJs.date["tilishangxian"];
              this.dateJs.save();
            }
            this.chupeng = 0;
            this.dateJs.save();
            this.diyi1.destroy();
          }
        } else {
          this.sheng.jinbibugou.string = "\u5907\u7528\u4f53\u529b\u88ab\u9886\u5b8c\u4e86";
          this.sheng.jinbibugou.node.opacity = 255;
          cc.tween(this.sheng.jinbibugou.node).to(1, {
            opacity: 0
          }).start();
        }
      },
      touchDown14: function touchDown14(event) {
        this.chupeng = 0;
        this.diyi1.destroy();
      },
      touchDown1: function touchDown1(event) {
        cc.director.loadScene("MainGuan");
      },
      update: function update(dt) {
        var timeLenght = 1e3;
        this.jingli.string = "" + this.dateJs.date["tili"];
        this.jinqian.string = "\u91d1\u94b1:" + this.dateJs.date["qian"];
        if (this.dateJs.date["tili"] < this.dateJs.date["tilishangxian"]) {
          var now = this.dateJs.getTime();
          if (now - this.dateJs.date["begin"] >= timeLenght) {
            var num = Math.floor((now - this.dateJs.date["begin"]) / timeLenght);
            this.shijian.node.opacity = 255;
            if (num >= 60) {
              this.dateJs.date["tili"] += Math.floor(num / 60);
              this.dateJs.date["begin"] += timeLenght * Math.floor(num / 60) * 60;
              if (this.dateJs.date["tili"] >= this.dateJs.date["tilishangxian"]) {
                this.dateJs.date["tili"] = this.dateJs.date["tilishangxian"];
                this.shijian.node.opacity = 0;
              }
            }
            var num = Math.floor((now - this.dateJs.date["begin"]) / timeLenght);
            this.jishi = 60 - num;
            this.dateJs.date["taiyang"] = this.jishi;
            this.dateJs.save();
            this.shijian.string = "" + this.jishi;
          }
        } else this.dateJs.date["tili"] >= this.dateJs.date["tilishangxian"] && (this.shijian.string = "0");
        if (this.dateJs.date["beiyong"] < 3) {
          var now1 = this.dateJs.getTime();
          if (now1 - this.dateJs.date["beiyongzui"] > 6e4) {
            var num1 = Math.floor((now1 - this.dateJs.date["beiyongzui"]) / 6e4);
            if (num1 >= 1) {
              this.dateJs.date["beiyong"] += Math.floor(num1);
              this.dateJs.date["beiyongzui"] += 6e4 * num1;
              this.dateJs.date["beiyong"] >= 3 && (this.dateJs.date["beiyong"] = 3);
              this.dateJs.save();
            }
          }
        } else this.dateJs.date["beiyongzui"] = this.dateJs.getTime();
        var now2 = this.dateJs.getTime();
        if (this.dateJs.date["homeQian"] < this.dateJs.getMax()) {
          if (now2 - this.dateJs.date["begin1"] > 6e4) {
            var num3 = Math.floor((now2 - this.dateJs.date["begin1"]) / 6e4);
            var qian = num3 * this.dateJs.date["level"];
            if (this.dateJs.date["homeQian"] + qian >= this.dateJs.getMax()) this.dateJs.date["homeQian"] = this.dateJs.getMax(); else {
              this.dateJs.date["homeQian"] += qian;
              this.dateJs.date["begin1"] += 6e4 * num3;
            }
            this.dateJs.save();
            this.jinbixitong.string = this.dateJs.date["homeQian"] + "/" + this.dateJs.getMax();
          }
        } else this.dateJs.date["begin1"] = this.dateJs.getTime();
        this.jinbixitong.string = this.dateJs.date["homeQian"] + "/" + this.dateJs.getMax();
        this.level.string = this.dateJs.date["level"] + "\u7ea7";
        if (1 == this.manjizhuangtai) switch (this.manjizhuangtait) {
         case 0:
          this.manji.node.opacity = 255;
          this.manjizhuangtait = 1;
          break;

         case 1:
          this.manji.node.opacity -= 4;
          if (this.manji.node.opacity <= 0) {
            this.manji.node.opacity = 0;
            this.manjizhuangtai = 0;
            this.manjizhuangtait = 0;
          }
        }
      },
      onBut1Down: function onBut1Down() {
        if (this.dateJs.date["homeQian"] > 0) {
          this.dateJs.date["qian"] += this.dateJs.date["homeQian"];
          this.dateJs.date["homeQian"] = 0;
          this.dateJs.date["begin1"] = this.dateJs.getTime();
          this.jinqian.string = "\u91d1\u94b1:" + this.dateJs.date["qian"];
          this.level.string = this.dateJs.date["level"] + "\u7ea7";
          this.jinbixitong.string = this.dateJs.date["homeQian"] + "/" + this.dateJs.getMax();
          this.dateJs.save();
        }
      },
      onBut2Down: function onBut2Down() {
        if (this.dateJs.date["level"] < 5) if (this.dateJs.date["qian"] >= 100) {
          this.dateJs.date["level"]++;
          this.dateJs.date["qian"] -= 100;
          this.jinqian.string = "" + this.dateJs.date["qian"];
          this.level.string = this.dateJs.date["level"] + "\u7ea7";
          this.jinbixitong.string = this.dateJs.date["homeQian"] + "/" + this.dateJs.getMax();
          this.dateJs.save();
        } else {
          this.manji.string = "\u91d1\u5e01\u4e0d\u591f";
          this.manjizhuangtai = 1;
          this.manjizhuangtait = 0;
        } else {
          this.manji.string = "\u91d1\u5e01\u5df2\u6ee1\u7ea7";
          this.manjizhuangtai = 1;
          this.manjizhuangtait = 0;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Mainbegin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1cfeIScWtOZZsi6aTbb+5k", "Mainbegin");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchDown, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchUp, this);
      },
      touchDown: function touchDown(event) {
        cc.director.loadScene("MainMenu");
      },
      touchUp: function touchUp(event) {
        var touches = event.getTouches();
        var touchLoc = touches[0].getLocation();
      },
      onLoad: function onLoad() {
        cc.director.preloadScene("MainMenu", function() {});
      }
    });
    cc._RF.pop();
  }, {} ],
  Maingong: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18e6dHC925POrb+w39LrelW", "Maingong");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node);
        var s = cc.sys.localStorage.getItem("data23");
        this.date = s ? JSON.parse(s) : {
          qian: 1e4,
          tili: 10,
          guanqia: 1,
          beiyongtili: 0,
          tilitingliu: 0,
          ceshi: 0,
          begin: this.getTime(),
          beiyong: 0,
          beiyongzui: this.getTime(),
          level: 1,
          begin1: this.getTime(),
          homeQian: 0,
          tilishangxian: 10,
          dianzi: 3,
          guan1: 1,
          taiyang: 0,
          tianyang1: 0,
          zuikuaitime: [ 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30 ],
          jiantou: 0
        };
      },
      getMax: function getMax() {
        var sum = 1;
        for (var i = 0; i < this.date["level"]; i++) sum *= 2;
        return 10 * sum;
      },
      getTime: function getTime() {
        var time = new Date();
        return time.getTime();
      },
      save: function save() {
        cc.sys.localStorage.setItem("data23", JSON.stringify(this.date));
      },
      start: function start() {},
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  Menuti: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9332eGO9D1K656Qk7woTweK", "Menuti");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        cuo: {
          default: null,
          type: cc.Node
        },
        goumai: {
          default: null,
          type: cc.Node
        },
        num: {
          default: null,
          type: cc.Label
        },
        title: {
          default: null,
          type: cc.Label
        },
        jiangli: {
          default: null,
          type: cc.Label
        },
        ziliao: {
          default: null,
          type: cc.Label
        },
        jinbibugou: {
          default: null,
          type: cc.Label
        }
      },
      onLoad: function onLoad() {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  NewScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ac544KgFTFJcY1DHYolZpEJ", "NewScript");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  Shengli: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7727dRQ7DZIAZEKIEfszg1y", "Shengli");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        xaiyi: {
          default: null,
          type: cc.Label
        },
        fanhui: {
          default: null,
          type: cc.Node
        },
        xiayiguan: {
          default: null,
          type: cc.Node
        },
        num: {
          default: null,
          type: cc.Label
        },
        zuizhongshijian: {
          default: null,
          type: cc.Label
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "GameDian", "GameTu", "GameTu1", "Gametime", "GuanS", "MainGame", "MainGuan", "MainMenu", "Maingong", "Menuti", "Shengli", "Mainbegin", "NewScript" ]);
//# sourceMappingURL=index.js.map
