<template>
    <div id="app">
        <Menu v-bind:listItems="listItems" />
        <router-view></router-view>
        <Footer :hiddenOn=this.footerBlocketRoutes />
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
                footerBlocketRoutes:[
                    {name: "Home",}
                ],
                listItems:[{
                    name: "Home",
                    routerRoutes: { name: "Home" }
                },
                {
                    name: "Projects",
                    routerRoutes: { name: "Projects" }
                }]
            }
        }
    };
</script>

<style lang="scss" src="@/assets/scss/main.scss"></style>