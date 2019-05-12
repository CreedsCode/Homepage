<template>
    <div>

    <header>
        <div class="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>

        <nav class="menu">
            <div class="menu-branding">
                <div class="portrait"></div>
            </div>
            <ul class="menu-nav">
                <li class="nav-item current">
                    <a href="" class="nav-link">
                        <router-link to="/home">Home</router-link>
                    </a>

                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="/about">About Me</router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">
                        <router-link to="/work">Work</router-link>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    <main id="about">
        <h1 class="lg-heading">About <span class="text-secondary">Me</span></h1>
        <h2 class="sm-heading">Let me tell you a few things...</h2>
        <div class="about-info">
            <img src="img/portrait.jpg" alt="Logo" class="bio-image">
            <div class="bio">
                <h3 class="text-secondary">BIO</h3>
                <p>Hey, I am Dercio. I am 15 years old, from Germany and I have a lot of fun in programming. I try to realize
                    projects in most areas of software development. Especially in the area of JavaScript, but also in many
                    other areas.</p>
            </div>
        </div>
    </main>

    <footer id="main-footer">Copyright &copy; 2018</footer>
    </div>
</template>

<script>
    export default {
        name: 'About',
        props: {
            msg: String
        }
    };
</script>

<style scoped>
</style>