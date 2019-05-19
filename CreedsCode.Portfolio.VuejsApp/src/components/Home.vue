<template>
        <main id="home">
            <h1 class="lg-heading">Creeds <span class="text-secondary">Code</span></h1>
            <h2 class="sm-heading">Hobby Programmer.</h2>
            <SocialIcons :listItems=this.slistItems />
        </main>
</template>

<script>
    import SocialIcons from './SocialIcons';

    export default {
        name: 'Home',
            components: {
             SocialIcons
            },
        data() {
            return {
				listItems: [
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
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
