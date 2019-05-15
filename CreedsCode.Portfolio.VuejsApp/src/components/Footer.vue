<template>
    <footer id="main-footer">Copyright &copy; {{this.currentYear}}</footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                currentYear:(new Date()).getFullYear()
            }
        }
    }
</script>

<style scoped>
</style>