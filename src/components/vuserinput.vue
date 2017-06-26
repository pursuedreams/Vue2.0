<template>
    <div>
        <div class="askQuestions j_aq_height">
            <div class="ask-questions-area">
                <textarea  placeholder="输入讨论内容或提问" class="input-box"></textarea>
                <span class="but-ask" @click="chgColor=!chgColor;isActive=!isActive" v-bind:class="{activeblue: isActive }">
                <i class="control-show"><span class="j_add_circle" v-show="chgColor"></span></i>
                    提问
                </span>
                <span class="but-submit">发送</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Tab',
  data () {

    return {
      chgColor:false,
      isActive:false,
      msgtit: '恒生电子语音直播',
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.askQuestions {
    height: 40px;
    width: 100%;
    box-shadow: 0 0 5px #ccc;
    position: fixed;
    bottom:0px;
    z-index:100;

}
.ask-questions-area {
    width: 100%;
    background-color: #fff;
    padding: 5px;
    z-index: 5;
    box-shadow: 0 0 5px #ccc;

}
.input-box {
    width: 87%;
    height: 30px;
    /* border-radius: 3px; */
    border: 1px solid #e8e8e8;
    background-color: #f8f8f8;
    color: #ccc;
    font-size: 14px;
    position: relative;
    overflow: hidden;
    resize: none;
}
.but-ask {
    display: block;
    position: absolute;
    right: 16%;
    top: 10px;
    color: #666;
    font-size: 12px;
    bottom: 0;
    height: 16px;
    line-height: 16px;
}
.but-ask i {
    display: inline-block;
    width: 16px;
    height: 16px;
    text-align: center;
    border: solid 1px #c7c7c7;
    border-radius: 3rem;
    vertical-align: top;
}
.but-submit {
    position: absolute;
    right: 5px;
    top: 6px;
    display: block;
    background-color: #00acff;
    border-radius: 3px;
    height: 25px;
    line-height: 25px;
    color: #fff;
    font-size: 13px;
    width: 11%;
    text-align: center;
    cursor: pointer;
}
.icon-tw-blue i {
    border-color: #00acff;
}
.j_add_circle {
    display: block;
    width: 10px;
    height: 10px;
    background: #00acff;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left:3px;
}

.activeblue i{
    border-color: #00acff;  
}
</style>
