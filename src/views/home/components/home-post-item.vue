<template>
    <div class="singlePost">
        <h2>{{post.title}}</h2>
        <h3>{{post.subtitle}}</h3>
        {{post.content}}
        <p><a href="">{{post.author}}</a> - <i>{{formatDate(post.publishDate)}}</i></p>
        <ul>
            <li><button type="submit" v-on:click.prevent="editThis(post._id)">Edit</button></li>
            <li><button type="submit" v-on:click.prevent="deleteThis(post._id)">Delete this!!!!</button></li>

        </ul>
        
        
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
            axios.delete('/api/posts/'+id)
                .then((response) => {
                    console.log("Post deletado!", response)
                    location.reload()
                })
                .catch((error) => {
                    alert(error)
            });  
        },
        editThis(id) {
            console.log("editando: (ainda não implementado)", id)
        }
    }
}
</script>
<style lang="scss">
.singlePost {
    background-color: $window-bg;
    border: 1px solid $border-color;
    border-radius: 10px;
    padding:10px; 
    margin-bottom: 10px; 
    clear: both;
    ul {
        list-style: none;
        padding:0;
        float:right;
        li {
            float:left;
            margin-right: 10px;
        }
    }
    
}
</style>