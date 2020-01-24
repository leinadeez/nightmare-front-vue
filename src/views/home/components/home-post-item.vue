<template>
    <div>
        <h2>{{post.title}}</h2>
        <h3>{{post.subtitle}}</h3>
        {{post.content}}
        <p><a href="">{{post.author}}</a> - <i>{{formatDate(post.publishDate)}}</i></p>
        <button type="submit" v-on:click.prevent="deleteThis(post._id)">Delete this!!!!</button>
        
    </div>
</template>
<script>
import utils from '@/utils'
import axios from 'axios'

export default {
    name: 'HomePostItem',
    created() {
        this.formatDate = utils.formatDate
    },
    props: {
        post: Object
    },
    methods: {
        deleteThis(id) {
            console.log("deletando:", id)
            axios.delete('http://192.168.0.16:3000/posts/'+id)
                .then((response) => {
                    console.log("Post deletado!", response)
                    location.reload()
                })
                .catch((error) => {
                    alert(error)
            });  
        }
    }
}
</script>