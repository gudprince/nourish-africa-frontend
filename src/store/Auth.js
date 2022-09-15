import customAxios from '../helpers/AxiosInstance';
import * as url from '../store/AuthStoreRoute';

export default {
        
    state: {
        authenticated: false,
        jwt: null,
        authUser:{},
        },
    getters: {
        authenticatedAxios() {
            let token = localStorage.getItem('token');
            let bearer = {"Authorization": `Bearer ${token}`}
            return bearer;
        },
        //getToken(){
            //let token = localStorage.getItem('token');
            //return token;
        //}
    },
    mutations: {
        setLogin(state, data){
            state.isLogin = data;
        },
        setAuthenticated(state, data) {
            localStorage.setItem('authUser',JSON.stringify(data.user));
            //localStorage.setItem('token',data.token);
            
            state.authenticated = true;
            state.authUser = data.user;
        },
        _setUsers(state, data) {
            state.users = data.users;
        },
        clearAuthentication(state) {
            state.authenticated = false;
            state.jwt = null;
        },
        _updateUser(state, data) {
            localStorage.setItem('authUser',JSON.stringify(data.user));
        },
        removeUser(state, id){
            let index = state.users.findIndex(u => u.id == id);
            state.users.splice(index, 1);
        },
    },
    actions: {
        async login(context, credentials) {
            let response = await customAxios.post(url.loginUrl, credentials);
            console.log(response.data)
            if (response.data.success == true) {
                context.commit("setLogin", 'true');
                let user = response.data.data;
                let token = response.data.data.token;
                let bearer = {"Authorization": `Bearer ${token}`}
                localStorage.setItem('bearer',bearer);
                localStorage.setItem('token',token);
                context.commit("setAuthenticated", {user});
                return response.data.success;
            }
            
        },
        async logout(context) {
            await context.commit("setLogin", 'false');
            localStorage.removeItem('authUser');
            localStorage.removeItem('token');
        },
        async register(context, credentials) {
            let response = await customAxios.post(url.registerUrl, credentials);
            console.log(response);
            if (response.data.success == true) {
                context.commit("setLogin", 'true');
                let user = response.data.data;
                let token = response.data.data.token;
                let bearer = {"Authorization": `Bearer ${token}`}
                localStorage.setItem('bearer',bearer);
                localStorage.setItem('token',token);
                context.commit("setAuthenticated", {user});
            }
            return response
        },
        async getUsers(context) {
            let users = (await customAxios.get(url.usersUrl)).data.data;
            if (users) {
                context.commit("_setUsers", {users});
            }
        },
        async updateUser(context, user) {
            let response = await customAxios.put(url.usersUrl+'/'+user.id, user);
            if (response.data.success == true) {
                context.commit("_updateUser", {user});
            }
            return response
        },
        async resetPassword(context, password) {
            let response = await customAxios.post(url.passwordUpdateUrl, password);
            return response
        },
        async findUser(context, id) {
            let udata = (await customAxios.get(url.usersUrl+'/'+id)).data.data;
            //context.commit("setEditUser", {udata}); 
            return udata;  
        },  
    }
}
