import Vue from 'vue'
import Router from 'vue-router'
import parentComponent from '../components/parentComponent.vue'
import childComponent from '../components/childComponent.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parentComponent',
      component: parentComponent
    },
    {
      path: '/childComponent',
      name: 'childComponent',
      component: childComponent
    },

  ]
})
