import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tisthistry from '@/components/list_histry'
import Tistgoing from '@/components/list_going'
import Tisting from '@/components/list_ing'
import Infoindex from '@/components/indexintro'
import tabpage from '@/components/tabpage'
import livetalk from '@/components/livetalk'

Vue.use(Router)

export default new Router({
  routes: [
    {   
        path: '/', 
        name: 'tabpagename',
        component: tabpage,
        children: [
            {
                path: '',
                component: Tisthistry
            },
            {
                path: '/infortab/foo',
                component: Tisthistry
            },
            {
                path: '/infortab/bar',
                component: Tistgoing
            },
            {
                path: '/infortab/fid',
                component: Tisting
            },
           
        ]
    },
    { path: '/infoindex', component: Infoindex },
    { path: '/livetalk', component: livetalk },

  ]
})
