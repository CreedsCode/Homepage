<template>
    <div>
        <div v-if="this.noHeaderIcon">
            <h1 class="lg-heading"><i class="fas fa-angle-double-right"></i><span v-if="this.secondary === undefined" class="text-secondary">{{this.$route.name}}</span><span v-else class="text-secondary">{{this.secondary}}</span> </h1> <h2 v-if="this.caption" class="sm-heading">{{this.caption}}</h2>
        </div>
        <div v-else>
            <h1 class="lg-heading">{{this.heading}} <span class="text-secondary">{{this.secondary}}</span></h1>
            <h2 class="sm-heading">{{this.caption}}</h2>
        </div>
    </div>
</template>

<script>
export default {
        name: "PageHeading",
        props: {
            heading: {
                type:  String,
                required:false,
            },
            secondary: {
                type:  String,
                required:false
            },
            caption:{
                type: String,
                required:false
            }
        },
        computed: {
            noHeaderIcon: function(){
                if(this.heading === undefined){
                    return true;
                } else{
                    return false;
                }
            }
        },
}
</script>