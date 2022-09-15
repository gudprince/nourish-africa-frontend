import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "./Auth";
import customAxios from '../helpers/AxiosInstance';
import * as url from '../store/IndexStoreRoute';
import requestModule from "./Request";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {auth: AuthModule, request: requestModule},
    state: {
        companies: [],
    },
    getters: {
        
        isLogin(){
            let login = localStorage.getItem('login');
            return login;
        },

    },
    mutations: {
        _toggleLga(state, data){
            state.toggleLga = data;
        },
        _setSkeloader(state, data){
            state.skeloader = data;
        },
        setCompany(state, companies) {
            state.companies = companies;
        },
       
        removeCompany(state, id){
            let index = state.companies.findIndex(c => c.id == id);
            state.companies.splice(index, 1);
        },
    },
    actions: {
        async addCompany(context, formData) {
            let pdata = (await customAxios.post(url.company,formData)).data;
            console.log(pdata)
            return pdata;
        },
        async deleteCompany(context, id) {
            let cdata = (await customAxios.delete(url.company+'/'+id)).data;
            if (cdata.success == true){
            context.commit("removeCompany",id);
            }
            return cdata;
        },
        async updateCompany(context, formData) {
            let id = formData.id;
            let cdata = (await customAxios.put(`${url.company}/${id}`, formData)).data;
            return cdata;
        },
        async userCompanies(context) {
            let res = (await customAxios.get(url.userCompany)).data.data; 
            console.log(res); 
            context.commit("setCompany", res) 
        },      
    }
})