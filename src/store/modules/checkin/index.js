// @ts-nocheck
/* eslint-disable */
import { MUTATIONS, ACTIONS, GETTERS } from "@/types";

export default {
    namespaced: true,
    state: {
        login: null
    },
    getters: {
        [GETTERS.CheckIn.GetLoginInfo](state) {
            return state.login;
        }
    },
    mutations: {
        [MUTATIONS.CheckIn.SetLoginInfo](state, data) {
            state.mantisInfo = data;
        }
    },
    actions: {
        [ACTIONS.CheckIn.LoadLoginInfo](context ) {

        }
    }
};
/* eslint-enable */
