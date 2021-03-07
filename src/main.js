import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './App.vue'
import vuetify from './plugins'

import router from './router'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    consultants: [],
    selectedConsultant: {},
    selectedConsultantType: '',
  },
  mutations: {
    setConsultants(state, consultants) {
      Vue.set(state, 'consultants', [...consultants]);
    },
    setSelectedConsultant(state, selectedConsultant) {
      state.selectedConsultant = selectedConsultant
    },
    setSelectedConsultantType(state, selectedConsultantType) {
      state.selectedConsultantType = selectedConsultantType
    }
  }
})

new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App),
}).$mount('#app')
