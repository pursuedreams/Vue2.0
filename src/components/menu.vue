<template>
    <div>
        <ul class="pageMenu" id="top">
            <li class="p-m-operation j_but_operation">操作</li>
            <li class="icon-arrow-up btnFristMsg" @click="pagescrollTop()"></li>
            <li class="icon-arrow-down" @click="pagescrollBot()"></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {

    return {
      chgColor:false,
      msgtit: '恒生电子语音直播',
    }
  },
  methods:{
        //置顶
        pagescrollTop: function(){

            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0

             return false;
        },
        //置底
        pagescrollBot: function(){

            document.body.scrollTop = document.getElementById("speak-dl").offsetHeight;
            document.documentElement.scrollTop = document.getElementById("speak-dl").offsetHeight;

             return false;  
        }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageMenu {
    position: fixed;
    z-index: 4;
    margin: 0 0 10px;
    right: -3px;
    padding-right: 3px;
    bottom: 50px;
    background: rgba(0,0,0,.5);
    color: #fff;
    border-radius: 3px;
}
.pageMenu li {
    position: relative;
    display: block;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 12px;
    cursor: pointer;
    border-top: solid 1px rgba(148,148,148,.4);
}
.icon-arrow-up {
    background: url(../../static/img/icon_zhiding.png) no-repeat;
    background-position: 0px 0px;
}
.icon-arrow-down{
    background: url(../../static/img/icon_zhiding.png) no-repeat;
    background-position: 0px -40px;
}
</style>
