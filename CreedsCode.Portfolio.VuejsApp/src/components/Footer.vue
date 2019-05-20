<template>
    <footer id="main-footer">Made with ❤️. Feel free to contribute on github!<a href="https://github.com/CreedsCode/CreedsCode-Portfolio"><strong> *click* </strong></a> ~ {{this.currentYear}} </footer>
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
            $route (to){
                this.getHidden(to.name);
            },
            isHidden (to){
                document.getElementById("main-footer").hidden = to;
            }
        }
    }
</script>

<style scoped>
</style>