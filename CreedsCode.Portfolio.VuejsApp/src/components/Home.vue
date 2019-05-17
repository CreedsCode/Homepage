<template>
    <div>
        <main id="home">
            <h1 class="lg-heading">Creeds <span class="text-secondary">Code</span></h1>
            <h2 class="sm-heading">Hobby Programmer.</h2>
            <SocialIcons/>
        </main>
    </div>
</template>

<script>
    import SocialIcons from './SocialIcons';

    export default {
        name: 'Home',
            components: {
             SocialIcons
            },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
