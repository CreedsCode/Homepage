<template>
    <header>
        <div @click="toggleMenu()" id="menubtn" class="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>
        <nav class="menu">
            <div class="menu-branding">
                <div class="portrait"></div>
            </div>
            <ul class="menu-nav">
                <li v-for="(item, index) in listItems" :key="index" class="nav-item">
                    <a @click="menuItemClick(item.routerRoutes)"  class="nav-link">
                        {{item.name}}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                isMenuOpen: false,
                menuBtn: null,
                menu : null,
                menuNav : null,
                menuBranding : null,
                navItems : null
            };
        },
        props: {
            isOpen: {
                type: Boolean,
                required:false
            },
            listItems: {
                type:  Array,
                required:true
            }
        },
        methods: {
            menuItemClick(route) {
                this.closeMenu();
                this.$router.push(route);
            },
            openMenu() {
                this.$emit("openMenu");
                this.isMenuOpen = true;

                this.$nextTick(function() {
                    this.menuBtn.classList.add("close");
                    this.menu.classList.add("show");
                    this.menuNav.classList.add("show");
                    this.menuBranding.classList.add("show");
                    this.navItems.forEach(item => item.classList.add("show"));
                  });
            },
            closeMenu() {
                this.$emit("closeMenu");
                this.isMenuOpen = false;

                this.$nextTick(function () {
                    this.menuBtn.classList.remove("close");
                    this.menu.classList.remove("show");
                    this.menuNav.classList.remove("show");
                    this.menuBranding.classList.remove("show");
                    this.vnavItems.forEach(item => item.classList.remove("show"));
                })
            },
            toggleMenu() {
                this.$emit("toggleMenu");

                if (!this.isMenuOpen) {
                    this.openMenu();
                } else {
                    this.closeMenu();
                }
            }
        },
        mounted() {
            this.menuBtn = document.querySelector(".menu-btn");
            this.menu = document.querySelector(".menu");
            this.menuNav = document.querySelector(".menu-nav");
            this.menuBranding = document.querySelector(".menu-branding");
            this.navItems = document.querySelectorAll(".nav-item");

            if (this.isMenuOpen || this.isOpen) {
                this.openMenu();
            }

        }
    }
</script>

<style scoped>
</style>