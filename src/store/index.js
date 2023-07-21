import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:{
      uname:"",
      upass:""
    },
    register:{
      uname:"",
      upass:"",
      a:"",
      b:"",
      low:"",
      up:""
    }
  },
  getters: {
  },
  mutations: {
    setLogin_uname(state,uname){
      state.login.uname=uname;
    },
    setLogin_upass(state,upass){
      state.login.upass=upass;
    },
    setRegister_uname(state,uname){
      state.register.uname=uname;
    },
    setRegister_upass(state,upass){
      state.register.upass=upass;
    },
    setRegister_a(state,a){
      state.register.a=a;
    },
    setRegister_b(state,b){
      state.register.b=b;
    },
    setRegister_low(state,low){
      state.register.low=low;
    },
    setRegister_up(state,up){
      state.register.up=up;
    }
  },
  actions: {
  },
  modules: {
  }
})
