import { createRouter,createWebHashHistory} from "vue-router"

const routes=[
    {
        path:'/',//路径  首页
       redirect:'/index'
    },
    {
        path:'/index',//路径  首页
        name:'index',//名字
        component:()=>import('../views/index/index.vue')
    },
    {
        path:'/music_house',//  音乐库
        name:'music_house',//
        component:()=>import('../views/music_house/index.vue')
    },
    {
        path:'/overview',//概述
        name:'overview',//
        component:()=>import('../views/overview/index.vue')
    },
    {
        path:'/database',//概述
        name:'database',//
        component:()=>import('../views/database/database.vue')
    },

]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router 
//export default createRouter