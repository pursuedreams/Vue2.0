
<template>
    <div class="mock-body">
        <v-header></v-header>
        <div class="split"></div>
        <div class="tab">
            <p class="split-666">
                <router-link to="/infortab/foo" class="mock-a mock-a">正在直播</router-link>
                <router-link to="/infortab/bar" class="mock-a">即将开始</router-link>
                <router-link to="/infortab/fid" class="mock-a">我看过的</router-link>
            </p>
            <router-view></router-view>
        </div>
    </div>
  
</template>

<script>
import Header from './header.vue'

export default {
  name: 'Tab',
  data () {

    return {
      msg: 'tab1'
    }
  },
  components: {
    'v-header': Header
  }
}
</script>


<style scoped>
.mock-body{
  background:#fff;
}
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
