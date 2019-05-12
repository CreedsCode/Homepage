<template>
    <div>
        <header class="home">
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
                        <a  class="nav-link">
                            <router-link to="/about">About Me</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a  class="nav-link">
                            <router-link to="/work">Work</router-link>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <main id="home">
            <h1 class="lg-heading">Creeds <span class="text-secondary">Code</span></h1>
            <h2 class="sm-heading">Hobby Programmer.</h2>
            <div class="icons">
                <a href="https://twitter.com/creedgamesoa"><i class="fab fa-twitter fa-2x"></i></a>
                <a href="https://github.com/CreedsCode/"><i class="fab fa-github fa-2x"></i></a>
                <a href="https://www.instagram.com/creedscode/"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="https://www.youtube.com/channel/UCnZh8MLnCOugySmVjay55dA"><i class="fab fa-youtube fa-2x"></i></a>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
