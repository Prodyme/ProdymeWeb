import Vuex from "vuex";
import Vue from "vue";
import modules from "./modules";

Vue.use(Vuex);

/* eslint-disable */
export default new Vuex.Store({
    modules,
    strict: process.env.NODE_ENV === "development"
});
/* eslint-enable */