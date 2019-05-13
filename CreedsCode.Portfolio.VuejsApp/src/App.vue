<template>
    <div id="app">
        <Menu v-bind:listItems="listItems" />
        <router-view></router-view>
    </div>
</template>

<script>
    import Menu from './components/Menu';
    export default {
        name: 'app',
        components: {
            Menu
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

