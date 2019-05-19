<template>
    <footer id="main-footer">Copyright &copy; {{this.currentYear}}</footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                currentYear:(new Date()).getFullYear(),
                isHidden: false,
                routeName:this.$route.name
            }
        },
        props: {
            hiddenOn: {
                type:  Array,
                required:false
            }
        },
        methods: {
            getHidden:function(routeName){
                this.hiddenOn.forEach(element => {
                    if(element.name == routeName){
                        this.isHidden = true;
                    } else {
                        this.isHidden = false;
                    }
                });
            }
        },
        mounted: function(){
            this.getHidden(this.routeName);
        },
        watch: {
            $route (to, from){
                this.getHidden(to.name);
            },
            isHidden (to,from){
                document.getElementById("main-footer").hidden = to;
            }
        }
    }
</script>

<style scoped>
</style>