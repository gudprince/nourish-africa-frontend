import Vue from 'vue';
import VueRouter from 'vue-router';
import multiguard from 'vue-router-multiguard';

import Login from "../components/layout/Login";
import Register from "../components/layout/Register";
import CategoryList  from  "../components/auth/CategoryList";
import UserProfile  from  "../components/auth/UserProfile";
import ChangePassword   from  "../components/auth/ChangePassword"
import Dashboard   from  "../components/auth/Dashboard"
import AddCompany   from  "../components/auth/AddCompany"

Vue.use(VueRouter);

const isLogin = function(to, from, next) {
    let token = localStorage.getItem('token');
    if (token) {
        next();
    } 
    else {
        next("/login");
    }
}

export default new VueRouter({
    mode: "history",
    routes: [
        { path: "/category/index", component: CategoryList,  beforeEnter: multiguard([isLogin])},
        { path: "/login", component: Login },
        { path: "/register", component: Register },
        { path: "/company", component: AddCompany, beforeEnter: multiguard([isLogin])},
        { path: "/user/profile", component: UserProfile, beforeEnter: multiguard([isLogin])},
        { path: "/", component: Dashboard, beforeEnter: multiguard([isLogin])},
       
        { path: "/change-password", component: ChangePassword, beforeEnter: multiguard([isLogin])},
    ],
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
})