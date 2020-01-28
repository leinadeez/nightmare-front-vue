<template>
    <div class="container">
        <div class="home row">
            <article class=".col-8">
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
<style scoped>

</style>