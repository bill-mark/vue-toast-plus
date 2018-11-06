import Toasttemplate from './vue-toast.vue'

let Toast = {}
let currentMsg = null

Toast.install = function(Vue,options={}){
 	const VueToast = Vue.extend(Toasttemplate)  //创建模板
    let toast = null
    VueToast.prototype.callBack = defaultCallBack

 	Vue.prototype.$toast = (params) =>{
		if(!toast){
			toast = new VueToast().$mount()  //创建实例
			document.body.appendChild(toast.$el)  //挂载实例
		}
		toast.show(params)
 		
 		return new Promise((resolve,reject) => {
 			currentMsg = {resolve,reject}
 		})
 	}
 }

function defaultCallBack (action){
	if(!action) currentMsg.reject()
	currentMsg.resolve()
}

if (typeof window !== 'undefined' && window.Vue) { window.Vue.use(Toast); }

export default Toast