// @ts-nocheck
/* eslint-disable */
import { MUTATIONS, ACTIONS, GETTERS } from "@/types";

export default {
    namespaced: true,
    state: {
        loggedIn: null
    },
    getters: {
        [GETTERS.CheckIn.GetLoginInfo](state) {
            return state.loggedIn;
        }
    },
    mutations: {
        [MUTATIONS.CheckIn.SetLoginInfo](state, data) {
            state.loggedIn = data;
        }
    },
    actions: {
        [ACTIONS.CheckIn.LoadLoginInfo](context ) {

        }
    }
};
/* eslint-enable */
