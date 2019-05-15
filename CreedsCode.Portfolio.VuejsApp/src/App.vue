<template>
    <div id="app">
        <Menu v-bind:listItems="listItems" />
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<script>
    import Menu from './components/Menu';
    import Footer from './components/Footer';

    export default {
        name: 'app',
        components: {
            Menu,
            Footer
        },
        data() {
            return {
                listItems:[{
                    name: "Home",
                    routerRoutes: { name: "Home" }
                },
                {
                    name: "About",
                    routerRoutes: { name: "About" }
                },
                {
                    name: "Work",
                    routerRoutes: { path: "work" }
                }]
            }
        }
    };
</script>

<style lang="scss" src="@/assets/scss/main.scss"></style>