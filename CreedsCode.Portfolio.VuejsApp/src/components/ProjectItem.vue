<template>
    <div class="item">
        <a href="#!">
            <img src="@/assets/img/projects/project1.jpg" alt="Project">
        </a>
        <div class="item-info">
            <div class="item-info-head">
                <h3>{{this.ItemData.name}}</h3>
                <a>{{this.ItemData.date}}</a>
            </div>
            <p>
                {{this.ItemData.description}}
            </p>
            <div>
                <p>Tags:</p>
                <div v-for="(item,index) in this.ItemData.tags" :key="index">
                    <p>{{item}}</p>
                </div>
            </div>
            <a class="btn-light" :href="this.ItemData.url">
                <i :class="this.ItemData.buttonicon"></i> {{this.ItemData.buttonnote}}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:"ProjectItem",
    props:{
        ItemData:{
            type:Object,
            required: true
        } 
    }

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/config";
.item-info {

    background: lighten($primary-color, 10);
    padding: 0.6rem;
    min-height: calc(55vh - 250px);
    
    
 
}

.item-info-head{
        margin-top: 1rem;
        display: flex;
        flex-direction: row;
        width: 100%;
        
        a {
            margin-right: 5em;
        }
}
</style>
