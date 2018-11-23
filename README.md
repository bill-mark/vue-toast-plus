# vue-toast-plus

一款vue适用的弹窗插件,有消息提示模式和确认消息模式
A Vue-based pop-up plug-in with message prompt mode and confirmation message mode

![](https://github.com/bill-mark/vue-toast-plus/blob/master/1.png?raw=true)
![](https://github.com/bill-mark/vue-toast-plus/blob/master/2.png?raw=true)

## 使用方法(Usage method):

1.npm install vue-toast-plus

2.在main.js中

  import Toast from 'vue-toast-plus'
  
  Vue.use(Toast)
  
3.调用位置(Calling location)
  ```
   this.$toast({
          showCancle:true,//true->确认消息弹窗,false->消息提示弹窗,
                          //True - > confirmation message pop-up window, false - > message prompt pop-up window
          dialogname:'提示',//弹窗的标题(The title of the pop-up window)
          alert_text:'这是内容'//弹窗的内容(Contents of pop-up)
        })
        .then( ()=>{
          console.log('promise then')
        })
        .catch( ()=>{
          console.log('promise catch')
        })
  ```
  
  该插件开发教程(The plug-in development tutorial):
  https://www.jianshu.com/p/9645e6a26bc2
