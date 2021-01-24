import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import todos from "./modules/todos";
import views from "./modules/views";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: [todos, views],
    plugins: [createPersistedState()],
});
