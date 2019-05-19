<template>
    <main>
        <PageHeading />
        <div class="projects">
            <div v-for="(item,index) in ProjectItems" :key="index">
                <ProjectItem :ItemData="item" />
            </div>

        </div>
    </main>
</template>

<script>
    import PageHeading from './PageHeading';
    import ProjectItem from "./ProjectItem";

    export default {
        name: 'Projects',
        components: {
            PageHeading,
            ProjectItem
        },
        data() {
            return {
                ProjectItems:[
                    {
                        name:"HighScoreRunn",
                        date:"12.Juni.18",
                        description:"Mein erstes spiel, wo mein einen kleinen klotz durch ein parkur steuert. Und alles schneller wird!",
                        tags:["#Unity3D","#2D"],
                        url:"https://www.dropbox.com/s/p67hzewpsru4a38/HighScoreRUNN%20v0.1.4.zip?dl=0",
                        buttonnote:"Get it on Dropbox!",
                        buttonicon:"fas fa-download"
                    },
                    {
                        name:"Wann ist endlich schule",
                        date:"12.Juni.18",
                        description:"Mein erstes spiel, wo mein einen kleinen klotz durch ein parkur steuert. Und alles schneller wird!",
                        tags:["#Lol","#2D"],
                        url:"https://www.dropbox.com/s/p67hzewpsru4a38/HighScoreRUNN%20v0.1.4.zip?dl=0",
                        buttonnote:"Get it on Dropbox!",
                        buttonicon:"fas fa-download"
                    }
                ]
            }
        },
    };
</script>
