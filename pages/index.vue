<template>
    <div class="font-fira bg-slate-500 dark:bg-red-200">
        <Navbar />
        <HomePage />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HomePage from '~/components/homePage.vue'
import Navbar from '~/components/navbar.vue'

export default Vue.extend({
    name: 'IndexPage',
    components: { HomePage, Navbar }
})
</script>
