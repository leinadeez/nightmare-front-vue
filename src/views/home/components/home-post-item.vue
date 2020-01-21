<template>
    <div>
        <h2>{{post.title}}</h2>
        <h3>{{post.subtitle}}</h3>
        {{post.content}}
        <p><a href="">{{post.author}}</a> - <i>{{formatDate(post.publishDate)}}</i></p>
    </div>
</template>
<script>
import utils from '@/utils'

export default {
    name: 'HomePostItem',
    created() {
        this.formatDate = utils.formatDate
    },
    props: {
        post: Object
    }
}
</script>