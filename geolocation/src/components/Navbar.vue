<template>
    <div class="navbar">
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">GeoLocation</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><route-link>Sign in</route-link></li>
                <li><route-link>Sing up</route-link></li>
            </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
nav {
    background-color: #4527a0;
    padding-left: 1rem;
    padding-right: 1rem;
}

ul li {
    margin-left: 1rem;
}

li:hover {
    background-color: #5e35b1;
    cursor: pointer;
}
</style>