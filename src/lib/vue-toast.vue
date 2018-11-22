<!-- 弹窗组件 -->
<template>
  <div class="tanchuang_wrap" v-if="isShow">
     <div class="dialog_cover"  @click="closeMyself"></div>

     <transition name="drop">
     <div class="dialog_content" v-if="isShow">
         <div class="alert_title">
             <div class="alert_title_left">{{dialogname}}</div>
             <div class="alert_title_right" @click="closeMyself"></div>
         </div>        
        <div style="padding: 10px 15px;;text-align:left;
                    font-size:14px;color:#606266">
              {{alert_text}}
        </div>
         <div class="down" > 
             <div v-if="showCancle" class="down_button_cancle" @click="closeMyself">取消</div>
             <div class="down_button" @click="besure">确定</div>
         </div>
     </div>
     </transition>
  </div>
</template>

<script>
export default {
name:'vue-toast-plus',
data() {
  return {
    isShow: false,
    showCancle:false,
    dialogname:null,
    alert_text:'',
  }    
},
methods: {
  show(params){  //初始化参数
     let { showCancle,dialogname,alert_text } = params
     this.showCancle = showCancle
     this.dialogname = dialogname
     this.alert_text = alert_text
     this.isShow = true
  },
  closeMyself () {
     this.isShow = false
     this.callBack(false)
  },
  besure(){  //确定按钮
     this.isShow = false
     this.callBack(true)
  },
}
}
</script>

<style lang="scss" scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .5s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave {
  transform: translateY(-500px);
}


.tanchuang_wrap{
  .dialog_cover {
    background: #000;
    opacity: 0.3 ;
    position: fixed;
    z-index: 35;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog_content {
    width: 422px;
    position: fixed;
    overflow: auto;
    background: #fff;
    top: 15%;
    left: 50%;
    margin-left: -211px;
    z-index: 40;
    line-height: 1.6;
    border-radius:4px;
    padding-bottom:10px;
    .alert_title{
        background:white;
        width:100%;
        height:43px;
        overflow: hidden;
        .alert_title_left{
           float:left;
           margin-left: 15px;
           margin-top: 15px;
           font-size:18px;
           color:#303133;
           line-height: 1;
        }
        .alert_title_right{
          float:right;
          width:12px;
          height: 12px;
          margin-top: 20px;
          margin-right: 20px;
          background-image: url('./close.png');
          background-repeat: no-repeat;
          background-size: 12px 12px;
          cursor: pointer;
        }
        .right:hover{
          color: #4fc08d;
        }
    }
    .down{
      padding: 5px 15px 0;
      display: flex;
      flex-direction:row-reverse;
      .down_button{
         width: 55px;
         height: 30px;
         font-size: 12px;
         cursor: pointer;
         background:#2389ff;
         border-radius:3px;
         text-align: center;
         line-height: 30px;
         color: white;
         font-weight: 500;

      }
      .down_button_cancle{
         margin-left:15px;
         width: 55px;
         height: 30px;
         font-size: 12px;
         cursor: pointer;
         background:#fff;
         border:1px solid #CCCCCC;
         border-radius:3px;
         text-align: center;
         line-height: 30px;
         color: #999;
         font-weight: 500;
      }
    }
  }
}
</style>
