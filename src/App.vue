<template>
    <div id="app">
        <transition name="bounce">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
// import 'babel-polyfill';
export default {
    name: 'app',
    components: {
    }
}
</script>
<style type="text/css">
@import "assets/css/common.css";
</style>