<template>
    <div>
        <barrage-control></barrage-control>
        <v-menu></v-menu>
        <div class="speakBox">
            <dl class="speak-dl" id="speak-dl">
                <dd class="speak-left" v-for="item in items">
                    <p class="speak-time">{{item.spacktime}}</p>

                    <div class="head-portrait">
                        <img :src="item.headportrait">
                    </div>

                    <div class="speaker-name">
                        <b>{{item.speakername}}</b>
                        嘉宾
                    </div>

                    <div class="speak-content">
                        <p>{{item.speakcontent}}</p>
                    </div>
                </dd>
            </dl>
        </div>
        <div style="height:40px"></div>
    </div>
</template>

<script>
import barragecontrol from './barragecontrol.vue'
import menu from './menu.vue'

export default {
  name: 'Tab',
  data () {

    return {
      msgtit: '恒生电子语音直播',
      items: [
          {spacktime: '2017-6-01 14:26', speakername: '盒饭',speakcontent:'您好这是恒生直播',headportrait:'../../static/img/1.jpg'},
          {spacktime: '2017-6-01 14:26', speakername: '盒饭',speakcontent:'恒生金融注册资金一亿八十万元，实力雄厚，领航地方专业的财富管理机构',headportrait:'../../static/img/1.jpg'},
          {spacktime: '2017-6-01 14:26', speakername: '盒饭',speakcontent:'您好',headportrait:'../../static/img/1.jpg'},
          {spacktime: '2017-6-01 14:26', speakername: '盒饭',speakcontent:'您好',headportrait:'../../static/img/1.jpg'},
          {spacktime: '2017-6-01 14:26', speakername: '盒饭',speakcontent:'恒生金融注册资金一亿八十万元，实力雄厚，领航地方专业的财富管理机构',headportrait:'../../static/img/1.jpg'},
          {spacktime: '2017-6-01 14:26', speakername: '盒饭',speakcontent:'您好',headportrait:'../../static/img/1.jpg'},
        ]
    }
  },
  components: {
    'barrage-control': barragecontrol,
    'v-menu': menu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.speak-left{
    position: relative;
    display: block;
    padding: 10px 10px 10px 60px;
}
.speak-time{
    color:#b3b3b3;
    text-align: center;
    font-size: 12px;
    height:30px;
    line-height: 30px;
    padding:0px 49px 0px 0px;
}
.head-portrait{
    position: absolute;
    left: 10px;
    /* top: 0.14957rem; */
    width: 40px;
    height: 40px;
    border-radius: 1.28205rem;
    overflow: hidden;
    cursor: pointer;
}
.head-portrait img{
    width:100%;
    height:100%;
}
.speaker-name{
    font-size: 14px;
    color:#999;
}
.speaker-name b{
    color: #555;
    padding: 0 5px 0 0;
    font-size: 14px;
    font-weight: 400;
    max-width: 100px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.speak-content{
    max-width: 80%;
    min-width: 200px;
    min-height: 32px;
    padding: 5px;
    margin: 0;
    margin-bottom: 4px;
    background: #fff;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 0 1px rgba(0,0,0,.1);
}
</style>
