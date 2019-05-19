<template >
    <div class="icons">
        <div id="iconHolder"/>
    </div>
</template>

<script>
    export default {
        name: "SocialIcons",
        data() {
            return {
				testlistItems: [
					{
						name:"Twitter",
						url:"https://twitter.com/creedgamesoa",
						faIcon:"fa-twitter"
					},
					{
						name:"GitHub",
						url:"https://github.com/CreedsCode/",
						faIcon:"fa-github"
					},
					{
						name:"Instagram",
						url:"https://www.instagram.com/creedscode/",
						faIcon:"fa-instagram"
					},
					{
						name:"Youtube",
						url:"https://www.youtube.com/channel/UCnZh8MLnCOugySmVjay55dA",
						faIcon:"fa-youtube"
					}
				],
            };
        },
        props: {
            listItems: {
                type:  Array,
				// required:true
                required:false
				
            }
        },
        mounted: function () {
            this.testlistItems.forEach(item => {
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