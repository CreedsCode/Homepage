<template >
    <div class="icons">
        <div id="iconHolder"/>
    </div>
</template>

<script>
    export default {
        name: "SocialIcons",
        props: {
            listItems: {
                type:  Array,
				required:true
            }
        },
        mounted: function () {
            this.listItems.forEach(item => {
                this.addItem(item);
            });
        },
        methods: {
              addItem: function(item){
                var div = document.getElementById("iconHolder");
                var li = document.createElement("li");
                li.classList = "fab fa-2x ";
                li.classList += item.faIcon;
                var a = document.createElement("a");
                a.href = item.url;
                a.appendChild(li)
                div.appendChild(a);
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>