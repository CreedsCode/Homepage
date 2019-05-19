<template>
    <div>
    <main id="about">
		<PageHeading/>
        <div class="about-info">
            <img src="@/assets/img/portrait.jpg" alt="Logo" class="bio-image">
            <div class="bio">
                <h3 class="text-secondary">BIO</h3>
                <p>Hey, I am Dercio. I am 15 years old, from Germany and I have a lot of fun in programming. I try to realize
                    projects in most areas of software development. Especially in the area of JavaScript, but also in many
                    other areas.</p>
            </div>
        </div>
    </main>

    </div>
</template>

<script>
    import PageHeading from './PageHeading';

    export default {
        name: 'About',
        components: {
            PageHeading
        },
        data() {
            return {
            
            }
        },
    };
</script>

<style scoped>
</style>