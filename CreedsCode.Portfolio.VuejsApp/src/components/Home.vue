<template>
        <main id="home">
			<PageHeading  :heading=this.HeadingData.heading :secondary=this.HeadingData.secondary :caption=this.HeadingData.caption />
            <SocialIcons :listItems=this.listItems />
        </main>
</template>

<script>
	import SocialIcons from './SocialIcons';
    import PageHeading from './PageHeading';	

    export default {
        name: 'Home',
            components: {
				SocialIcons,
				PageHeading
            },
        data() {
            return {
				HeadingData:{
					heading: "Creeds",
					secondary: "Code",
					caption:"Hobby Programmer"
				},
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
