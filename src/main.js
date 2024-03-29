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
    testimonials: [],

    consultants: [],
    selectedConsultant: {},
    selectedConsultantType: '',
  },
  mutations: {
    setTestimonials(state, testimonials) {
      Vue.set(state, 'testimonials', [...testimonials]);
    },

    setConsultants(state, consultants) {
      Vue.set(state, 'consultants', [...consultants]);
    },
    setSelectedConsultant(state, selectedConsultant) {
      Vue.set(state, 'selectedConsultant', selectedConsultant)
    },
    setSelectedConsultantType(state, selectedConsultantType) {
      Vue.set(state, 'selectedConsultantType', selectedConsultantType)
    }
  }
})

new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App),
}).$mount('#app')
