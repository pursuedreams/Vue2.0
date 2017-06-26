<template>
    <div>
        <div class="barrage-control">
            <div class="fold-bar">
                <ul class="main clearfix">
                    <li>
                        <ul class="clearfix" @click="open=!open">
                            <li class="arrow-icon-double arrow-icon-on"></li>
                            <li class="icon-couple" v-show="open">520人</li>
                        </ul>
                    </li>
                    <li class="but-swith-chat-room" @click="chatRoomShow=!chatRoomShow">聊天室</li>
                </ul>
            </div>
        </div>
        <!--最新looker-->
        <div class="now-show" v-show="open">
            <dl class="now-show-list" @click="chatRoomShow=!chatRoomShow">
                <dd>
                    <span>
                        <img src="../../static/img/17.jpg">
                    </span>
                    <p>123</p>
                </dd>
                <dd>
                    <span>
                        <img src="../../static/img/16.jpg">
                    </span>
                    <p>123</p>
                </dd>
                <dd>
                    <span>
                        <img src="../../static/img/5.jpg">
                    </span>
                    <p>123</p>
                </dd>
            </dl>
        </div>
        <!--聊天讨论室-->
        <div class="chatRoom j_cr_height" v-show="chatRoomShow">
            <div class="chatroom-head">
                <span class="backToLive" @click="chatRoomShow=!chatRoomShow">回到直播</span>
            </div>

            <div class="chatroom-content">
                <div class="scrollContentBox">
                    <dd class="comment-count">讨论(69)</dd>
                    <dl class="chatroom-dl">
                        <dd class="chatroom-dd clearfix" v-for="item in items">
                            <span class="avatar">
                                <img :src="item.avatar">
                            </span>

                            <p class="author-name">{{item.authorname}}</p>
                            <b class="time">{{item.time}}</b>
                            <p class="content">{{item.content}} </p>
                        </dd>
                    </dl>
                </div>
            </div>

        </div>

        <v-user-input></v-user-input>
    </div>
</template>

<script>
import  vuserinput from './vuserinput.vue'

export default {
  name: 'Tab',
  data () {

    return {
      open: true,
      chatRoomShow: false,
      msgtit: '恒生电子语音直播',
      items: [
          {authorname: '这是成功证券的趋势', time: '2017-6-2',infotimep:'8:00',content:'666',avatar:'../../static/img/15.jpg'},
          {authorname: '走近你的心里', time: '2017-6-1',infotimep:'9:00',content:'999',avatar:'../../static/img/16.jpg'},
          {authorname: '山山水水山水之间想你已无归期', time: '2016-12-12',infotimep:'10:00',content:'1',avatar:'../../static/img/17.jpg' },
          {authorname: '么么哒小狗宝宝', time: '2016-8-8',infotimep:'6:00',content:'88',avatar:'../../static/img/18.jpg' },
          {authorname: '像阳光般温暖像清风般和煦', time: '2016-6-6',infotimep:'1:00',content:'66',avatar:'../../static/img/19.jpg' },
        ]
    }
  },
  components: {
    'v-user-input': vuserinput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.barrage-control{
    position: fixed;
    top: 10px;
    right: 5px;
    z-index: 3;
}
.fold-bar{
    osition: relative;
    border-radius:14px;
    z-index: 2;
    background-color: rgba(0,0,0,.5);
}
.but-swith-chat-room{
    overflow: hidden;
    border-radius: 14px;
    cursor: pointer;
    color: #fff;
    background: #00acff;
    padding: 0px 8px;
    box-sizing: border-box;
}
.main li{
    float:left;
    color:#fff;
}
.icon-couple{
    padding-left: 26px;
    position: relative;
    padding-right: 15px;
    transition: .7s;
    -webkit-transition: .7s;
    -moz-transition: .7s;
    overflow: hidden;
}
.icon-couple::before {
    content: "";
    position: absolute;
    left: 5px;
    width: 16px;
    height: 18px;
    background: url(../../static/img/icon_person.png);
    background-size: 100% 100%;
    margin-top: 1px;
}
.arrow-icon-double {
    width: 16px;
    height: 15px;
    background: #797979;
    border-radius: 5px;
}
.arrow-icon-on, .arrow-icon-off {
    border-radius: 5px;
    background-size: 100% 100%;
    margin-top: 0.15rem;
    border-radius: 3rem;
    margin-left: 3px;
}
.arrow-icon-on{
    background: url(../../static/img/arrow_2_right.png);
}


.now-show{
    width: 46%;
    /* height: 100px; */
    /* background: red; */
    position: fixed;
    top: 40px;
    right: 5px;
    z-index: 10;
    overflow: hidden;
}
.now-show-list dd {
    display: block;
    overflow: hidden;
    padding: 0 0 0 10px;
    margin: 5px 0;
    cursor: pointer;
}
.now-show-list span {
    display: block;
    float: right;
    width: 30px;
    height:30px;
    margin: 0px 5px 0 5px;
    vertical-align: top;
    border-radius:50%;
    overflow:hidden;
}
.now-show-list span img{
    width:100%;
    height:100%;
}
.now-show-list dd p {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 95px;
    min-width: 50px;
    max-height:200px;
    overflow-h: hidden;
    color: #fff;
    background-color: rgba(0,0,0,.5);
    padding: 4px 5px;
    border-radius: 2px;
    float: right;
    position: relative;
    word-break: break-all;
}


.chatRoom {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
    height:100%;
}
.chatroom-head {
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    padding: 10px 0 0;
    width: 100%;
    text-align: center;
}
.backToLive {
    display: inline-block;
    width: 100px;
    height:30px;
    line-height: 30px;
    background: #00acff;
    color: #fff;
    font-size: 16px;
    border-radius: 2px;
}

.chatroom-content {
    position: absolute;
    z-index: 4;
    width: 100%;
    top: 50px;
    bottom: 0;
    padding: 0 0 0;
    overflow: auto;
    overflow-x: hidden;
    background: #fff;
    -webkit-overflow-scrolling: touch;
}
.scrollContentBox {
    position: relative;
    min-height: 105%;
    z-index: 2;
}
.comment-count {
    height: 32px;
    line-height: 32px;
    color: #999;
    padding-left: 15px;
    font-size: 14px;
    border-bottom: solid 1px #ebebeb;
}
.chatroom-dd {
    display: block;
    padding: 15px;
    background: #fff;
    border-bottom: solid 1px #ebebeb;
    cursor: pointer;
}
.chatroom-dd .avatar {
    float: left;
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
    border-radius: 15px;
    overflow: hidden;
}
.chatroom-dd .avatar img {
    width: 100%;
    height: 100%;
}
.author-name {
    display: block;
    height:20px;
    line-height: 20px;
    color: #00acff;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.time {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-weight: 400;
    color: #9a9a9a;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.content {
    display: block;
    line-height:20px;
    color: #5b5b5b;
    margin: 0.42375rem 0 0 2.5rem;
    word-break: break-all;
}
</style>
