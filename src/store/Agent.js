import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        agentStateId: "",
        agentlgaId: "",
        Agentpages: [],
        Agent

    },
    getters: {
        processedAgents: (state) => {
            return state.Agentpages[state.currentPage];
        },
    },
    mutations: {
        setAgentState(state, data){
            state.agentStateId = data
        },
        setAgentSLga(state, data){
            state.agentlgaId = data
        }
    }
})