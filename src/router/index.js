import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
