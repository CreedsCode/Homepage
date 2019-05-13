<template>
    <div>
    <main id="about">
        <h1 class="lg-heading">My <span class="text-secondary">Work</span></h1>
        <h2 class="sm-heading">Check out some of my projects...</h2>
        <div class="projects">
            <div class="item">
                <a href="#!">
                    <img src="img/projects/project1.jpg" alt="Project">
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
                    <img src="img/projects/project2.jpg" alt="Project">
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

    <footer id="main-footer">Copyright &copy; 2018</footer>
    </div>
</template>

<script>
    export default {
        name: 'Work',
        props: {
            msg: String
        }
    };
</script>

<style scoped>
</style>