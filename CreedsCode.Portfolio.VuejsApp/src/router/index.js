import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/components/Home";
import About from "@/components/About";
import Work from "@/components/Work";

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
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/work",
            name: "Work",
            component: Work
        }
    ]
});