import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/Home";
import Projects from "@/components/Projects";
import PageNotFound from "@/components/PageNotFound";


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            alias:"/home",
            name: "Home",
            component: Home
        },
        {
            path: "/projects",
            name: "Projects",
            component: Projects
        },



        // fallback route => 404
        {
            path:"*",component:PageNotFound, name:"PageNotFound"
        }
    ]
});