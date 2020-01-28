<template>
    <div class="container">
        <div class="row">
            <h1>Timeline</h1>
        </div>
        <div class="home row">
            <article class=".col-8s">
                <home-post-item v-for="post in posts" :key="post._id" :post="post" />
            </article>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HomePostItem from './components/home-post-item'

export default {
    name: 'HomePage',
    computed: {
        ...mapGetters([
            'posts'
        ])
    },
    components: {
        'home-post-item': HomePostItem
    }
}
</script>
<style lang="scss">
</style>