<template>
	<div>
		<div v-for="(item,index) in testlistItems" :key="index" class="icons">
				<a :id="item.url"><i :class="item.faIcon"></i></a>
		</div>
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
						faIcon:"fa-twitter fab fa-2x "
					},
					{
						name:"GitHub",
						url:"https://github.com/CreedsCode/",
						faIcon:"fa-github fab fa-2x "
					},
					{
						name:"Instagram",
						url:"https://www.instagram.com/creedscode/",
						faIcon:"fa-instagram fab fa-2x "
					},
					{
						name:"Youtube",
						url:"https://www.youtube.com/channel/UCnZh8MLnCOugySmVjay55dA",
						faIcon:"fa-youtube fab fa-2x "
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
        }
    }
</script>

<style scoped>
</style>