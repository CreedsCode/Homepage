<template>
    <main>
        <PageHeading />
        <div class="projects">
            <div class="item">
                <a href="#!">
                    <img src="@/assets/img/projects/project1.jpg" alt="Project">
                </a>
                <a class="btn-light" href="https://www.dropbox.com/s/p67hzewpsru4a38/HighScoreRUNN%20v0.1.4.zip?dl=0">
                    <i class="fas fa-download"></i> Project
                </a>
                <a class="btn-disabled">
                    <i class="fab fa-github"></i> Github
                </a>
            </div>

            <div class="item">
                <a href="#!">
                    <img src="@/assets/img/projects/project2.jpg" alt="Project">
                </a>
                <a class="btn-light" href="https://top10crypto.creedscode.cc">
                    <i class="fas fa-eye"></i> Project
                </a>
                <a class="btn-disabled">
                    <i class="fab fa-github"></i> Github
                </a>
            </div>

        </div>
    </main>
</template>

<script>
    import PageHeading from './PageHeading';

    export default {
        name: 'Projects',
        components: {
            PageHeading
        },
        data() {
            return {
            }
        },
    };
</script>
