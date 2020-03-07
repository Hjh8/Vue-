import Vue from 'vue'
import { Button} from 'element-ui'
//导入登录框所需组件
import {Form,FormItem,Input} from 'element-ui'
// 导入消息提示组件
import { Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Message)
Vue.prototype.$message = Message