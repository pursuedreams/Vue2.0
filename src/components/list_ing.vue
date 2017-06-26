<template>
  <div class="tab">
    <div class="tab-item-list">
        <div class="tab-item" v-for="item in items">
            <div class="tab-item-logo">
                <img :src="item.infoimg">
            </div>
            <div class="tab-item-details">
                <p class="info-tit">{{item.infotit}}</p>
                <p class="info-time">{{item.infotime}}&nbsp&nbsp{{item.infotimep}}</p>
                <p class="info-fans">
                    <span>{{item.infofans}}人次</span>
                    <span>详情</span>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {

    return {
      msg: 'tab1',
      items: [
          {infotit: '这是成功证券的趋势', infotime: '2017-6-2',infotimep:'8:00',infofans:'666',infoimg:'../../static/img/15.jpg'},
          {infotit: '走近你的心里', infotime: '2017-6-1',infotimep:'9:00',infofans:'999',infoimg:'../../static/img/16.jpg'},
          {infotit: '山山水水山水之间想你已无归期', infotime: '2016-12-12',infotimep:'10:00',infofans:'1',infoimg:'../../static/img/17.jpg' },
          {infotit: '么么哒小狗宝宝', infotime: '2016-8-8',infotimep:'6:00',infofans:'88',infoimg:'../../static/img/18.jpg' },
          {infotit: '像阳光般温暖像清风般和煦', infotime: '2016-6-6',infotimep:'1:00',infofans:'66',infoimg:'../../static/img/19.jpg' },
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-item-list{
    padding:5px 15px;
}
.tab-item-logo{
    width:150px;
    height:100px;
    border-radius:5px;
    overflow:hidden;

}
img{
    width:100%;
    height:100%;
}
.tab-item{
    display:flex;
    margin-top:15px;
}
.tab-item-logo,.tab-item-details{
    flex:1;
}
.info-tit,.info-time,.info-fans{
    margin-left:10px;
}
.info-tit{
    margin-top:5px;
}
.info-time,.info-fans{
    margin-top:3px;
}
.info-time{
   color:#b1b6bb;
   font-size:12px; 
}
.info-fans{
   color:#b1b6bb;
   font-size:14px;
}

</style>
