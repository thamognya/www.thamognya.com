<template>
    <div class="font-fira">
        <IndexPage />
        <h1>jdf</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IndexPage from '../components/indexPage.vue'

export default Vue.extend({
    name: 'IndexPage',
    components: { IndexPage }
})
</script>
