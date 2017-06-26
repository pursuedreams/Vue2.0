<template>
  <div class="inforbox">
  <div class="infoimg">
    <img src="../../static/img/13.jpg" style="width:100%;">
  </div>
  <p class="msgtit">{{msgtit}}</p>
  <p class="box-padding">时间</p>
  <p class="box-padding"><span class="color-blue">2017-6-02&nbsp&nbsp15:00:00</span><span class="fr">999人次</span></p>
  <div class="split"></div>

  <div class="zb-details">
    <div class="zb-details-tit">
    直播简介
    </div>
    <div class="zb-details-cont">
     1,物化的世界是可悲可怜可憎的，如果孩子延续目前的理念，做一个金钱的奴隶，作为家长，这将是何等悲哀的结果？
     2,物化的世界是可悲可怜可憎的，如果孩子延续目前的理念，做一个金钱的奴隶，作为家长，这将是何等悲哀的结果？
     3,物化的世界是可悲可怜可憎的，如果孩子延续目前的理念，做一个金钱的奴隶，作为家长，这将是何等悲哀的结果？
    </div>
  </div>
  <div style="height:40px"></div>
  <router-link to="/livetalk">
      <div class="enter">进入直播间</div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {

    return {
      msgtit: '恒生电子语音直播:营销服务发展部证券内容讲解即现状形式分析'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inforbox{
  background:#fff;
}
.inforbox{
  width:100%;
  height:100%;
}
.msgtit{
  font-size:18px;
  width:100%;
  padding:0 15px;
  margin-top:8px;
  color:#666;
  font-weight:bold;
}
.box-padding{
  padding:0 15px;
}
.color-blue{
  color:blue;
}
.zb-details-tit{
  border-bottom: 1px solid #ebebeb;
  padding:0 15px;
  height:50px;
  line-height:50px;
  font-size:16px;
}
.zb-details-cont{
  width:100%;
  padding:5px 15px;
}
.enter{
  width:100%;
  height:45px;
  line-height:45px;
  background:blue;
  color:#fff;
  padding:0 15px;
  text-align:center;
  font-size:16px;
  position:fixed;
  bottom:0px;
}
</style>
